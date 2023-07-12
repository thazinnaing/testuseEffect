import { useState, useEffect } from 'react'
import './App.css'
import {Person} from './components/person.jsx'

export default function App() {
  const [counter, setCounter]=useState(0);
  const person={name: "Thazin",lname:"Naing",age:22};
  
  useEffect(()=>{
    alert("hah");
  },[]);
  return(
    <>
      <>
      <Person name="Jan" lname="Uary" age={3+9}/>
      <Person name={'John'} lname={"Smith"} age={15}/>
      </>

      <>
      <button onClick={()=>{setCounter((counter)=>counter-1)}}>-</button>
      <h1>{counter}</h1>
      <button onClick={()=>{setCounter((counter)=>counter+1)}}>+</button>
      </>
    </>
  
  )
}
