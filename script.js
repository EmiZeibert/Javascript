const productos = [
    {
        id: "Celulares-notebook",
        titulo: "Notebook Exo",
        precio: 85000,
        categoria: {
            nombre: "Celulares-notebook",
            id: "Celulares-notebook"
        },
        imagen: "./imagenes/notebook65000.jpg"
    },
    {
        id: "Celulares-notebook",
        titulo: "Notebook Acer",
        precio: 65000,
        categoria: {
            nombre: "Celulares-notebook",
            id: "Celulares-notebook"
        },
        imagen: "./imagenes/notebook85000.jpg"
    },
    {
        id: "Audio-video",
        titulo: "Parlante chico",
        precio: 10500,
        categoria: {
            nombre: "Audio-video",
            id: "Audio-video"
        },
        imagen: "./imagenes/parlante10500.jpg"
    },
    {
        id: "Audio-video",
        titulo: "Parlante grande",
        precio: 20600,
        categoria: {
            nombre: "Audio-video",
            id: "Audio-video"
        },
        imagen: "./imagenes/parlante20000.jpg"
    },
    {
        id: "Celulares-notebook",
        titulo: "Celular samsung A03",
        precio: 52000,
        categoria: {
            nombre: "Celulares-notebook",
            id: "Celulares-notebook"
        },
        imagen: "./imagenes/samsunga03.jpg"
    },
    {
        id: "Celulares-notebook",
        titulo: "Celular motorola E20",
        precio: 34000,
        categoria: {
            nombre: "Celulares-notebook",
            id: "Celulares-notebook"
        },
        imagen: "./imagenes/motorolae20.jpg"
    },
    {
        id: "Audio-video",
        titulo: "Smartv 43p",
        precio: 73000,
        categoria: {
            nombre: "Audio-video",
            id: "Audio-video"
        },
        imagen: "./imagenes/smart43.jpg"
    },
    {
        id: "Audio-video",
        titulo: "Smartv 32p",
        precio: 45000,
        categoria: {
            nombre: "Audio-video",
            id: "Audio-video"
        },
        imagen: "./imagenes/smart32.jpg"
    },
    {
        id: "Audio-video",
        titulo: "Auricular Newvision",
        precio: 2500,
        categoria: {
            nombre: "Audio-video",
            id: "Audio-video"
        },
        imagen: "./imagenes/auricular2500.jpg"
    },
    {
        id: "Audio-video",
        titulo: "Auricular Redragon",
        precio: 5000,
        categoria: {
            nombre: "Audio-video",
            id: "Audio-video"
        },
        imagen: "./imagenes/auricular5000.jpg"
    },
    {
        id: "Audio-video",
        titulo: "Tablet",
        precio: 45000,
        categoria: {
            nombre: "Audio-video",
            id: "Audio-video"
        },
        imagen: "./imagenes/tablet45000.jpg"
    },
    {
        id: "Audio-video",
        titulo: "Tablet Lenovo",
        precio: 54000,
        categoria: {
            nombre: "Audio-video",
            id: "Audio-video"
        },
        imagen: "./imagenes/tablet54000.jpg"
    }



];
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategoria = document.querySelectorAll(".boton-categoria");
let agregarP = document.querySelectorAll(".producto-agregar");
const tPrincipal = document.querySelector("#tPrincipal");


function cargarProductos(elegirProductos) {
    contenedorProductos.innerHTML = "";

    elegirProductos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
    <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                    <div class="producto-detalles">
                        <h3 class="producto-titulo">${producto.titulo}</h3>
                        <p class="producto-precio">$${producto.precio}</p>
                        <button class="producto-agregar" id=${producto.id} "">Agregar</button>
                    </div>
    `;
        contenedorProductos.append(div);
    })
    actBotones();
}
cargarProductos(productos);

botonesCategoria.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesCategoria.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productosFiltrar = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosFiltrar);
            const tituloCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tPrincipal.innerText = tituloCategoria.categoria.nombre;
        } else {
            tPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })

})
function actBotones() {
    agregarP = document.querySelectorAll(".producto-agregar");
    agregarP.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}
const productoElegidos = [];
function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton)
    if( productoElegidos.some(producto => producto.id === idBoton)){
        const buscar= productoElegido.findIndex(producto => producto.id === idBoton);
        productoElegido[buscar].cantidad++
       
    }else{
        productoAgregado.cantidad= 1;
        productoElegidos.push(productoAgregado);
    }
   
}




















