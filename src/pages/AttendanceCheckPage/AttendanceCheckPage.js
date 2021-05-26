import { Container, Heading, Span, SVGIcon } from "components";
import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { getAttendanceCheck } from "utils/attendanceCheck";

const AttendanceList = styled.ol`
  margin: 30px 0 0 0;
`;
const AttendanceListItem = styled.li`
  margin: 0 0 10px 0;
  font-size: 1.5rem;
`;

const AttendanceCheckPage = () => {
  const [attendanceList, setAttendanceList] = useState([]);

  useEffect(() => {
    getAttendanceCheck(setAttendanceList);
  }, []);

  return (
    <>
      <Heading $margin="22px 0 0 10px">출석 체크</Heading>
      <AttendanceList>
        {attendanceList.map((list, index) => {
          return (
            <AttendanceListItem key={index}>
              <Container $alignItems="center">
                <Span $margin="0 10px 0 0 ">{index + 1}등</Span>
                <Span $margin="0 10px 0 0 ">{list.userName}</Span>
                {index === 0 ? (
                  <SVGIcon type="FirstMedal" $width="20px" $height="20px" />
                ) : null}
                {index === 1 ? (
                  <SVGIcon type="SecondMedal" $width="20px" $height="20px" />
                ) : null}
                {index === 2 ? (
                  <SVGIcon type="ThirdMedal" $width="20px" $height="20px" />
                ) : null}
              </Container>
            </AttendanceListItem>
          );
        })}
      </AttendanceList>
    </>
  );
};

export default AttendanceCheckPage;
