import React from 'react';

const Layout = ({ children }) => {
  return (
    <main>
      <header>Header</header>
      <div>{children}</div>
    </main>
  );
};

export default Layout;
