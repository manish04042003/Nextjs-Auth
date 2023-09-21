"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
// import { axios } from "axios";

export default function SignupPage(){
    const [user,setUser] = React.useState({
        email : "",
        password : "",
        username : "",
    })

    const onSignup =async () => {
        
    }



    return(
        <div className="p-1 flex flex-col items-center justify-center min-h-screen py-2 bg-grey">
            <h1>Signup</h1>
            <hr />
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={user.username} placeholder="Username" onChange={(e)=>{setUser({ ...user, username:e.target.value })}}/>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={user.email} placeholder="Email" onChange={(e)=>{setUser({ ...user, email:e.target.value })}}/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={user.password} placeholder="Password" onChange={(e)=>{setUser({ ...user, password:e.target.value })}}/>
            <button onClick={onSignup} className="p-2 border border-grey-300 rounded-lg focus:outline-none focus:border-grey-600">Login Here</button>
            <Link href="/login" >Visit Login Page </Link>
        </div>
    );

}