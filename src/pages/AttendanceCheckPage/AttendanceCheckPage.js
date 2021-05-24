import { Heading, Span } from "components";
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
      <Heading $margin="22px 0 0 0">출석 체크</Heading>
      <AttendanceList>
        {attendanceList.map((list, index) => {
          return (
            <AttendanceListItem key={index}>
              <Span $margin="0 10px 0 0 ">{index + 1}등</Span>
              {list.userName}
            </AttendanceListItem>
          );
        })}
      </AttendanceList>
    </>
  );
};

export default AttendanceCheckPage;
