import React from 'react';
import Lottie from 'react-lottie';

import Title from 'src/components/atoms/Title';
import animationData from '../../../assets/images/37265-success-animation.json';

const Confirmation: React.FC = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

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
