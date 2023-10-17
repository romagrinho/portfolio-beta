import React, { useEffect } from "react";
import "./loading.css"
import xpstart from "./imgs/win-xp-start-bar.jpg"
import progressbar from "./imgs/gifão_portfólio.gif"
import { Link, useNavigate } from "react-router-dom";


export default function Loading() {
    
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            // Redireciona para a próxima página após 6 segundos
         navigate('/Portfólio');
        }, 6000);

        return () => clearTimeout(timer); // Limpa o timer se o componente for desmontado antes dos 6 segundos
    }, [navigate]);

    return (
        <section id="3" className="section3">
            <div className="imgs_container">
                <img className="xp" src={xpstart} alt="XP Start"></img>
                <img className="bar" src={progressbar} alt="Progress Bar"></img>
            </div>
        </section>
    );
}