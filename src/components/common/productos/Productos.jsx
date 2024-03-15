import React, { useEffect, useState } from "react";
import CardProducto from "../cardproducto/CardProducto";
import "./Productos.css";
import {optenerProductos} from "../../../api/apiproductos/producto"
import Modal from "../modal/Modal";

const Productos = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const productoData = await optenerProductos();
      setProducts(productoData);
    };
setLoading(false);
    getProducts();
  }, []);

  return (
    <div className="contenedor-productos">
      {loading ?(<Modal/>):
      (products.map((item) => (
        <CardProducto item={item} key={item.id} />
      )))
}
    </div>
  );
};

export default Productos;
