import React , {useState}from 'react';
import 'animate.css'
import './App.css';


function handleSlider(isOpen, setOpen){
  if(isOpen === true){
    setOpen(isOpen = false)
  } else{
    setOpen(isOpen = true)
  }
}


function App() {
let slider = false;
let [isOpen, setOpen] = useState(slider)
  console.log(isOpen)



  return (
    <>
    <div className={isOpen ?  "shadow": "noshadow" }></div>

    <div className="container">
      <div className= "red"></div>

      <div className= "green"></div>

      <p className="rightarrow" onClick={()=>{handleSlider(isOpen, setOpen)}}><i></i></p> 
      
      <div className= "blue"></div>

      <div className= "purple"></div>
    </div>
    <div className={`slider ${+ isOpen ? "fade-inShow": "fade-in"}`} >
          <div>
            <select className={`select option1`}>
            <option>Let</option>
            <option>Begin</option>
            <option>This</option>
            </select>
          </div>

          <div>
            <select className='select option2'>
            <option>More</option>
            <option>Begin</option>
            <option>This</option>
            </select>
          </div>

          <div>
            <select className='select option3'>
            <option>Lets</option>
            <option>Begin</option>
            <option>This</option>
            </select>
          </div>
      </div>
    </>
  );
}

export default App;
