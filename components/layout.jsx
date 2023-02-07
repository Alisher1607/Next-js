import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
