import React, { useState, useEffect } from 'react';

export default function BotonesHeader() {
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
                <button className="menu"><img src="./public/iconos/index/menu.png" alt="Menú" width="40" /></button>
            ) : (
                <section className="contenedorBotones">
                    <button className="menu"><img src="./public/iconos/index/menu.png" alt="Menú" width="40" /></button>
                    <button className="registrate">Regístrate</button>
                    <button className="ingresa">Ingresa</button>

                </section>
            )}
        </>
    )
}