import React from "react";

const PrintStuedentDetails = (props) => {
  console.log("PrintStuedentDetails");
  console.log(props);

  //const deleteStu = (index) => props.deleteAction(index);

  const print = () => {
    const stuDetails = props.studentDetails || [];
    //<!-- <div className="delete" onClick={(e) => deleteStu(index)}></div> -->
    const details = stuDetails.map((item, index) => {
      return (
        <div className="studentTableContainer" key={item.stuRoll.toString()}>
          <span>{item.stuRoll}</span>
          <span>{item.stuName}</span>
          <span>{item.stuStandard}</span>
          <span>{item.stuGrade}</span>
          <span></span>
        </div>
      );
    });
    console.log(details);
    return <>{details}</>;
  };

  return <div className="printStudentList">{print()}</div>;
};

export default PrintStuedentDetails;
