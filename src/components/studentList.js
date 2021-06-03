import React, { useState, useEffect } from "react";
import PrintStuedentDetails from "./printStuedentDetails";

const StudentList = () => {
  let [helpText, setHelpText] = useState("");
  let [showMsg, setShowMsg] = useState(false);
  let [studentDetails, setStudentDetails] = useState([]);
  let [isSubmitted, setIsSubmitted] = useState(false);
  const emptyStudentObj = {
    stuRoll: "",
    stuName: "",
    stuStandard: "",
    stuGrade: ""
  };
  let [newStudent, setNewStudent] = useState(emptyStudentObj);

  const updateNewStu = (event, field) => {
    let value = event.target.value;

    setNewStudent(() => {
      newStudent[field] = value;
      return newStudent;
    });
  };

  const addNewStudent = (event) => setIsSubmitted(true);

  const deleteAction = (index) => {
    //studentDetails.slice();
  };

  useEffect(() => {
    console.log("useEffect called -->");
    if (
      isSubmitted &&
      newStudent.stuRoll &&
      newStudent.stuName &&
      newStudent.stuStandard &&
      newStudent.stuGrade
    ) {
      let isAvailable = false;
      if (studentDetails.length > 0) {
        isAvailable = studentDetails.find(
          (item) => item.stuRoll === newStudent.stuRoll
        );
        console.log("asdasd");
        console.log(isAvailable);
      }
      if (!isAvailable) {
        setIsSubmitted(false);
        setStudentDetails(() => {
          setNewStudent(emptyStudentObj);
          console.log([...studentDetails, ...[newStudent]]);
          return [...studentDetails, ...[newStudent]];
        });
      } else {
        //helpText = "Entered roll number already available.";
        setHelpText("Entered roll number already available.");
        setShowMsg(true);
        setTimeout(() => {
          setShowMsg(false);
        }, 5000);
      }
    }
  }, [isSubmitted]);

  return (
    <div className="studentContainer">
      <h1>Student List Manipulation</h1>
      {showMsg && <span className="help">{helpText}</span>}
      <div className="studentTableContainer">
        <span>Roll No</span>
        <span>Name</span>
        <span>Standard</span>
        <span>Grade</span>
        <span>Action</span>
      </div>
      <form>
        <div className="studentTableContainer">
          <span>
            <input
              type="number"
              name="stuRoll"
              className="stuInput"
              onBlur={(event) => updateNewStu(event, "stuRoll")}
            />
          </span>
          <span>
            <input
              type="text"
              name="stuName"
              className="stuInput"
              onBlur={(event) => updateNewStu(event, "stuName")}
            />
          </span>
          <span>
            <input
              type="text"
              name="stuStandard"
              className="stuInput"
              onBlur={(event) => updateNewStu(event, "stuStandard")}
            />
          </span>
          <span>
            <input
              type="text"
              name="stuGrade"
              className="stuInput"
              onBlur={(event) => updateNewStu(event, "stuGrade")}
            />
          </span>
          <span>
            <button
              type="reset"
              name="add"
              onClick={(event) => addNewStudent(event)}
            >
              ADD
            </button>
          </span>
        </div>
      </form>
      <PrintStuedentDetails studentDetails={studentDetails} />
    </div>
  );
};

export default StudentList;
