import React from 'react';

// COMPONENTS
import Modal from '../organisms/Modal';
import Title from '../atoms/Title';
import IconSVG from '../molecules/IconSVG';
import Subtitle from '../atoms/Subtitle';

interface ModalPaymentProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ModalPayment: React.FC<ModalPaymentProps> = ({
  modal,
  setModal,
  handleSubmit,
}: ModalPaymentProps) => (
  <Modal start showModal={setModal} show={modal}>
    <form
      className="payment d-flex flex-column justify-content-center align-items-center text-center"
      onSubmit={handleSubmit}
    >
      <IconSVG icon="sms" width="80" height="80" fill="#7a7b7d" />
      <Title
        props={{ className: 'col-sm-12' }}
        type="h5"
        text="Link para o pagamento será enviado por SMS e E-mail"
      />
      <p className="informative mb-4 col-sm-12">
        Após a confirmação do estoque dos produtos escolhidos, será encaminhado
        o link para o pagamento do seu pedido.
      </p>
      <button type="submit" id="continue" className="btn btn-sm btn-block mt-1">
        Continuar
      </button>
      <Subtitle
        props={{
          className: 'mt-4',
          id: 'note',
        }}
        type="p"
        text="Observação: O valor da sua compra pode sofrer alterações."
      />
    </form>
  </Modal>
);

export default ModalPayment;
