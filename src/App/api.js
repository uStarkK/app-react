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
                        picURL: "../../fideos.jpg",
                        id: 1,
                        peso: "500gr"
                        
                    },
                    {
                        producto: "Papa",
                        marca: "Besto Potato",
                        stock: 43,
                        precio: "17 (Kilo)",
                        picURL: "../../papa.jpg",
                        id: 2,
                        desc: "La mejor papa del condado, cultivada y cuidada por los mejores granjeros de la zona, traida a ti gracias al mejor sistema de transporte disponible. Rica y deliciosa, la papa Besto Potato es considerada una de las mejores papas de la industria nacional"
                    },
                    {
                        producto: "Gaseosa",
                        marca: "Manaos",
                        stock: 17,
                        precio: 53,
                        picURL: "../../manaos.jpg",
                        id: 3
                    },
                    {
                        producto: "Salchichas",
                        marca: "Granja Iris",
                        stock: 30,
                        precio: 80,
                        picURL: "../../salchichas.jpg",
                        id: 4
                    },
                    {
                        producto: "Toallas",
                        marca: "Mediapizza",
                        stock: 27,
                        precio: 22,
                        picURL: "../../toalla.jpg",
                        id: 5
                    },
                    {
                        producto: "Guantes",
                        marca: "Galvan Morales",
                        stock: 32,
                        precio: 125,
                        picURL: "../../guantes.jpg",
                        id: 6
                    },
                    {
                        producto: "Galletitas",
                        marca: "Terrabusi",
                        stock: 19,
                        precio: 27,
                        picURL: "../../galletitas.jpg",
                        id: 7
                    },
                    {
                        producto: "Queso",
                        marca: "La Serenisima",
                        stock: 22,
                        precio: 82,
                        picURL: "../../queso.jpg",
                        id: 8
                    },
                    {
                        producto: "Leche",
                        marca: "El Amanecer",
                        stock: 16,
                        precio: 64,
                        picURL: "../../leche.png",
                        id: 9
                    },
                    {
                        producto: "Nachos",
                        marca: "Doritos",
                        stock: 20,
                        precio: 65,
                        picURL: "../../doritos.jpg",
                        id: 10
                    },
                    {
                        producto: "Pan Lactal",
                        marca: "Panacity",
                        stock: 21,
                        precio: 41,
                        picURL: "../../pan.png",
                        id: 11
                    },
                    {
                        producto: "Jabon",
                        marca: "Martata",
                        stock: 27,
                        precio: 52,
                        picURL: "../../jabon.jpg",
                        id: 12
                    },
                    {
                        producto: "Agua Mineral",
                        marca: "MineralWater",
                        stock: 19,
                        precio: 47,
                        picURL: "../../agua.jpg",
                        id: 13
                    },
                    {
                        producto: "Chocolate",
                        marca: "ChocoChoco",
                        stock: 25,
                        precio: 75,
                        picURL: "../../chocolate.jpg",
                        id: 14
                    },
                    {
                        producto: "Harina",
                        marca: "Pureza",
                        stock: 21,
                        precio: 40,
                        picURL: "../../harina.jpg",
                        id: 15
                        
                    }
                ]
            );
        }, 2000)
    })
    return promesa
}

export const getItem = (id) => {
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id });
        }, 2000)}) 
    return promesa
} 