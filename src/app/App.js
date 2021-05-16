import { Header } from "containers";
import {
  CarWashCertificationEdit,
  CarWashCertificationPage,
  CarWashGoodsReviewEdit,
  HomePage,
} from "pages";
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
        <Route
          exact
          path="/CarWashCertificationEdit"
          component={CarWashCertificationEdit}
        ></Route>
        <Route
          exact
          path="/CarWashCertificationPage"
          component={CarWashCertificationPage}
        ></Route>
        <Route
          exact
          path="/CarWashGoodsReviewEdit"
          component={CarWashGoodsReviewEdit}
        ></Route>
      </StyledMain>
    </Router>
  );
}

export default App;
