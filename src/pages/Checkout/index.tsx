import React from 'react';

// INTERFACES
import Header from 'src/components/organisms/Header';

// COMPONENTS
import CheckoutTemplate from '../../components/templates/Checkout';

const Checkout: React.FC = () => (
  <>
    <Header />
    <CheckoutTemplate />
  </>
);

export default Checkout;
