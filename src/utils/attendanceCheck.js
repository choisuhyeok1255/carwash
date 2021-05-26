import { db } from "./firebaseConfig";
import getToday from "./getToday";

export const setAttendance = (userName, uid) => {
  let attendanceNumber = 0;

  db.collection("attendanceCheck")
    .doc(getToday())
    .get()
    .then((doc) => {
      if (doc.data() === undefined) {
        attendanceNumber = 1;
      } else {
        const temp = [];
        for (const key in doc.data()) {
          temp.push(doc.data()[key]);
        }
        // firebase에서 같은 uid가 있는 지 확인
        const sameUser = temp.filter((user) => user.userUid === uid);

        //같은 uid가 있으면 return 시켜버림 (1회 이상 로그인)
        if (sameUser.length > 0) return;

        attendanceNumber = temp.length + 1;
      }

      db.collection("attendanceCheck")
        .doc(getToday())
        .set(
          {
            [attendanceNumber]: {
              userName: userName,
              userUid: uid,
            },
          },
          { merge: true }
        );
    });
};

export const getAttendanceCheck = (setAttendanceList) => {
  db.collection("attendanceCheck")
    .doc(getToday())
    .get()
    .then((doc) => {
      const temp = [];
      for (const key in doc.data()) {
        temp.push(doc.data()[key]);
      }
      setAttendanceList(temp);
    });
};
