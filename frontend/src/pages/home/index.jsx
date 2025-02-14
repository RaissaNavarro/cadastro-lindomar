import React, { useState, useEffect } from "react";
import axios from "axios";
import "../home/styles.css";
import { FaEdit, FaTrash, FaPlus, FaSearch } from "react-icons/fa";
import ModalProfessores from "../../components/modal";

export default function Home() {
    const token = localStorage.getItem("token") || "";  // so pra garantir que vai ter um token 
    const [dados, setDados] = useState([])
    const [modalOpen, setModaOpen] = useState(false)
    const [professorSelecionado, setProfessorSelecionado] = useState(false)

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
                <div className="sub-home">
                    <h2>Lista de Professores</h2>
                </div>  
                {dados.map((professor) => (
                        <div className="lista">
                            <div className="col1">
                                <FaEdit className="edit" />
                            </div>
                            <div className="col2">
                                <FaTrash className="delete" />
                            </div>
                            <div className="col3">
                                <span className="id">{professor.id}</span>
                            </div>
                            <div className="col4">
                                <span className="ni">{professor.ni}</span>
                            </div>
                            <div className="col5">
                                <span className="nome">{professor.nome}</span>
                            </div>
                            <div className="col6">
                                <span className="email">{professor.email}</span>
                            </div>
                            <div className="col7">
                                <span className="cel">{professor.cel}</span>
                            </div>
                            <div className="col8">
                                <span className="ocup">{professor.ocup}</span>
                            </div>
                        </div>
                    ))}
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
            <ModalProfessores>
                isOpen={modalOpen}
                onClose={()=>modalOpen(false)}
                professorSelecionado={professorSelecionado}
                setProfessorSelecionado = {setProfessorSelecionado} 
                {/* criar={criar}
                atualizar={atualizar}        */}
            </ModalProfessores>     
        </div>
    );
}
