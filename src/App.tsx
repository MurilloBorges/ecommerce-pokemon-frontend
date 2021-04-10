/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { Suspense, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import Routes from './routes';

// COMPONENTS
import Loader from './components/templates/Loader';
import 'react-toastify/dist/ReactToastify.css';
import { partners } from './helpers/functions';
import colors from './assets/styles/colors';
import Error from './exceptions/Error';

function App(): React.ReactElement {
  const [loading, setLoading] = React.useState(true);
  const loader = useSelector(
    (store: Record<string, unknown>) =>
      store.loading as Record<string, boolean>,
  );

  useEffect(() => {
    toast.configure();
    const partner = partners();
    try {
      const root = document.documentElement;
      root.style.setProperty('--primary-color', colors[partner].primaryColor);
      root.style.setProperty(
        '--secondary-color',
        colors[partner].secondaryColor,
      );
      root.style.setProperty('--tertiary-color', colors[partner].tertiaryColor);
      root.style.setProperty(
        '--primary-color-hover',
        colors[partner].primaryColorHover,
      );
    } catch (error) {
      Error.generic(error);
    }
  }, []);

  window.addEventListener('load', () => setLoading(false));

  return (
    <Suspense fallback={<Loader />}>
      {(loading || loader) && <Loader />}
      <Routes />
    </Suspense>
  );
}

export default App;
