import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OverviewText from "./components/OverviewText";

function App() {
  const hello = 5;
  return (
    <div className="App">
      <Header />
      <OverviewText /> <Footer />
    </div>
  );
}

export default App;
