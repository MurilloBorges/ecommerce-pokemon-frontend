import axios, { AxiosInstance } from 'axios';

abstract class HttpClient {
  protected readonly instance: AxiosInstance;

  public constructor(
    baseURL: string = process.env.REACT_APP_URL_API as string,
    headers?: Record<string, unknown>,
    responseType?: 'json',
  ) {
    this.instance = axios.create({
      baseURL,
      headers,
      responseType,
    });
  }
}

export default HttpClient;
