import React from 'react';

// INTERFACES
import Header from 'src/components/organisms/Header';
import Footer from 'src/components/organisms/Footer';

// COMPONENTS
import CheckoutTemplate from '../../components/templates/Checkout';

const Checkout: React.FC = () => (
  <>
    <Header />
    <CheckoutTemplate />
    <Footer />
  </>
);

export default Checkout;
