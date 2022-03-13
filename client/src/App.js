import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./pages/LandingPage/LandingPage";

export default function App() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "93vh" }}>
        <LandingPage />
      </main>
      <Footer />
    </>
  );
}
