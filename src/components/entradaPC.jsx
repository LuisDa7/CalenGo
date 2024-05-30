import React, { useState, useEffect } from 'react';

export default function EntradaPC() {
    const [isMovil, setIsMovil] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMovil(window.innerWidth <= 992);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {(isMovil) ? (
                <section className="entrada">
                    <button className="ingresa">Ingresa</button>
                    <button className="registrate">Regístrate</button>
                </section>
            ) : (
                <section className="entrada">
                    <button className="registrate">Regístrate</button>
                </section>
            )}
        </>
    )

}