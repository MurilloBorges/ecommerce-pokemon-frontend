import React, { useEffect } from 'react';
import Lottie from 'react-lottie';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// INTERFACES
import ShoppingCartProps from 'src/@types/ShoppingCart';

import Title from 'src/components/atoms/Title';
import { partners } from 'src/helpers/functions';
import animationData from '../../../assets/images/37265-success-animation.json';

const dispatcher = (type: string, payload: ShoppingCartProps[]) => ({
  type,
  payload,
});

const Confirmation: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  useEffect(() => {
    dispatch(dispatcher('SHOPPING_CART', []));
    setTimeout(() => {
      history.push(`/${partners()}`);
    }, 3000);
  }, []);

  return (
    <div className="checkout-confirmation">
      <div className="container-confirmation">
        <Lottie options={defaultOptions} height={200} width={200} />
        <Title type="h4" text="Parabéns seu pedido número" />
        <Title
          props={{ className: 'confirmation-code' }}
          type="h1"
          text={`#${Math.floor(Math.random() * 99999999) + 10000000}`}
        />
        <Title type="h4" text="foi confirmado com sucesso." />
      </div>
    </div>
  );
};

export default Confirmation;
