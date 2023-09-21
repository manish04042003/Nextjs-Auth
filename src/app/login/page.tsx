"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
// import { axios } from "axios";

export default function LoginPage(){
    const [user,setUser] = React.useState({
        email : "",
        password : "",
    })

    const onLogin =async () => {
        
    }



    return(
        <div className="p-1 flex flex-col items-center justify-center min-h-screen py-2 bg-grey">
            <h1>Login</h1>
            <hr />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={user.email} placeholder="Email" onChange={(e)=>{setUser({ ...user, email:e.target.value })}}/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={user.password} placeholder="Password" onChange={(e)=>{setUser({ ...user, password:e.target.value })}}/>
            <button onClick={onLogin} className="p-2 border border-grey-300 rounded-lg focus:outline-none focus:border-grey-600">Signup Here</button>
            <Link href="/signup" >Visit Signup Page </Link>
        </div>
    );

}