import { db } from "./firebaseConfig";
import getToday from "./getToday";

export const setAttendance = (userName, uid) => {
  let attendanceNumber = 0;
  const temp = [];

  db.collection("attendanceCheck")
    .doc(getToday())
    .get()
    .then((doc) => {
      if (doc.data() === undefined) {
        attendanceNumber = 1;
      } else {
        temp.push(doc.data());
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
