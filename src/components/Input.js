import { useRef, useState } from 'react'
import React from 'react'

function Input() {
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const fname = useRef()
    const lname = useRef()
    

  

    function handleSubmit(e){

        e.preventDefault();
        fname.current.value = "";
        lname.current.value = "";

        console.log(email)
        console.log(password)
    }


  return (
    <>
    <form>
        <h3>User Login</h3>
        
        <table>
            <tr>
                <td>Email</td>
                <td><input type="text" ref={fname}  onChange={(e)=>SetEmail(e.target.value)}/></td>
            </tr>
            <tr>
                <td>Password</td>
                <td><input type="password" ref={lname} onChange={(e)=>SetPassword(e.target.value)}/></td>
            </tr>
            
          
            <tr>
                <td></td>
                <td><button onClick={handleSubmit}>Register</button></td>
            </tr>
        </table>
    </form> 
    </>
    
  )
}

export default Input