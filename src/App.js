import React from 'react';
import './App.css';
import Movie from './Movie'

let title="The Trilogy"
let hours="4"
let minutes="57"


let titles = ["The Fellowship of the Ring","The Two Towers","The Return of the King"]
let hoursArr = ["2","2","3"]
let minsArr =["58","59","21"]

function App() {
  return (
    <div className="App">
          <Movie title={title} hours={hours} minutes={minutes}/>
          <hr/>      
          <Movie title={titles[0]} hours={hoursArr[0]} minutes={minsArr[0]}/>
          <Movie title={titles[1]} hours={hoursArr[1]} minutes={minsArr[1]}/>
          <Movie title={titles[2]} hours={hoursArr[2]} minutes={minsArr[2]}/>
          <hr/>
          <Movie titles ={titles} hours={hoursArr} minutes={minsArr} />
    </div>
  );
}

export default App;
