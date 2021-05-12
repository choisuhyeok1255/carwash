import { Header } from "containers";
import HomePage from "pages/HomePage/HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={HomePage}></Route>
    </Router>
  );
}

export default App;
