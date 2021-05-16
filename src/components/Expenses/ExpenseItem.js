import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  //useState must always be called within a function (and will call the function again)
  const [title, setTitle] = useState(props.title);
  console.log('ExpenseItem evaluated by React')

  //Defining clickHandler (best not to produce function within return statement)
  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };
  return (
    <Card className="expense-item">
      {/*props.date needs to be funneled again!*/}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
