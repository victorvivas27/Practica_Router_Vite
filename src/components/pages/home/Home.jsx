import "./Home.css"
import imagen from "/img/fondo2.jpg"



const Home = () => {
 

  return (
   <div className='contenedor-main'>
   <h1>Mas que solo bebidas, festejemos el encuentro.</h1> 
  
   <img src={imagen}alt="" />
   </div>
  )
}

export default Home