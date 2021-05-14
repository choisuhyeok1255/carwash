import { Header } from "containers";
import HomePage from "pages/HomePage/HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.scss";

const StyledMain = styled.main`
  width: 414px;
  margin: 0 auto;
  padding: 0 30px;
`;

function App() {
  return (
    <Router>
      <StyledMain>
        <Header />
        <Route exact path="/" component={HomePage}></Route>
      </StyledMain>
    </Router>
  );
}

export default App;
