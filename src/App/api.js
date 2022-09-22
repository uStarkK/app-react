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
                        desc: " Peso: 500gr",
                        category: "food"
                        
                    },
                    {
                        producto: "Papa",
                        marca: "Besto Potato",
                        stock: 43,
                        precio: "17 (Kilo)",
                        picURL: "../../papa.jpg",
                        id: 2,
                        desc: "Descripción: La mejor papa del condado, cultivada y cuidada por los mejores granjeros de la zona, traida a ti gracias al mejor sistema de transporte disponible. Rica y deliciosa, la papa Besto Potato es considerada una de las mejores papas de la industria nacional",
                        category: "food"
                    },
                    {
                        producto: "Gaseosa",
                        marca: "Manaos",
                        stock: 17,
                        precio: 53,
                        picURL: "../../manaos.jpg",
                        id: 3,
                        desc: "Contenido: 2.44Lts.",
                        category: "food"
                    },
                    {
                        producto: "Salchichas",
                        marca: "Granja Iris",
                        stock: 30,
                        precio: 80,
                        picURL: "../../salchichas.jpg",
                        id: 4,
                        desc: "Contenido: 12 Salchichas, combinadas con la mejor soja disponible, para un intenso y exquisito sabor",
                        category: "food"
                    },
                    {
                        producto: "Toallas",
                        marca: "Mediapizza",
                        stock: 27,
                        precio: 22,
                        picURL: "../../toalla.jpg",
                        id: 5,
                        desc: "Toallas Mediapizza. Confiables, duraderas y útiles para toda ocasión! Hechas de 100% de algodon natural y fabricadas en su totalidad dentro del país",
                        category: "cleaning"
                    },
                    {
                        producto: "Guantes",
                        marca: "Galvan Morales",
                        stock: 32,
                        precio: 125,
                        picURL: "../../guantes.jpg",
                        id: 6,
                        desc: "El mejor equipo se encuentra en Galvan Morales. Estos guantes fueron diseñados por un grupo de expertos, su comodidad está garantizada!",
                        category: "accesories"
                    },
                    {
                        producto: "Galletitas",
                        marca: "Terrabusi",
                        stock: 19,
                        precio: 27,
                        picURL: "../../galletitas.jpg",
                        id: 7,
                        desc: "Galletitas Terrabusi. La mejor marca  - Peso: 450gr",
                        category: "food"
                    },
                    {
                        producto: "Queso",
                        marca: "La Serenisima",
                        stock: 22,
                        precio: 82,
                        picURL: "../../queso.jpg",
                        id: 8,
                        desc: "Contenido: 300gr de queso rallado La Serenisima. Ideal para saborizar tus comidas",
                        category: "food"

                    },
                    {
                        producto: "Leche",
                        marca: "El Amanecer",
                        stock: 16,
                        precio: 64,
                        picURL: "../../leche.png",
                        id: 9,
                        desc: "Leche entera El Amanecer. Contenido: 1Lt",
                        category: "food"
                    },
                    {
                        producto: "Nachos",
                        marca: "Doritos",
                        stock: 20,
                        precio: 65,
                        picURL: "../../doritos.jpg",
                        id: 10,
                        desc: "Deliciosos y exquisitos Doritos. El mejor snack que podría haber en tu mesa",
                        category: "food"
                    },
                    {
                        producto: "Pan Lactal",
                        marca: "Panacity",
                        stock: 21,
                        precio: 41,
                        picURL: "../../pan.png",
                        id: 11,
                        desc: "Panacity trae para vos su Pan Lactal, económico y delicioso para que puedas empezar tu día con una buena tostada. Contenido: 450gr",
                        category: "food"
                    },
                    {
                        producto: "Jabon",
                        marca: "Martata",
                        stock: 27,
                        precio: 52,
                        picURL: "../../jabon.jpg",
                        id: 12,
                        desc: "Peso: 150gr. Jabón corporal Martata. Aroma a frambuesa",
                        category: "cleaning"
                    },
                    {
                        producto: "Agua Mineral",
                        marca: "MineralWater",
                        stock: 19,
                        precio: 47,
                        picURL: "../../agua.jpg",
                        id: 13,
                        desc: "Contenido: 500ml. Agua mineral extraída de las montañas del himalaya",
                        category: "food"
                    },
                    {
                        producto: "Chocolate",
                        marca: "ChocoChoco",
                        stock: 25,
                        precio: 75,
                        picURL: "../../chocolate.jpg",
                        id: 14,
                        desc: "Peso: 230gr. Chocolate ChocoChoco, delicioso y económico",
                        category: "food"
                    },
                    {
                        producto: "Harina",
                        marca: "Pureza",
                        stock: 21,
                        precio: 40,
                        picURL: "../../harina.jpg",
                        id: 15,
                        desc: "Peso: 617gr. Harina 000 Pureza, especial para tu cocina. ",
                        category: "food"
                        
                    }
                ]
            );
        }, 2000)
    })
    return promesa
}
