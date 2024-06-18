import { useState, useEffect } from 'react';

const WelcomeMessage = ({ lang }) => {
    const messages = {
        es: [
            "¡Bienvenido a nuestra página!",
            "¡Hola! Gracias por visitarnos.",
            "¡Saludos! Esperamos que disfrutes tu estancia.",
            "¡Bienvenido! Nos alegra tenerte aquí.",
            "¡Hola! Siéntete como en casa.",
            "¡Bienvenido de nuevo! Nos alegra verte.",
            "¡Esperamos que tengas un gran día!"
        ],
        en: [
            "Welcome to our page!",
            "Hello! Thanks for visiting us.",
            "Greetings! We hope you enjoy your stay.",
            "Welcome! We're glad to have you here.",
            "Hello! Make yourself at home.",
            "Welcome back! We're happy to see you.",
            "We hope you have a great day!"
        ]
    };

    const [message, setMessage] = useState('');

    useEffect(() => {
        const langMessages = messages[lang] || messages.es; // Default to English if language not found
        const randomIndex = Math.floor(Math.random() * langMessages.length);
        setMessage(langMessages[randomIndex]);
    }, [lang]);

    return (
        <p className="text-zinc-800 dark:text-zinc-300 font-light py-2 text-lg">
            {message || "---"}
        </p>
    );
};

export default WelcomeMessage;
