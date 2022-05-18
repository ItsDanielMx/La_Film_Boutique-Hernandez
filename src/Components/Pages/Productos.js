import React from 'react'
// import { Link } from 'react-router-dom'
// import swal from 'sweetalert'
import Footer from '../Footer/Footer'
import ItemListContainer from '../ItemListContainer/ItemListContainer'


const Productos = () => {
  return (
    <div>
        <ItemListContainer greeting='We have everything in lenses and cameras for big projects'/>
        <Footer />
    </div>
  )
}


// //POP UP// 

// let btnAbrirPopup = document.getElementById('btn-abrir-popup'),
// overlay = document.getElementById('overlay'),
// popup = document.getElementById('popup'),
// btnCerrarPopup = document.getElementById('btn-cerrar-popup');

// btnAbrirPopup.addEventListener('click', function(){
// 	overlay.classList.add('active');
// 	popup.classList.add('active');
// });

// btnCerrarPopup.addEventListener('click', function(e){
// 	e.preventDefault();
// 	overlay.classList.remove('active');
// 	popup.classList.remove('active');
// });

// //INVENTARIO//
// let inventario = [
//   {id: 1, nombre: "ARRI ALEXA LF or MINI LF", precio: 2500, cantidad:1},
//   {id: 2, nombre: "PANASONIC VARICAM LT", precio: 450, cantidad:1},
//   {id: 3, nombre: "ARRI ALEXA MINI CAMERA", precio: 875, cantidad:1},
// ]

// //CARRITO//

// let carrito = []

// const contenedorCarrito = document.getElementById("carritoFin");
// const precioTotal = document.getElementById("precioTotal");

// fetch('/js/inventario.json')
// .then(Response => Response.json())
// .then(data => mostrarProductos(data))
// .catch(error => console.log("error"))

// function mostrarProductos(array){
//     for (const producto of array) {
//         let btnAgregar = document.getElementById(`cart${producto.id}`)
        
//         btnAgregar.addEventListener('click',()=>{
            
//             agregarAlCarrito(producto.id)
//             swal({
//                 position: 'top-end',
//                 icon: 'success',
//                 title: 'El producto se ha agregado correctamente',
//                 showConfirmButton: false,
//                 timer: 1500
//             })
//         })
//     }
// }

// function agregarAlCarrito(id) {
    
//     let repetido = carrito.find(item => item.id === id)
//     if(repetido){
//         repetido.cantidad = repetido.cantidad + 1
//         document.getElementById(`cantidad${repetido.id}`).innerHTML = `<p id= cantidad${repetido.id}>Cantidad:${repetido.cantidad}</p>`
//         actualizarCarrito()
//     }else{
        
//         let productoAgregar = inventario.find(elemento => elemento.id === id)
//         carrito.push(productoAgregar)
//         actualizarCarrito()
//         let div = document.createElement('div')
//         div.className = 'productoEnCarrito'
//         div.innerHTML =`
//         <p>${productoAgregar.nombre}</p>
//         <p>Precio: $${productoAgregar.precio}</p>
//         <p id= cantidad${productoAgregar.id}>Cantidad:${productoAgregar.cantidad}</p>
//         <button id=botonEliminar${productoAgregar.id} className="boton-eliminar"><i className="fas fa-trash-alt"></i></button>
        
//         `
//         contenedorCarrito.appendChild(div)
        
//         let btnEliminar = document.getElementById(`botonEliminar${productoAgregar.id}`)
//         btnEliminar.addEventListener('click',()=>{
//             if (productoAgregar.cantidad === 1) {
//                 btnEliminar.parentElement.remove()                         
//                 carrito = carrito.filter(elemento => elemento.id !== productoAgregar.id)
//                 actualizarCarrito()
//                 localStorage.setItem('carrito', JSON.stringify(carrito))
//                 swal({
//                     position: 'top-end',
//                     icon: 'success',
//                     title: 'El producto se ha eliminado correctamente',
//                     showConfirmButton: false,
//                     timer: 1500
//                 })
//             } else {
//                 productoAgregar.cantidad = productoAgregar.cantidad - 1
//                 document.getElementById(`cantidad${productoAgregar.id}`).innerHTML = `<p id=cantidad${productoAgregar.id}>Cantidad:${productoAgregar.cantidad}</p>`
//                 actualizarCarrito()
//                 localStorage.setItem('carrito', JSON.stringify(carrito))
//                 swal({
//                     position: 'top-end',
//                     icon: 'success',
//                     title: 'El producto se ha eliminado correctamente',
//                     showConfirmButton: false,
//                     timer: 1500
//                 })
//             }
//         })
//     }
    
//     localStorage.setItem('carrito', JSON.stringify(carrito))
// }   

// function  actualizarCarrito (){
//     precioTotal.innerHTML = carrito.reduce((acc,el)=> acc + (el.precio * el.cantidad), 0)
// }


// function recuperar() {
//     let recuperarLS = JSON.parse(localStorage.getItem('carrito'))
//     console.log(recuperarLS);
//     if(recuperarLS){
//         recuperarLS.forEach(element => {
//             agregarAlCarrito(element.id)
//         });
//     }
// }
// recuperar()
        
// const pagarTodo = document.getElementById("pagarTodo");
        
// function recargarPage(){
//     window.location.reload()
// }
// pagarTodo.addEventListener('click',()=>{
//     localStorage.clear();
//     actualizarCarrito()
//     setTimeout(recargarPage, 3100)
//         swal({
//             position: 'top-end',
//             icon: 'success',
//             title: 'Successful payment, your order details are in your email',
//             showConfirmButton: false,
//             timer: 3000
//     })
// })




export default Productos