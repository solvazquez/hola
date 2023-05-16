const productos = [
    { nombre: "Dry", autor: "Neal Shusterman", precio: 3500, id: 1, img: "../img/fantasia/1.jpg", idCat:"fantasia" },
    { nombre: "Vicious", autor: "V.E. Schwab", precio: 2900, id: 1, img: "../img/fantasia/2.jpg", idCat:"fantasia" },
    { nombre: "House of Hollow", autor: "Krystal Sutherland", precio: 3600, id: 1, img: "../img/fantasia/3.jpg", idCat:"fantasia" },
    { nombre: "Illuminae", autor: "Jay Kristoff", precio: 2500, id: 1, img: "../img/fantasia/4.jpg", idCat:"fantasia" },
    { nombre: "A wrinkle in time", autor: "Madeleine L´engle", precio: 2800, id: 1, img: "../img/fantasia/5.jpg", idCat:"fantasia" },
    { nombre: "Harry Potter", autor: "J.K. Rowling", precio: 3100, id: 1, img: "../img/fantasia/6.jpg", idCat:"fantasia" },
    { nombre: "The silent patient", autor: "Alex Michaelides", precio: 4500, id: 2, img: "../img/misterio/1.jpg", idCat:"misterio" },
    { nombre: "Murder on the orient express", autor: "Agatha Christie", precio: 2800, id: 2, img: "../img/misterio/2.jpg", idCat:"misterio" },
    { nombre: "Someone we know", autor: "Shari Lapena", precio: 3700, id: 2, img: "../img/misterio/3.jpg", idCat:"misterio" },
    { nombre: "The turn of the key", autor: "Ruth Ware", precio: 2500, id: 2, img: "../img/misterio/4.jpg", idCat:"misterio" },
    { nombre: "The age of doubt", autor: "Andrea Camilleri", precio: 2800, id: 2, img: "../img/misterio/5.jpg", idCat:"misterio" },
    { nombre: "A good girl´s guide to murder", autor: "Holly Jackson", precio: 3900, id: 2, img: "../img/misterio/6.jpg", idCat:"misterio" },
    { nombre: "Start with why", precio: 1900, autor:"Simon Sinek", id: 3, img: "../img/NoFiccion/1.jpg", idCat:"noficcion" },
    { nombre: "How to fight anti-semitism", autor:"Bari Weiss" , precio: 4300, id: 3, img: "../img/NoFiccion/2.jpg", idCat:"noficcion" },
    { nombre: "The diary of a young girl",autor:"Anne Frank" , precio: 3200, id: 3, img: "../img/NoFiccion/3.jpg", idCat:"noficcion" },
    { nombre: "A random walk down wall street", autor:"Burton Malkiel", precio: 2900, id: 3, img: "../img/NoFiccion/4.jpg", idCat:"noficcion" },
    { nombre: "I am Malala", precio: 4100, autor:"Malala Yousafzai", id: 3, img: "../img/NoFiccion/5.jpg", idCat:"noficcion" },
    { nombre: "The 48 laws of power", precio: 3700, autor:"Robert Greene", id: 3, img: "../img/NoFiccion/6.jpg", idCat:"noficcion" },

]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000)
    })
}

//Creamos una función similar pero que nos retorne un solo item: 

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 200)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise( resolve => {
        setTimeout( ()=> {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve (productosCategoria);
        }, 100)
    })
}



