import React from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'


const Productos = () => {
  return (
    <div>
      <section className="camaras container">
        <h1 className="mt-4 tituloProductos">We have everything in lenses and cameras for big projects</h1>
        <hr className="container"></hr>
        <div className="contenedor">
            <article>
                <div className="d-flex justify-content-center">
                    <button className="btn-abrir-popup boton" id="btn-abrir-popup"><i className="fas fa-shopping-cart"></i>
                    </button>
                </div>
                <div className="overlay" id="overlay">
                    <div className="popup" id="popup">
                        <Link to="#" id="btn-cerrar-popup" className="btn-cerrar-popup"><i className="fas fa-times"></i></Link>
                        <div id="carritoFin">
                        </div>
                        <hr className="container" />
                        <div className="pagar">
                            <p className="precioProducto container">Precio total: $<span id="precioTotal">0</span> </p>
                            <button id="pagarTodo" className="btn btn-primary ms-2">Pay</button>
                        </div>
                    </div>
                </div>
            </article>
            <hr className="container" />
        </div>

        <div id="camera1">
            <div className="camarasTop">
                <img src="./ALEXA-Mini-LF-SP-47-MVF-2-left-front-white.jpg" width="50%" height="auto"
                    alt="Arri Alexa LF Camera" />
                <p className="comprar">
                    ARRI ALEXA LF or MINI LF
                    <br /> rental per day
                    $2,500.00 <br />
                    <button type="submit" id="cart1" className="btn btn-primary mb-3">Add to cart</button>
                </p>
            </div>
            
            <details>
                <summary className="d-flex">
                    <h4 className="detallesC">Details</h4>
                </summary>
                ARRI ALEXA LF Beast camera package <br />
                Kit includes a very complete package : <br />
                1 ARRI ALEXA LF LARGE FORMAT CAMERA BODY <br />
                1 ARRI EVF- <br />
                1 ELECTRONIC VIEWFINDER <br />
                1 ARRI VMB- <br />
                3 VIEWFINDER MOUNTING BRACKET <br />
                2 ARRI VIEWFINDER CABLE - 12IN <br />
                1 ARRI TOP CAMERA <br />
                CENTER HANDLE CCH-4 <br />
                1 ARRI LPL MOUNT FOR ALEXA <br />
                1 ARRI PL TO PL MOUNT ADAPTER <br />
                1 ARRI SXR ADAPTER 4 ARRI <br />
                2TB CODEX DRIVES AND CODEX DOCK TRANSFER (needed otherwise you can't download from CODEX drives) <br />
                1 SANDISK 16GB SD CARD <br />
                1 MINI THUMB DRIVE <br />
                2 24V 3-PIN XLR TO 2-PIN FISCHER CABLE - 10FT <br />
                1 ARRI 4-PIN XLR TO 2-PIN LEMO 12V CABLE - 3FT <br />
                1 ARRI SP-4 SHOULDER PAD <br />
                2 15MM ROD - 8IN <br />
                2 15MM ROD - 18IN <br />
                2 5 PIN XLR TO <br />
                3 PIN XLR PIGTAIL <br />
                2 TIMECODE SYSTEMS 10-PIN LEMO TO RJ45 ETHERNET CONNECTOR CABLE <br />
                1 HAWK WOODS 24V/220W CHARGER <br />
                4 HAWK WOODS 200 W batteries <br />
                2 VCLX Cine block battteries + charger <br />
                1 ARRI LB-1 LEVELING BLOCK <br />
                1 ARRI VEB-3 VIEWFINDER EXTENSION BR /ACKET <br />
                1 ARRI KC-151-S VIEWFINDER CABLE- 24IN 1 ARRI HEB-2 HANDLE EXTENSION BLOCK <br />
                1 ARRI WA-1 WEDGE ADAPTER <br />
                1 ARRI BP-13 15MM SLIDING BASEPLATE <br />
                1 ARRI BPA-2 BRIDGE PLATE ADAPTER <br />
                1 ARRI BP9/BP8 brigdeplate 1 12IN DOVETAIL FOR SLIDING BASEPLATE 1 ARRI PREMIUM INTEGRATED WIRELESS
                VIDEO KIT <br />
                1 ARRI ALEXA LF INNERSPACE CASE ALL CAMERA ACCESORIES also AVAILABLE upon request,
                contact us for a quote. <br />
            </details>
            <hr />
        </div>
        <div id="camera2">
            <div className="camarasTop">
                <img src="./Panasonic-Varicam.jpg" width="50%" height="auto"
                    alt="Panasonic Varicam LT" />
                <p className="comprar">
                    PANASONIC VARICAM LT
                    <br />
                    rental per day $450.00 <br />
                    <button type="submit" id="cart2" className="btn btn-primary mb-3">Add to cart</button>
                </p>
            </div>
          
            <details>
                <summary className="d-flex">
                    <h4 className="detallesC">Details</h4>
                </summary>
                • Panasonic Varicam LT Body with PL and EF Mount <br />
                • Panasonic Varicam LT Top Handle <br />
                • Body Cap <br />
                • PL Mount Adapter <br />
                • 3.5" LCD Control Panel Monitor <br />
                • Control Panel Mounting Part <br />
                • Mic Holder <br />
                • Panasonic Varicam LT Gold Mount Plate <br />
                • Panasonic P2 Express Card Reader <br />
                • 6.5' USB 3.0 Type A to Type B Cable <br />
                • USB AC Adapter <br />
                • 3 Prong IEC C13 Power Cable <br />
                • 3 512GB P2 Drives <br />
                • 1 Costum Pelican Case <br />

                The Panasonic Varicam LT 4K S35 Digital Cinema Camera sports a Super 35-sized sensor inside a
                tough-but-lightweight magnesium body with your choice of an active EF mount or PL mount for versatility
                (see Notes tab for more). It is capable of capturing 14+ stops of dynamic range when using V-Log and
                recording up to 60 FPS at 4K and up to 240 FPS at 2K. This sensor delivers the classic cinematic depth
                of field seen in film frames for high-level motion picture cameras and boasts selectable gamma curves,
                allowing you to get the most out of it. Even in very dimly lit scenes, the VariCam LT provides low-noise
                images without any compromise in picture quality. The native ISO settings are 800 and 5000 and the noise
                level at 5000 is nearly identical to the 800. Normally noise is introduced in the gain process of rating
                ISO in digital cameras but the native 5000 ISO rating of this VariCam sidesteps the issue of adding gain
                to capture low light images. <br />

                The VariCam LT features an in-camera color grading function (3D LUT/CDL). This enables color tuning on
                set as well as in the field when using the camera control panel or 3rd party software. Grading
                information such as 3D LUT files and CDL files can be recorded simultaneously with the image data,
                providing a simple way of protecting your vision. This camera can record files to an SD card while
                simultaneously recording high-data-rate files to an optional expressP2 card. This lets you record an
                ungraded 4K master with V-Log in the main expressP2 card recorder while simultaneously recording graded
                HD files on the SD card (cards rentable separately). The Panasonic Varicam LT 4K S35 Digital Cinema
                Camera is ideal for videographers looking for superb imaging capabilities with crisp, natural color
                palettes and very high dynamic range. <br />

                • Sensor: Super 35 MOS <br />
                • File Format, Resolution, and Frame Rates: <br /> <br />
                4K/UHD <br />
                AVC-Intra 4K422: Up to 30p <br />
                AVC-Intra 4K-LT: 30p to 60p <br />
                4096 x 2160p: 59.94/50/29.97/25/24/23.98 <br />
                3840 x 2160p: 59.94/50/29.97/25/23.98 <br /> <br />
                2K <br />
                AVC-Intra 2K444: Up to 30p <br />
                AVC-Intra 2K422: Up to 60p, Up to 120p (Cropped) <br />
                AVC-Intra 2K-LT: 120p to 240p (Cropped) <br />
                2048 x 1080p: 59.94/50/29.97/25/24/23.98 <br /> <br />
                HD <br />
                AVC-Intra444: Up to 30p <br />
                AVC-Intra422: Up to 60p Up to 120p (Cropped) <br />
                AVC-Intra100: 50i/59.94i <br />
                AVC-IntraLT: 120p to 240p (Cropped) <br />
                ProRes 4444: 2 Up to 30p <br />
                ProRes 422HQ: 2 Up to 60p
                1920 x 1080p: 59.94/50/29.97/25/23.98 <br />
                1920 x 1080i: 59.94/50 <br /> <br />
                Proxy <br />
                AVC-Proxy G6: Up to 60p <br />
                • Dynamic Range: 14+ Stops <br />
                • Native 800, 5000 ISO Push Up/Down <br />
                • Ports: 2 x BNC (3G-SDI), 1 x BNC (VF), 1x BNV (Genlock In), 1 x BNC (Timecode In/Out), LAN, USB B,
                mini-UBS, <br />
                1 x 5-Pin XLR (Mic, Female), 2 x 3-Pin XLR (Audio, Male), 12-Pin Lens Grip, 1 x 4-Pin XLR (12V DC In), 2
                x 4-Pin Hirose (DC Out),
                3.5mm Stereo Mini Headphone Jack <br />
                • Mount: Please Choose PL or EF at Checkout (Lenses Not Included) <br />
                • Memory: (1) expressP2 Card Slot, (1) SD Card Slot (Cards Not Included) <br />
                • Monitoring: Full HD via (2) 3G HDSDI Outputs and (1) VF Output (BNC) While Shooting 4K,
                Monitors Rentable Separately. <br />
                • 3.2" LCD Control Panel <br />
                • Built-In Filters (Off, 0.6, 1.2, 1.8), Removable IR Filter <br />
                • Weight: 5.95 lbs <br />
            </details>
            
            <hr />
        </div>
        <div id="camera3">
            <div className="camarasTop">
                <img src="./Arri-Alexa-Mini-PL-1.jpg" width="50%" height="auto"
                    alt="Arri Alexa Mini Camera" />
                <p className="comprar">
                    ARRI ALEXA MINI CAMERA 4:3 ARRIRAW
                    <br /> rental per day
                    $875.00 <br />
                    <button type="submit" id="cart3" className="btn btn-primary mb-3">Add to cart</button>
                </p>
            </div>
            
            <details>
                <summary className="d-flex">
                    <h4 className="detallesC">Details</h4>
                </summary>
                BASIC CAMERA PACKAGE INCLUDES: <br />
                •1x ARRI ALEXA MINI BODY WITH TITANIUM PL MOUNT ADAPTER WITH L-BUS AND VIEWFINDER CONTROLS FOR ALEXA
                MINI <br />
                •1x ARRI ALEXA MINI CANON EF LENS MOUNT ADAPTER (No shimming needed and positive lock) <br />
                •1x ARRI ALEXA MINI FULL PRO ACCESSORY KIT with customized integrated power dist. and mini hdmi/sdi
                converter and assorted cables. <br />
                • 1X K2.0006140 MVB-1, VIEWFINDER MOUNTING BRACKET FOR ALEXA MINI <br />
                • 2X K2.0006334 MAP-1, LIGHTWEIGHT ADAPTER PLATE FOR ALEXA MINI <br />
                • 2X K2.0006347 MAP-2, ADAPTER PLATE WITH ROD
                SUPPORT FOR ALEXA MINI <br />
                • 2X K2.0006348 MSB-1, SIDE BRACKET FOR ALEXA MINI <br />
                • 1X K2.0006352 BPA-4, BRIDGE PLATE ADAPTER FOR ALEXA MINI <br />
                • 2X K2.0006186 RMB-3, ROD MOUNTING BRACKET <br />
                • 2X K2.66255.0 15MM REDUCTION INSERT FOR RMB-3 <br />
                • 1X K2.73002.0 CCH-2, CENTER CAMERA HANDLE /CAGE TOP HANDLE <br />
                • 1X SET K2.66252.0 SUPPORT RODS 340 MM (13.4"), 15 MM <br />
                • 1X K2.0006471 BAP-1 & BAP-2 SIDE BATTERY PLATE <br />
                • 1X K2.0006807 CSP-1, SHOULDER PAD <br />
                • 1X K2.72021.0 KC 153-S, ETHERNET/RJ-45 CABLE (3.00M/9.8FT) <br />
                • 1X K2.75007.0 KC-50, POWER CABLE STRAIGHT (2M, 6.6 FEET) <br />
                • 1X ARRI K2.0006171 ALEXA MINI AUDIO CONNECTOR W/ CABLE & ARRI K2.66256.0 (K2662560) MBH-1 MICROPHONE
                BRACKET HOLDER <br />
                • 4X K2.0003623 CFAST 2.0 CARD 256 GB (NOW AVAILABLE ALSO 512 GB) <br />
                • 1X K2.0001242 LEXAR CFAST 2.0 CARD READER <br />
                • 8X PAG 150 STACKABLE BATTERIES WITH 2 CHARGERS <br />
                • 1X ARRI/ET HANDHELD RIG <br />
                • 6X LIGHTWEIGHT 15MM ULTRA-RODS ASSORTED SIZES 6”, 9” 18" <br />
                • 2X STUDIO 19MM /15MM ULTRA RODS 24” 18" OR 12” <br />
                • 1X ARRI BP-9 OR BP8 BRIDGEPLATE WITH 12" DOVETAIL <br />
                • 1X CAMRADE RAINCOVER WITH 5.6 ” MONITOR COVER+ EXTENDABLE ZOOM LENS EXTRA COVERS <br />
                • 1X HEAVY DUTY INNERSPACE RENTAL CASE AND TRAVEL PACKPACKS AVAILABLE <br /> <br />
                ALSO AVAILABLE THE FOLLOWING ACCESORIES: <br />
                • 1X ARRI LMB 4X5 FULL MATTEBOXES KITS <br />
                • 1X OCONNOR 2560 HEAD WITH CARBON FIBER LEGS OR HEAVY DUTY SET OF RONDFORD BAKER TRIPODS OR SACHTLER
                CINE 7+7 LIGHTWEIGHT TRIPODS <br />
                • 1X TV LOGIC 5.5 OLED ON BOARD MONITOR W/ SUNHOOD KIT OR TRANSVIDEO ARRI STARLITE MONITOR <br />
                • 1X TERADEK BOLT PRO 3000 KITS <br />
                • 1X ARRI FF5 CINE PRO KIT <br />
                • 1X ARRI WCU4 wireless follow focus (with Alexa remote license)/ for C FORCE MINI SET with up to three
                motors and assorted cables <br />
                • 1X EASY RIG WITH SERENE OR READY RIG with optional MOVI PRO GYMBAL kit <br />
                • 1X DANNA DOLLY RENTAL KIT <br />
                • 1X CAMBLOCK PORTABLE DOLLY MOTION CONTROL REMOTE HEAD KIT <br />
                • 1X MAVIC PRO DRONE <br />
            </details>
            
            <hr />
        </div>
      </section>
      <footer id="footer">
            <div className="redes">
                <Link to="https://www.facebook.com/Lafilmboutique" target='_blank' rel="noopener noreferrer"> <i className="fab fa-facebook-f"></i> </Link>
                <Link to="https://www.instagram.com/lafilmboutique/" target='_blank' rel="noopener noreferrer"> <i className="fab fa-instagram"></i> </Link>
                <Link to="https://www.pinterest.com/lafilmboutique" target='_blank' rel="noopener noreferrer"> <i className="fab fa-pinterest"></i> </Link>
            </div>
            <div className="mb-3"> <br />
                <span className="d-flex justify-content-between">
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="name@example.com" aria-describedby="emailHelp" />
                    <button type="submit" className="btn btn-primary ms-2">Suscribe</button>
                </span>
                <div id="emailHelp" className="form-text">Receive our newsletter</div>
            </div>
            <section className="d-flex justify-content-end">
                <p className="credits">© 2013  www.LAFILMBOUTIQUE.com created by OFF-HOLLYWOOD FILMS LLC </p>
            </section>
        </footer>
    </div>
  )
}


// //POP UP// 

let btnAbrirPopup = document.getElementById('btn-abrir-popup'),
overlay = document.getElementById('overlay'),
popup = document.getElementById('popup'),
btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});

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