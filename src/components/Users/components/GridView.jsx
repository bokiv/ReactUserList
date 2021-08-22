import React from "react";

export const GridView = ({users}) => {
  return (



     <div className="row container">

        {users.map((element, index) => ( 
        <div className="col s2 m4 row" key={index}>
          <div className="card">
            <div className="card-image">
              <img src={element.picture.large}  alt=""/>
              <span className="card-title">{element.name.first}</span>
            </div>
            <div className="card-content">
              <p> {"email: " + element.email}</p>
              <p> {"date of birth: " + element.dob.date.slice(0, 10).split("-").reverse().join(".")}</p>
            </div>
          </div>
           </div>
        ))}
     
    </div>


  );

};
