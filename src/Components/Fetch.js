import React from 'react';
import { Link } from 'react-router-dom';



async function Call(){
    let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';

    let response = await fetch(url);

    let commits = await response.json()

    // console.log(commits[0].author.login);


}
Call();

async function CallTwo(){
    let url = "https://jsonplaceholder.typicode.com/posts";

    let response = await fetch(url);

    let myJson = await response.json();

    // let formData = await response.formData();

    // console.log(myJson);
    // console.log(typeof (myJson));
    // console.log(Array.isArray(myJson));

    // console.log(myJson[0]);

    <FetchComponent user = "hello"/>
    // console.log(formData);
}

CallTwo();


const FetchComponent = ({user}) => {
    return (
        <div>
            <h1>REACT CRUD APPLICATION</h1>
            <Link to="/create"><button>Create User</button></Link>
            {/* <form name="myform">
                <label htmlFor="name">Name :</label> <br></br>
                <input type="text" name="firstName" id="name" value={user}/>
            </form> */}
        </div>
    )
};

export default FetchComponent;
