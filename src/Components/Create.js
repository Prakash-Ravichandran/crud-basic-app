import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function Create(){

const [firstName , setfirstName] = useState();
const [secondName , setsecondName] = useState();

useEffect(() => {
   
        console.log('function invoked');
        axios.post('https://gorest.co.in/public/v1/posts' , {
          firstName,
          secondName,
        }).then((res) => console.log(res))
      
})

 

    return(
        <>
        <h2>Hello world!</h2>
        <Link to="/"><button>Home</button></Link>
        <form>
            <fieldset>
                <legend>Create User API</legend>
                <label htmlFor="firstname">FirstName :</label>
                <input type="text" name="firstname" id='firstname' value={firstName}
                ></input>
                <label htmlFor="lastname">SecondName :</label>
                <input type="text" name="lastname" id='lastname' value={secondName}></input>
                <button type='submit' >Submit</button>
            </fieldset>
        </form>
        </>
    )
}