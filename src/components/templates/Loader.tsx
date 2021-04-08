import React from 'react';
import spinner from '../../assets/images/spinner.svg';

const Loader: React.ComponentType = () => (
  <div className="spinner">
    <img src={spinner} alt="loader" />
  </div>
);

export default Loader;
