import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import SpaceJourney from "../components/SpaceJourney"; // Importa o SpaceJourney
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa"; // Ícones para som ativado/desativado
import Button from "../components/Button"; // Mantém o botão estilizado

export default function HomePage() {
    const [isAccelerating, setIsAccelerating] = useState(false); // Controla a aceleração da jornada
    const [isMuted, setIsMuted] = useState(false); // Estado para controlar o mute
    const audioRef = useRef(null);
    const navigate = useNavigate(); // Hook para navegar entre páginas

    // Tocar a música assim que o usuário interage com a página
    const startMusic = () => {
        if (audioRef.current) {
            audioRef.current.play().catch((error) => {
                console.error("Erro ao tocar a música: ", error);
            });
        }
    };

    // Função que inicia a jornada e troca de música
    const accelerate = () => {
        setIsAccelerating(true); // Inicia a aceleração da jornada espacial
        if (audioRef.current && !isMuted) {
            audioRef.current.src = `${process.env.PUBLIC_URL}/media/travelling.mp3`; // Alterar para a segunda música
            audioRef.current.play().catch((error) => {
                console.error("Erro ao tocar a nova música: ", error);
            });
        }

        // Após 5 segundos, chamar a função de troca de página
        setTimeout(() => {
            navigate("/caju/story1"); // Navega para a página "story1"
        }, 5000);
    };

    // Função para alternar entre mute e unmute
    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !isMuted; // Muta ou desmuta diretamente o elemento de áudio
            setIsMuted(!isMuted); // Alterna o estado de mute
        }
    };

    // Função para ir para a página do vídeo
    const goToVideo = () => {
        navigate("/caju/videopage"); // Navega para a página do vídeo
    };

    return (
        <div className="App" onClick={startMusic}>
            {/* Inicia a música na primeira interação */}
            <SpaceJourney isAccelerating={isAccelerating} /> {/* Agora controlado pela HomePage */}
            <button className="mute-button" onClick={toggleMute}>
                {isMuted ? <FaVolumeMute /> : <FaVolumeUp />} {/* Alterna entre os ícones */}
            </button>
            <div className="overlay1">
                <Button label="Start your journey in space" onClick={accelerate} />
            </div>
            <div className="overlay2">
                <Button label="Watch animated version" onClick={goToVideo} /> {/* Botão que leva ao vídeo */}
            </div>
            <audio ref={audioRef} src={`${process.env.PUBLIC_URL}/media/space.mp3`} loop />
        </div>
    );
}
