import { useState, useEffect } from 'react';

const WelcomeMessage = () => {
    const messages = [
        "¡Bienvenido a nuestra página!",
        "¡Hola! Gracias por visitarnos.",
        "¡Saludos! Esperamos que disfrutes tu estancia.",
        "¡Bienvenido! Nos alegra tenerte aquí.",
        "¡Hola! Siéntete como en casa."
    ];

    const [message, setMessage] = useState('');

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * messages.length);
        setMessage(messages[randomIndex]);
    }, []);

    return (
        <p className="text-zinc-800 dark:text-zinc-300 font-light py-2 text-lg">
            {(message ? message : "---")}
        </p>
    );
};

export default WelcomeMessage;
