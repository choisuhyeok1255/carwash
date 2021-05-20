import { Container } from "components";
import { Header } from "containers";
import {
  CarWashCertificationEdit,
  CarWashCertificationPage,
  CarWashGoodsReviewEdit,
  CarWashGoodsReviewPage,
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
      <Container $flexFlow="column" $alignItems="center">
        <Header />
        <StyledMain>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/CarWashCertificationEdit"
            component={CarWashCertificationEdit}
          />
          <Route
            exact
            path="/CarWashCertificationPage"
            component={CarWashCertificationPage}
          />
          <Route
            exact
            path="/CarWashGoodsReviewEdit"
            component={CarWashGoodsReviewEdit}
          />
          <Route
            exact
            path="/CarWashGoodsReviewPage"
            component={CarWashGoodsReviewPage}
          />
        </StyledMain>
      </Container>
    </Router>
  );
}

export default App;
