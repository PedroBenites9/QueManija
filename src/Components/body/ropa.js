import hombreRemeraBlanco from '../../img/Remeras/hombre/HombreRemeraBlanco.JPG'
import hombreRemeraVerde from '../../img/Remeras/hombre/HombreRemeraVerde.JPG'
import hombreRemeraBordo from '../../img/Remeras/hombre/HombreRemeraBordo.JPG'
import hombreRemeraNegro from '../../img/Remeras/hombre/HombreRemeraNegro.JPG'
// import hombreRemeraCeleste from '../../img/Remeras/hombre/HombreRemeraCeleste.JPG'
// import Gorra1 from '../../img/Gorras/gorra1.jpg'
// import Gorra2 from '../../img/Gorras/gorra2.jpg'
// import Gorra3 from '../../img/Gorras/gorra3.jpg'
// import Gorra4 from '../../img/Gorras/gorra4.jpg'

const colors = {
    denim: {
        name: "Denim",
        id: "denim",
        hex: "#6F8FAF",
    },
    oyster: {
        name: "Oyster",
        id: "oyster",
        hex: "#D7C9B1",
    },
    white: {
        name: "White",
        id: "white",
        hex: "#FFFFFF",
    },
    buttermilk: {
        name: "Buttermilk",
        id: "buttermilk",
        hex: "#FFF6BA",
    },
    black: {
        name: "Black",
        id: "black",
        hex: "#000000",
    },
    emerald: {
        name: "Emerald",
        id: "emerald",
        hex: "#50C878",
    },
    pink: {
        name: "Pink",
        id: "pink",
        hex: "#FFD1DC",
    },
};

const indumentaria = [
    {
        nameProduct: 'Remera Oversize',
        variant: [{ color: colors.emerald, img: hombreRemeraVerde }, { color: colors.black, img: hombreRemeraNegro }, { color: colors.white, img: hombreRemeraBlanco }, { color: colors.pink, img: hombreRemeraBordo }],
        size: ['sm', 'md', 'lg', 'xl'],
        price: 8000,
    },
    {
        nameProduct: 'Gorra',
        // img: {
        //     gorra1: Gorra1,
        //     gorra2: Gorra2,
        //     gorra3: Gorra3,
        //     gorra4: Gorra4,
        // },
        img: { remera1: 'https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw2fde12d3/products/NIDZ2875-010/NIDZ2875-010-1.JPG' },
        price: 6000
    }
]

// const indumentaria = [
//     {
//         nameProducto: 'Remera Oversize',
//         img: { hombreRemeraVerde },
//         size: ['sm', 'md', 'lg', 'xlg'],
//         price: 8000,
//         color: 'Verde'
//     },
//     {
//         nameProducto: 'Remera Oversize',
//         img: hombreRemeraBlanco,
//         size: ['sm', 'md', 'lg', 'xlg'],
//         price: 8000,
//         color: 'Blanco'
//     },
//     {
//         nameProducto: 'Remera Oversize',
//         img: hombreRemeraNegro,
//         size: ['sm', 'md', 'lg', 'xlg'],
//         price: 8000,
//         color: 'Negro'
//     },
//     {
//         nameProducto: 'Remera Oversize',
//         img: hombreRemeraCeleste,
//         size: ['sm', 'md', 'lg', 'xlg'],
//         price: 8000,
//         color: 'Celeste'
//     },
//     {
//         nameProducto: 'Remera Oversize',
//         img: hombreRemeraBordo,
//         size: ['sm', 'md', 'lg', 'xlg'],
//         price: 8000,
//         color: 'Bordo'
//     }
//     ,
//     {
//         nameProducto: 'Gorra',
//         img: Gorra1,
//         price: 6000,
//         color: 'verde'
//     },
//     {
//         nameProducto: 'Gorra',
//         img: Gorra2,
//         price: 6000,
//         color: 'negro'
//     },
//     {
//         nameProducto: 'Gorra',
//         img: Gorra3,
//         price: 6000,
//     }
//     ,
//     {
//         nameProducto: 'Gorra',
//         img: Gorra4,
//         price: 6000,
//     }


// ]

export default indumentaria;



