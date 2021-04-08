/* eslint-disable arrow-parens */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-console */
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { blockInvalid } from 'src/helpers/validations';
import { ValidationError } from 'yup';

interface ValidationErrors {
  [key: string]: string[];
}

interface ErrorYupProps {
  errors: [string[]];
  message: string;
}

interface ErrorProps {
  errors: [{ error: string; code: number }];
}

export default class Error {
  static generic(error: Error) {
    try {
      if (error instanceof ValidationError) {
        this.yup(error);
      }
      if ((error as AxiosError).isAxiosError !== undefined) {
        this.api(error as AxiosError);
      }
    } catch {
      console.log(error);
      toast.error(`Error: ${error as string}`);
    }
  }

  static api(error: AxiosError) {
    try {
      const status = error.response?.status;
      const data = error.response?.data as ErrorProps;
      switch (status) {
        case 400:
          if (data.errors instanceof Array) {
            data.errors.map(er => toast.info(er.error));
          } else {
            const dataYupErrors = error.response?.data as ErrorYupProps;
            Object.values(dataYupErrors.errors).map(err =>
              err.map((er: string) => toast.info(er)),
            );
          }
          break;
        case 401:
        case 404:
          console.log(data);
          data.errors.map(er => toast.info(er.error));
          break;
        case 422:
          console.log(data);
          toast.info(data);
          break;
        default:
          console.log(error);
          toast.error('Falha na requisição.');
          break;
      }
    } catch (e) {
      Error.generic(e);
    }
  }

  static yup(error: ValidationError) {
    const errors: ValidationErrors = {};

    error.inner.forEach(err => {
      errors[err.path as string] = err.errors;
    });

    Object.entries(errors).map(err => blockInvalid(err[0]));
    Object.values(errors).map(err => err.map((er: string) => toast.info(er)));

    console.error(error, errors);
  }
}
