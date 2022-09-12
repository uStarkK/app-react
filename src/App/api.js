export const getProductos = () => {
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(
                [
                    {
                        producto: "Fideos",
                        marca: "Don Vicente",
                        stock: 0,
                        precio: 38,
                        picURL:"fideos.jpg"
                    },
                    {
                        producto: "Papa",
                        marca: "Besto Potato",
                        stock: 43,
                        precio:"17 (Kilo)",
                        picURL:"papa.jpg"
                    },
                    {
                        producto: "Gaseosa",
                        marca: "Manaos",
                        stock: 17,
                        precio: 53,
                        picURL:"manaos.jpg"
                    },
                    {
                        producto: "Salchichas",
                        marca: "Granja Iris",
                        stock: 30,
                        precio: 80,
                        picURL:"salchichas.jpg"
                    },
                    {
                        producto: "Toallas",
                        marca: "Mediapizza",
                        stock: 27,
                        precio: 22,
                        picURL:"toalla.jpg"
                    },
                    {
                        producto: "Guantes",
                        marca: "Galvan Morales",
                        stock: 32,
                        precio: 125,
                        picURL:"guantes.jpg"
                    },
                    {
                        producto: "Galletitas",
                        marca: "Terrabusi",
                        stock: 19,
                        precio: 27,
                        picURL:"galletitas.jpg"
                    },
                    {
                        producto: "Queso",
                        marca: "La Serenisima",
                        stock: 22,
                        precio: 82,
                        picURL:"queso.jpg"
                    },
                    {
                        producto: "Leche",
                        marca: "El Amanecer",
                        stock: 16,
                        precio: 64,
                        picURL:"leche.png"
                    },
                    {
                        producto: "Nachos",
                        marca: "Doritos",
                        stock: 20,
                        precio: 65,
                        picURL:"doritos.jpg"
                    },
                    {
                        producto: "Pan Lactal",
                        marca: "Panacity",
                        stock: 21,
                        precio: 41,
                        picURL:"pan.png"
                    },
                    {
                        producto: "Jabon",
                        marca: "Martata",
                        stock: 27,
                        precio: 52,
                        picURL:"jabon.jpg"
                    },
                    {
                        producto: "Agua Mineral",
                        marca: "MineralWater",
                        stock: 19,
                        precio: 47,
                        picURL:"agua.jpg"
                    },
                    {
                        producto: "Chocolate",
                        marca: "ChocoChoco",
                        stock: 25,
                        precio: 75,
                        picURL:"chocolate.jpg"
                    },
                    {
                        producto: "Harina",
                        marca: "Pureza",
                        stock: 21,
                        precio: 40,
                        picURL:"harina.jpg"
                    }
                ]
            );
        }, 2000)
    })
    return promesa
}