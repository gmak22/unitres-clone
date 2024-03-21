import React from 'react';
import "../Styles/Appbox.css"

export default function AppBoxes({BoxDeatil}) {


  return (
    <div id='container'>
      {
        BoxDeatil.map((ele,ind)=>
        <div id='sub-container'>
          <img src={ele.img} alt="" />
          <h2>{ele.title}</h2>
          <p>{ele.desc}</p>
        </div>
        )
      }
    </div>
  )
}
