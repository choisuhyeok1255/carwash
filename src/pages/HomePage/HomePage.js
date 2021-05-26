import { Tab } from "components";
import {} from "containers";
import styled from "styled-components";

const PositionDiv = styled.div`
  position: relative;
  width: 414px;
`;

const HomePage = ({ location }) => {
  return (
    <PositionDiv>
      <Tab location={location} />
    </PositionDiv>
  );
};

export default HomePage;
