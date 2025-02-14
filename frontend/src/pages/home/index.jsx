import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import { FaEdit, FaTrash, FaPlus, FaSearch } from "react-icons/fa";

export default function Home() {
    const token = localStorage.getItem("token") || "";  // so pra garantir que vai ter um token 
    const [dados, setDados] = useState([]);

    console.log("Token Home: ", token);

    useEffect(() => {
        if (!token) return;

        const fetchData = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/professores/", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setDados(response.data);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [token]);

    return (
        <div className="container-home">
            <div className="title-home">
            <h1>Home</h1>
            </div>
            <div className="body">
                <div className="sub-home">
                    <h2>Lista de Professores</h2>
                </div>  
                {dados.map((professor) => (
                    <div className="lista" key={professor.ni}>
                        <FaEdit className="edit" />
                        <FaTrash className="delete" />
                        <span className="ni">{professor.ni}</span>
                        <span className="nome">{professor.nome}</span>
                    </div>
                ))}
            </div>
            <div className="footer">
                <div className="btn1">
                    <FaPlus className="adicionar" />
                </div>
                <div className="pesquisar">
                    <input type="text" placeholder="ID do Professor" />
                </div>
                <div className="btn2">
                    <FaSearch className="procurar" />
                </div>
            </div>
        </div>
    );
}
