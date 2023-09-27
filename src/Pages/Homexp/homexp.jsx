import React, { useEffect, useState } from "react";
import "./homexp.css";
import lixeira from "./Imgs/recycle_bin.png"
import linkedin from "./Imgs/LinkedIn.png"
import email from "./Imgs/Email.png"
import github from "./Imgs/GitHub.png"

export default function Homexp() {
    return (
        <section className="section1">
            <div className="dadcontainer">
                <div className="containerleft">
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
                    <div className="up_invisible"></div>
                    <div className="down_invisible">

                    </div>
                </div>
                <div className="containerright">
                    <text className="teste">teste</text>
                </div>
            </div>
            <div className="taskbar" />
        </section>
    );
}