import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ Children }) {
  return (
    <>
      <Navbar />
      <main>{Children}</main>
      <Footer />
    </>
  );
}
