import React from 'react';
import Header from "../components/header"
import Footer from "../components/footer"
import SubscribeForm from '../slices/subscribeForm';

const Layout = ({ location, children }) => {
  return (
    <div className="global-wrapper" >
      <Header />
      <main>
        <SubscribeForm />
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default Layout
