import { useState } from "react";


function App() {
  const [username,setUsername]=useState('')
  const [userPass,setUserPass]=useState('')

const changeUserName=(e)=>{
  setUsername(e.target.value)

}
const changePass=(e)=>{
  setUserPass(e.target.value)

}
const clickButton=(e)=>{
  console.log(username)
  console.log(userPass)


}


  return (

   
    <div className="App">
      
        <label>Enter username</label>
      <input onChange={changeUserName} type ="text"> 
        </input>
        <label>Enter password</label>
      <input onChange={changePass}type ="text"> 
        </input>
        <input onClick={clickButton} type="submit"></input>
      
    </div>
  );
  }

export default App;
