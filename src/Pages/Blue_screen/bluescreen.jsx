import React, {useEffect} from "react";
import "./bluescreen.css"
import error from "./imgs/errordead_screen.png"
import { Link } from "react-router-dom";
import Error_audio from './audio/Crash_Travou_Sistema.mp3'


export default function Blue_screen() {

        useEffect(() => {
            const Audio = document.getElementById('som'); // ou use refs para acessar o elemento
            if (Audio) {
                Audio.volume = 0.4; // Configura o volume para 50%
            }
        }, []);

        return (
            <section id="2" className="section2">
                <img className="img_error" src={error}></img>
                <Link className="link_refresh_btn" to="/Loading">
                    <button className="refresh_btn">Reiniciar</button>
                </Link>
                    <audio id='som' src={Error_audio} autoPlay></audio>
            </section>
        );
    };