import React from 'react';
import { Suspense } from 'react';
import Header from 'components/header/Header';

import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
