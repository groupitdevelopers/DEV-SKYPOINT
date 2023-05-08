import * as React from "react";
import Header from "../components/header"
import Footer from "../components/footer"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Header />
      <main>
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
