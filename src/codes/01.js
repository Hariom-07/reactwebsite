import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const name = 'Hariom';
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
const img1 = 'https://picsum.photos/200/300';
const img2 = 'https://picsum.photos/250/300';
const img3 = 'https://picsum.photos/260/300';

const heading = {
    color: "red",
    textTransform: "capitalize",
    textAlign: "center",
    fontWeight: "bold",
    margin: "70px 0"
}

ReactDOM.render(
  <React.Fragment>
<h1  style={heading} > My name is {name} </h1>

<div className="img-div" > 
<p> today date is currDate {currDate} </p>
<p> today time is currTime {currTime} </p>
<img src={img1} />
<img src={img2} />
<img src={img3} />
</div>
</React.Fragment>,
  document.getElementById('root'));


