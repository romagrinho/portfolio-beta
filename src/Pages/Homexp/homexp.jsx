import React, { useEffect, useState, Component } from "react";
import { Link } from "react-router-dom";
import "./homexp.css";
import lixeira from "./Imgs/recycle_bin.png"
import linkedin from "./Imgs/LinkedIn.png"
import email from "./Imgs/Email.png"
import github from "./Imgs/GitHub.png"
import me from "./Imgs/win_xp_paint_2.png"
import messagebox from './Imgs/message_box_xp.png'

export default function Homexp() {

    //Java Script
    /*  function typeWriter(elemento) {
         const textoarray = elemento.innerHTML.split('');
         elemento.innerHTML = '';
         textoarray.forEach((letra, i) => {
             setTimeout(() => {
                 elemento.innerHTML += letra;
             }, 75 * i)
         });
     }
 f
     const titulo = document.querySelector('.h2-span');
     typeWriter(titulo); */


    //JSX
    /*     const TypeWriter = () => {
            const [text, setText] = useState('');
            const fullText = 'Seu texto aqui'; // Substitua pelo seu texto
            const speed = 75; // Velocidade da digitação (em milissegundos)
    
            useEffect(() => {
                let currentIndex = 0;
                const intervalId = setInterval(() => {
                    if (currentIndex === fullText.length) {
                        clearInterval(intervalId);
                        return;
                    }
                    setText(prevText => prevText + fullText[currentIndex]);
                    currentIndex++;
                }, speed);
                return () => clearInterval(intervalId);
            }, [fullText, speed]);
        };
     */

    const Clock = () => {
        const [currentTime, setCurrentTime] = useState(new Date());

        useEffect(() => {
            const intervalId = setInterval(() => {
                setCurrentTime(new Date());
            }, 1000); // Atualiza a cada 1 segundo

            return () => clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado
        }, []);

        const formatTwoDigits = (number) => {
            return number < 10 ? `0${number}` : `${number}`;
        };

        const formattedTime = `${formatTwoDigits(currentTime.getHours())}:${formatTwoDigits(currentTime.getMinutes())}`;

        return (
            <div className="divhora">
                <text className="hora">{formattedTime}</text>
            </div>
        );

    };

    return (
        <section id="1" className="section1">
            <div className="dadcontainer">
                <div className="apps">
                    <a>
                        <div href="" className="app1">
                            <img className="img_recycle" src={lixeira}></img>
                            <h5>Lixeira</h5>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/romariosaguilar/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <div className="app1">
                            <img className="img_recycle" src={linkedin}></img>
                            <h5>Linkedin</h5>
                        </div>
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=romariosaguilar@gmail.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <div className="app1">
                            <img className="img_recycle" src={email}></img>
                            <h5>Email</h5>
                        </div>
                    </a>
                    <a href="https://github.com/romagrinho" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <div className="app1">
                            <img className="img_recycle" src={github}></img>
                            <h5>GitHub</h5>
                        </div>
                    </a>
                </div>
                <div className="containerleft">
                    <div className="left_son">
                        <div className="left_son2">
                            <div className="textbox">
                                <h1 className='title_name'>ROMARIO AGUILAR</h1>
                                <h2 className="title_subname typing-animation">Sou desenvolvedor Full Stack.</h2>
                            </div>
                            <Link className="link_messagebox" to='/Error'>
                            <img className="messagebox" src={messagebox}></img>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="containerright">
                    <img src={me}></img>
                </div>
            </div>
            <div className="taskbar" >
                <Clock></Clock>
            </div>
        </section>
    );
}