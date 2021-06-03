import React, { useState } from "react";

const DoToList = () => {
  const [doToList, setDoToList] = useState([]);

  const taskEvent = (e, fieldName, index) => {
    if (fieldName === "task") {
      let newTask = { task: "", complete: false };
      if (e.target.value) {
        let newTaskVal = e.target.value;
        e.target.value = "";
        setDoToList(() => {
          newTask[fieldName] = newTaskVal;
          return [...doToList, ...[newTask]];
        });
      }
    } else if (fieldName === "complete") {
      setDoToList(() => {
        doToList[index].complete = !doToList[index].complete;
        return [...doToList];
      });
    } else if (fieldName === "delete") {
      if (index === 0) {
        if (doToList.length === 1) {
          setDoToList([]);
        } else if (doToList.length > 1) {
          setDoToList([...doToList.slice(1, doToList.length)]);
        }
      } else {
        setDoToList([
          ...doToList.slice(0, index),
          ...doToList.slice(index + 1, doToList.length)
        ]);
      }
    }
  };

  const listItems = () => {
    return (
      <>
        {doToList &&
          doToList.map((item, index) => {
            return (
              <div
                className="ListItems-list"
                key={item.task.toString() + index}
              >
                <div className="index">{index + 1}</div>
                <div
                  className={
                    item.complete ? "task completed" : "task uncompleted"
                  }
                >
                  {item.task}
                </div>
                <div className="actionItems">
                  <button onClick={(e) => taskEvent(e, "complete", index)}>
                    {!item.complete ? "Complete" : "Uncomplete"}
                  </button>
                  <button onClick={(e) => taskEvent(e, "delete", index)}>
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
      </>
    );
  };

  return (
    <div className="doToListWrapper">
      <h1>Do To List</h1>
      <div className="AddTask">
        <input type="text" onBlur={(e) => taskEvent(e, "task")} />
      </div>
      <div className="ListItems">{listItems()}</div>
    </div>
  );
};

export default DoToList;
