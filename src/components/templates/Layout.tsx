import React from 'react';

// INTERFACES
import { LayoutProps } from '../../@types';

// COMPONENTS
import Footer from '../organisms/Footer';

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => (
  <main>
    {children}
    <Footer />
  </main>
);

export default Layout;
