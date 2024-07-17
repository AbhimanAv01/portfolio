// components/Layout.js
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="mx-10 sm:mx-1 md:mx-5 lg:mx-10 xl:mx-30">
      {children}
    </div>
  );
};

export default Layout;
