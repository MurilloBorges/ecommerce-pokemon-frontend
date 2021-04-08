import React, { Suspense, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import Routes from './routes';

// COMPONENTS
import Loader from './components/templates/Loader';
import 'react-toastify/dist/ReactToastify.css';

import Footer from './components/organisms/Footer';

function App(): React.ReactElement {
  const [loading, setLoading] = React.useState(true);
  const loader = useSelector(
    (store: Record<string, unknown>) =>
      store.loading as Record<string, boolean>,
  );

  useEffect(() => {
    toast.configure();
  }, []);

  window.addEventListener('load', () => setLoading(false));

  return (
    <Suspense fallback={<Loader />}>
      {(loading || loader) && <Loader />}
      <Routes />
      <Footer />
    </Suspense>
  );
}

export default App;
