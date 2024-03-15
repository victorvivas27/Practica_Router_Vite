import React from 'react'
import Swal from 'sweetalert2';

const Modal = ({children}) => {
    let timerInterval;
    Swal.fire({
      title: "Cargando.....",
      html: "Cargando en <b></b> milisegundos.",
      timer: 3000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("Estaba cerrado por el temporizador");
      }
    });
  return (
    
    <div className="modal">
      <div className="modal-content">
        {children}
      </div>
    </div>
  )
}

export default Modal