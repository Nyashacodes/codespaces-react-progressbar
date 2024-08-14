import { useEffect, useState } from 'react';
import './App.css';
import ProgressBar from "./Components/ProresssBar"


function App() {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(()=>{
    setInterval(()=>{
      setValue((val)=>val+1)
    },100);
  },[])
  return (
    <>
      <div className="App">
        <span>Progress Bar</span>
        <ProgressBar 
        value = {value}
        onComplete = {()=>setSuccess(true)}/>
        <span>{success?"Complete!":"Loading.."}</span>
      </div>
    </>
  );
}

export default App;
