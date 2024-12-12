const botonesAgregar = document.querySelectorAll('.boton-agregar');
const listaCarrito = document.getElementById('lista-carrito');
const totalPagar = document.getElementById('total-pagar');
const botonLimpiarCarrito = document.getElementById('limpiar-carrito');
const botonCerrarCarrito = document.getElementById('cerrar-carrito');
const modalCarrito = document.getElementById('carrito');

let carrito = [];

// Actualizar carrito
function actualizarCarrito() {
    listaCarrito.innerHTML = '';
    let total = 0;

    carrito.forEach((producto, index) => {
        const item = document.createElement('li');
        item.textContent = `${producto.nombre} - $${producto.precio.toLocaleString()}`;

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        
        
        botonEliminar.addEventListener('mouseover', () => {
            botonEliminar.style.backgroundColor = 'red'; 
            
        });
        
        botonEliminar.addEventListener('mouseout', () => {
            botonEliminar.style.backgroundColor = '#555'; 
            
        });
        botonEliminar.addEventListener('click', () => {
            carrito.splice(index, 1);
            actualizarCarrito();
        });

        item.appendChild(botonEliminar);
        listaCarrito.appendChild(item);
        total += producto.precio;
    });

    totalPagar.textContent = `$${total.toLocaleString()}`;
}

// Agregar producto
botonesAgregar.forEach(boton => {
    boton.addEventListener('click', () => {
        const nombre = boton.dataset.nombre;
        const precio = parseFloat(boton.dataset.precio);
        carrito.push({ nombre, precio });
        actualizarCarrito();
        modalCarrito.style.display = 'flex';
    });
});

// Limpiar carrito
botonLimpiarCarrito.addEventListener('click', () => {
    carrito = [];
    actualizarCarrito();
});

// Cerrar modal
botonCerrarCarrito.addEventListener('click', () => {
    modalCarrito.style.display = 'none';
});


window.addEventListener('click', function (event) {
    if (event.target === modalCarrito) {
        modalCarrito.style.display = 'none'; 
    }
});


