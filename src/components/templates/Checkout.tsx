import React from 'react';
import { useHistory } from 'react-router-dom';

// HELPERS
import { partners } from 'src/helpers/functions';

import Button from '../atoms/Button';
import IconSVG from '../molecules/IconSVG';

import ShoppingCart from '../organisms/checkout/ShoppingCart';
import Confirmation from '../organisms/checkout/Confirmation';

interface StepsProps {
  name: string;
  icon: string;
  active: boolean;
  bodyComponent: React.FC;
}

const Checkout: React.FC = () => {
  const history = useHistory();
  const [steps, setSteps] = React.useState<StepsProps[]>([
    {
      name: 'Carrinho',
      icon: 'cart',
      active: true,
      bodyComponent: ShoppingCart,
    },
    {
      name: 'Confirmação',
      icon: 'checkmark',
      active: false,
      bodyComponent: Confirmation,
    },
  ]);

  const getActivedStep = () => steps.findIndex(({ active }) => active === true);

  const handleBody = () => {
    const activedStep = steps.find(({ active }) => active === true);
    const { bodyComponent: BodyComponent } = activedStep as StepsProps;
    return <BodyComponent />;
  };

  const handleStep = (operation: string) => {
    const index = getActivedStep();
    if (operation === 'next' && index + 1 !== steps.length) {
      steps[index].active = false;
      steps[index + 1].active = true;
    } else if (operation === 'undo') {
      steps[index].active = false;
      steps[index - 1].active = true;
    }
    setSteps([...steps]);
  };

  const handleTextButtonNext = () => {
    switch (getActivedStep()) {
      case 0:
        return 'Fechar Carrinho';

      case steps.length - 1:
        return 'Finalizar Pedido';

      default:
        return 'Próxima Etapa';
    }
  };

  const handleGroupButton = () => {
    if (getActivedStep() !== 1) {
      return (
        <div className="group-buttons">
          <Button
            customClass="btn btn-back"
            handleClick={() =>
              getActivedStep() === 0
                ? history.push(`/${partners()}`)
                : handleStep('undo')
            }
            text={
              getActivedStep() === 0
                ? 'Continuar Comprando'
                : `Voltar para ${steps[getActivedStep() - 1].name}`
            }
          />
          <Button
            customClass="btn btn-continue"
            handleClick={() => handleStep('next')}
            text={handleTextButtonNext()}
          />
        </div>
      );
    }
    return '';
  };

  return (
    <div className="checkout">
      <div className="container-checkout container">
        <div className="header-checkout">
          {steps.map((step, key) => (
            <React.Fragment key={key.toString()}>
              <h4>
                <span
                  className={`badge ${
                    step.active
                      ? 'badge-checkout-active'
                      : 'badge-checkout-deactive'
                  }`}
                >
                  <IconSVG
                    icon={step.icon}
                    className="mr-2"
                    width="20"
                    height="20"
                    fill={step.active ? '#ffeffc' : ''}
                  />
                  {step.name}
                </span>
              </h4>
              {key + 1 !== steps.length && (
                <IconSVG
                  fill="#ff5450"
                  icon="angle-double-right"
                  width="30"
                  height="30"
                />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="legend-checkout">
          <div className="content-checkout">{handleBody()}</div>
          {handleGroupButton()}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
