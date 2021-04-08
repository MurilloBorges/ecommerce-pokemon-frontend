import React from 'react';

// INTERFACES
import Header from 'src/components/organisms/Header';

// COMPONENTS
import HomeTemplate from '../../components/templates/Home';

const Home: React.FC = () => (
  <>
    <Header />
    <HomeTemplate />
  </>
);

export default Home;
