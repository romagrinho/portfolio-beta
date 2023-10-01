import React, { useEffect, useState } from "react";
import "./homexp.css";
import lixeira from "./Imgs/recycle_bin.png"
import linkedin from "./Imgs/LinkedIn.png"
import email from "./Imgs/Email.png"
import github from "./Imgs/GitHub.png"
import me from "./Imgs/win_xp_paint_2.png"
import messagebox from './Imgs/message_box_xp.png'


export default function Homexp() {
    return (
        <section className="section1">
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
                                <h2 className="title_subname ">Sou desenvolvedor <span className="subname_span typing-animation">Full-Stack.</span></h2>
                            </div>
                            <img className="messagebox" src={messagebox}></img>
                        </div>
                    </div>
                </div>
                <div className="containerright">
                    <img src={me}></img>
                </div>
            </div>
            <div className="taskbar" />
        </section>
    );
}