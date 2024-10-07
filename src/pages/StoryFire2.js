import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import DialogueBox from "../components/DialogueBox";
import ContinueButton from "../components/ContinueButton";
import BackButton from "../components/BackButton";
import "./StoryFire2.css";

export default function StoryFire2() {
    const navigate = useNavigate();
    const location = useLocation();
    const { nickname } = location.state || { nickname: "Caju" };

    const handleNavigation = () => {
        navigate("/caju/storyfire3");
    };

    const handleBack = () => {
        navigate("/caju/storyfire1");
    };

    return (
        <div className="video-fundo-storyfire2">
            <video autoPlay loop muted playsInline className="video-background">
                <source src={`${process.env.PUBLIC_URL}/images/StoryFire2.mp4`} type="video/mp4" /> {/* Corrigido o caminho da fonte */}
                Your browser does not support the video tag.
            </video>
            <ContinueButton onClick={handleNavigation} />
            <BackButton onClick={handleBack} />
        </div>
    );
}
