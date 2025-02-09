import { useState } from "react";
import './styles.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import React from "react";

export default function Login(){
    const [user, setUser] = useState('')    
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const logar = async () => {
        console.log("Usuario:", user)
        console.log("Senha:", password)

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/token/',
                {
                    "username": "Navarro",
                    "password": "1234"
                }
            )
            console.log("Token Login", response.data.access)
            console.log(response.data.access.error)
            localStorage.setItem('token', response.data.access)
            navigate('/home')
            
        } catch (error) {
            console.log(error)
            
        }
    }

    return(
        <body className="login">
        
            <div className="container-login">
                <h1>Login</h1>
                <input className="caixa" 
                placeholder="User"
                type="text"
                value={user}
                onChange={(e) => (setUser(e.target.value))}/>

                <input className="caixa"
                placeholder="Password"
                type="password" 
                value={password}
                onChange={(e) =>{setPassword(e.target.value)}}/>

                <button className="btn" onClick={ logar }>
                    Enter
                </button>
                <p>Não tem conta?</p>

            </div>
        </body>
    )
}