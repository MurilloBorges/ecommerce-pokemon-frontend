import React from 'react';

// INTERFACES
import Header from 'src/components/organisms/Header';
import Footer from 'src/components/organisms/Footer';

// COMPONENTS
import HomeTemplate from '../../components/templates/Home';

const Home: React.FC = () => (
  <>
    <Header />
    <HomeTemplate />
    <Footer />
  </>
);

export default Home;
