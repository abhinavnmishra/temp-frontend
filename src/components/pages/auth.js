import React from "react";
import './loginpage.css';
import { useState } from "react";

const Auth=()=>{

    const [phoneno,setPhoneNo] = useState("");
    const [password,setPassword] = useState("");



    const onSubmit =(e)=>{
        //send data to data base and compare the otp sent and entered otp
        e.preventDefault();

        const user = {
            phone : phoneno,
            password : password,
        }

        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append('Accept', 'application/json');


        let raw = JSON.stringify(user);

        let requestOptions = {
            method: 'POST',
            body: raw,
            headers: headers,
            redirect: 'follow'
        };

        console.log(raw);
        fetch("https://cfg22-backend.herokuapp.com/api/v1/Lady/login", requestOptions)
            .then(response => response.text())
            .then(result => {
                if (JSON.parse(result).success === true) {
                    alert('Logged in successfully!');
                    window.location.href = "/home";
                }
                else {
                    alert("Some error occurred!");
                }
            })
            .catch(error => {
                alert("Some error occurred!");
                console.log('error', error);
            });
    }

    return(
        <div >
            <h4>Welcome</h4>
            <form  className="form">
                <h2 className="form-heading">Login</h2>

                <div className="form-item">
                    <label>Phone no</label>
                    <br></br>
                    <input
                        type="string "
                        placeholder="Enter phone no"
                        onChange={(e)=>{setPhoneNo(e.target.value)}}
                    />
                </div>

                <div className="form-item">
                    <label>Password</label>
                    <br></br>
                    <input
                        type="password"
                        placeholder="create a password"
                        onChange={(e)=>{setPassword(e.target.value)}}
                    />
                </div>

                <button onClick={onSubmit}>submit</button>
            </form>

        </div>
    );
}
export default Auth;