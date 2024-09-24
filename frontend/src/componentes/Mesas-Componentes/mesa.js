import React, { useState, useEffect } from "react";

const Mesa = ({ mesa, actualizarEstado, eliminarMesa, editar, adminView }) => {
    const [estado, setEstado] = useState(mesa.estado);
    const [enUso, setEnUso] = useState(estado === "Ocupada");
    const [tiempo, setTiempo] = useState(0); // Tiempo en segundos
    const [numeroPedido, setNumeroPedido] = useState(null); // Número de pedido
    const [estadoPedido, setEstadoPedido] = useState("Pendiente"); // Estado del pedido

    // Actualizar el estado de la mesa en la base de datos
    const handleEstadoChange = async (nuevoEstado) => {
        try {
            const response = await fetch(`http://localhost:8080/mesas/modificarMesa/${mesa._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ estado: nuevoEstado }),
            });

            if (response.ok) {
                setEstado(nuevoEstado);
                actualizarEstado(mesa.numeroDeMesa, nuevoEstado);

                if (nuevoEstado === "Ocupada") {
                    iniciarUso();
                } else {
                    cerrarMesa();
                }
            } else {
                console.error('Error al actualizar el estado de la mesa');
            }
        } catch (error) {
            console.error('Error de red al intentar actualizar el estado de la mesa:', error);
        }
    };

    // Iniciar el uso de la mesa
    const iniciarUso = () => {
        setEnUso(true);
        setNumeroPedido(generateRandomOrder()); // Generar número de pedido aleatorio
        setEstadoPedido("En proceso");
    };

    // Detener el uso de la mesa
    const cerrarMesa = () => {
        setEnUso(false);
        setTiempo(0); // Reiniciar el tiempo
        setEstadoPedido("Cerrado");
    };

    // Generar número de pedido aleatorio
    const generateRandomOrder = () => {
        return Math.floor(Math.random() * 1000) + 1;
    };

    // Actualizar el temporizador cada segundo
    useEffect(() => {
        let timer;
        if (enUso) {
            timer = setInterval(() => {
                setTiempo((prevTiempo) => prevTiempo + 1);
            }, 1000);
        }

        // Limpiar el temporizador al desmontar el componente o cuando se cierra la mesa
        return () => clearInterval(timer);
    }, [enUso]);

    const estadoClase = estado.toLowerCase();

    return (
        <div className={`tarjetaMesa ${estadoClase}`}>
            <p className="numero-mesa">MESA {mesa.numeroDeMesa}</p>
            <p className="tamañoMesa">Número de Asientos: {mesa.asientos}</p>
            <p className="estadoMesa">Estado: {estado}</p>

            {/* Mostrar detalles de uso si la mesa está en uso */}
            {enUso && (
                <div className="detalles-uso">
                    <p>Tiempo: {Math.floor(tiempo / 60)} min {tiempo % 60} seg</p>
                    <p>Número de Pedido: {numeroPedido}</p>
                    <p>Estado del Pedido: {estadoPedido}</p>
                </div>
            )}

            {/* Mostrar botones si es admin */}
            {adminView && (
                <>
                    <button className="modificarMesaBoton" onClick={() => editar(mesa)}>Editar Mesa</button>
                    <button className="eliminarMesaBoton" onClick={() => eliminarMesa(mesa._id)}>Eliminar Mesa</button>
                </>
            )}

            {/* Mostrar botón de cerrar mesa si no es admin y la mesa está en uso */}
            {!adminView && enUso && (
                <>
                    <button className="libreBoton" onClick={() => handleEstadoChange("Libre")}>Cerrar Mesa</button>
                </>
            )}

            {/* Mostrar botones de "Usar Mesa" y "Crear Reserva" si no es admin y la mesa no está en uso */}
            {!adminView && !enUso && (
                <>
                    <button className="ocuparBoton" onClick={() => handleEstadoChange("Ocupada")}>Usar Mesa</button>
                    <button className="reservaBoton" onClick={() => handleEstadoChange("Reservada")}>Crear Reserva</button>
                </>
            )}
        </div>
    );
};

export default Mesa;