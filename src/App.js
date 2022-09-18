import React from "react";
import Showcase from "./components/Body/Showcase";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div>
      <Header />
      <div>
        <Showcase />
      </div>
      <Footer />
    </div>
  );
};

export default App;
