import React from 'react';
import Header from "../components/header"
import Footer from "../components/footer"

const Layout = ({ location, children }) => {
  return (
    <div className="global-wrapper" >
      <Header />
      <main>
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default Layout
