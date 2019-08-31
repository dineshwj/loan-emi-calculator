import React from "react";

const history = props => {
  const data = JSON.parse(localStorage.getItem("items"));
  console.log("dataaaaaaa", data);

  const dataFiltre = data.reduce((unique, o) => {
    if (!unique.some(obj => obj.amount === o.amount && obj.month === o.month)) {
      unique.push(o);
    }
    return unique;
  }, []);

  return dataFiltre.map((item, i) => {
    return (
      <div className="h-card" key={i}>
        <ul>
          <li style={{ float: "left" }}>Loan Amount: {item.amount}</li>
          <li style={{ float: "right" }}>Duration: {item.month}</li>
        </ul>
      </div>
    );
  });
};

export default history;
