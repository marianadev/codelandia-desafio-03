import { Fragment } from "react";
import Header from "./components/Header/Header.jsx";
import Results from "./components/Results/Results.jsx";
import Contact from "./components/Contact/Contact.jsx";

function App() {
  return (
    <Fragment>
      <Header />
      <Results />
      <Contact />
    </Fragment>
  )
}

export default App
