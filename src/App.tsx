import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OverviewText from "./components/OverviewText";
import PagePreview from "./components/PagePreview";

function App() {
  return (
    <div className="App">
      <Header />
      <OverviewText />
      <PagePreview />
      <Footer />
    </div>
  );
}

export default App;
