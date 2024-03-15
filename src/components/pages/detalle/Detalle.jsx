
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./Detalle.css"
import {obtenerDetallePorId} from "../../../api/apiproductos/producto"


const Detalle = () => {
    const { detalleId } = useParams();
    const [detalle, setDetalle] = useState({});
    
   

    useEffect(() => {
        const getDetalle = async () => {
            const detalleData= await obtenerDetallePorId(detalleId);
            setDetalle(detalleData)
        }
        getDetalle();
    }, [detalleId]);

    return (
        <div className="detalle-container">
            <h1 className="detalle-category">Categoría: {detalle.category}</h1>
            <h2 className="detalle-title">Título: {detalle.title}</h2>
            <h2 className="detalle-price">Precio: ${detalle.price} </h2>
            <img className="detalle-image" src={detalle.image} alt={detalle.title} />
            <h4 className="detalle-description">Descripción: {detalle.description}</h4>
        </div>
    );
};

export default Detalle;

