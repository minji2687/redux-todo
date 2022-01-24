import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Todos from "./pages/Todos";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Todos} />
    </BrowserRouter>
  );
}

export default App;
