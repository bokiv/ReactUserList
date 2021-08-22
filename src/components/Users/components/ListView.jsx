import React from 'react';

export const ListView = ({users}) => {
  return ( 


  <ul className="collection">

     {users.map( 
       (element, index) => ( 
    <li className="collection-item avatar" key={index}>
      <img src={element.picture.thumbnail} alt="" className="circle"/>
      <span className="title">{"name: " + element.name.first}</span>
      <p> {"email: " + element.email}</p>
     <p> {"date of birth: " +element.dob.date.slice(0, 10).split("-").reverse().join("-")}</p>
        
       {/* <a href="#!" className="secondary-content"></a>  */}
    </li>
    ))
     }
     </ul>
     
     )

}