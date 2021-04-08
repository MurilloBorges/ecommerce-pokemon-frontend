import React from 'react';

import Subtitle from 'src/components/atoms/Subtitle';
import Title from 'src/components/atoms/Title';
import IconSVG from 'src/components/molecules/IconSVG';

const Confirmation: React.FC = () => {
  const [info, setInfo] = React.useState('');

  return (
    <div className="checkout-confirmation">
      <div className="container-confirmation">
        <Title type="h4" text="Parabéns seu pedido número" />
        <Title
          props={{ className: 'confirmation-code' }}
          type="h1"
          text="#58742698"
        />
        <Title type="h4" text="foi confirmado com sucesso." />

        <div className="row checkout-resume">
          <div className="selected-place">
            <Subtitle
              props={{ className: 'resume-subtitle' }}
              type="span"
              text="Loja Escolhida:"
            />
            <Subtitle type="span" text="Empório Prime - Unidade 1" />
            <Subtitle type="span" text="Rua 13 de Janeiro, 2587 - Jardins" />
            <Subtitle type="span" text="São Paulo - SP - CEP - 14708-890" />
            <Subtitle type="span" text="Telefone (11) 2137-4782" />
          </div>
          <div className="selected-payment">
            <Subtitle
              props={{ className: 'resume-subtitle' }}
              type="span"
              text="Forma de Pagamento:"
            />
            <Subtitle type="span" text="Cartão de Crédito" />
            <Subtitle type="span" text="Master Card" />
            <IconSVG width="50" height="50" icon="mastercard" />
          </div>
          <div className="selected-delivery">
            <Subtitle
              props={{ className: 'resume-subtitle' }}
              type="span"
              text="Previsão de Entrega:"
            />
            <Subtitle type="span" text="15/31/2021" />
            <Subtitle type="span" text="Horario previsto" />
            <Subtitle type="span" text="Das 12h ás 14h" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
