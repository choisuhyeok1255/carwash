import { Container } from "components";
import { Header } from "containers";
import {
  CarWashCertificationEdit,
  CarWashCertificationPage,
  CarWashGoodsReviewEdit,
  CarWashGoodsReviewPage,
  CarWashGoodsReviewModifyPage,
  HomePage,
  CarWashProfile,
  CarWashUserCertificationPage,
  CarWashUserGoodsReviewPage,
  CarWashGoodsReviewList,
  AttendanceCheckPage,
  CarWashCertificationReviewPage,
} from "pages";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.scss";

const StyledMain = styled.main`
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  padding: 0 30px;
`;

function App() {
  return (
    <Router>
      <Container $flexFlow="column" $alignItems="center">
        <Route path="/" component={Header} />
        <Route exact path="/" component={HomePage} />
        <StyledMain>
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
            path="/CarWashCertificationReviewPage/:postid"
            component={CarWashCertificationReviewPage}
          />
          <Route
            exact
            path="/CarWashGoodsReviewEdit"
            component={CarWashGoodsReviewEdit}
          />
          <Route
            exact
            path="/CarWashGoodsReviewModifyPage"
            component={CarWashGoodsReviewModifyPage}
          />
          <Route
            exact
            path="/CarWashGoodsReviewList"
            component={CarWashGoodsReviewList}
          />
          <Route
            exact
            path="/CarWashGoodsReviewPage/:postid"
            component={CarWashGoodsReviewPage}
          />
          <Route exact path="/CarWashProfile" component={CarWashProfile} />
          <Route
            exact
            path="/CarWashUserCertificationPage"
            component={CarWashUserCertificationPage}
          />
          <Route
            exact
            path="/CarWashUserGoodsReviewPage"
            component={CarWashUserGoodsReviewPage}
          />
          <Route
            exact
            path="/AttendanceCheckPage"
            component={AttendanceCheckPage}
          />
        </StyledMain>
      </Container>
    </Router>
  );
}

export default App;
