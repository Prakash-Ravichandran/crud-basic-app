import React, { useEffect } from 'react';
import {Link } from 'react-router-dom';
import axios from 'axios';
import '../Components/Create.css';

export function Create(){
    useEffect(() => {
        axios.get('https://gorest.co.in/public/v1/users')
        .then((response) =>
        {
         console.log(response.data);
         console.log(response.data.data[0].name);
         let firstName = document.getElementById('firstName');
         firstName.value = response.data.data[0].name;
         let email = document.getElementById('email');
         email.value = response.data.data[0].email;
         let id = document.getElementById('id');
         id.value = response.data.data[0].id;
         let gender = document.getElementById('gender');
         gender.value = response.data.data[0].gender;

   

         console.log(response.data.data.length);

            let arr = response.data.data;
            arr.map((pointer) => {

                let myButton = document.createElement('button');
                myButton.type = "button";
                myButton.innerHTML=`delete - ${pointer.name}`;
                myButton.onclick = function(pointer){
                      axios.delete('https://gorest.co.in/public/v1/users')
                }
                document.body.appendChild(myButton);

                let ele = document.createElement("input");
                ele.value = pointer.name;
                ele.id="name"
                document.body.appendChild(ele);

                let label = document.createElement('label');
                label.htmlFor="name";
                label.innerHTML=pointer.id;
                document.body.appendChild(label);
                console.log(pointer.name)});

        })
     })

  
    return(
        <>
        <h3>Welcome to GET API</h3>
        <Link to="/"><button>Home</button></Link>
        <div style={{border: 20}}>
        <form name="createUser">
            <fieldset>
                <legend>GO rest GET API</legend>
            <label htmlFor="firstName">FirstName :</label>
            <input type="text" name = "firstName" id="firstName" autoFocus />
            <label  htmlFor="email">E-Mail :</label>
            <input type="text" name ="email" id="email"/>
            <label  htmlFor="id">Id : </label>
            <input type="number" name ="id" id="id"/>
            <label  htmlFor="gender">Gender : </label>
            <input type="text" name ="id" id="gender"/>
            <button>Request</button>
            <button >Delete</button>
            </fieldset>
        </form>
        </div>
       
        </>
    )
}