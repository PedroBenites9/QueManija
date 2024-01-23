// import hombreRemeraBlanco from "../../img/Remeras/hombre/HombreRemeraBlanco.JPG";
// import hombreRemeraVerde from "../../img/Remeras/hombre/HombreRemeraVerde.JPG";
// import hombreRemeraBordo from "../../img/Remeras/hombre/HombreRemeraBordo.JPG";
// import hombreRemeraNegro from "../../img/Remeras/hombre/HombreRemeraNegro.JPG";
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
    /**
     ** Se mostraran los items de formas individual, asignandole una id, 
     ** color, img, categoria, nombre y precio

     *! modoficar el tipo de objeto para que se pueda plasmar a la card
     *! importar imagenes al host de img 'postimage'
     */
    {
        name: "Remera Oversize",
        category: 'Remera',
        img: ['https://postimg.cc/R3j79dfv][img]https://i.postimg.cc/R3j79dfv/Hombre-Remera-Blanco.jpg', 'https://postimg.cc/QHbJ5pLq][img]https://i.postimg.cc/QHbJ5pLq/Hombre-Remera-Bordo.jpg', 'https://postimg.cc/2qqQPM1H][img]https://i.postimg.cc/2qqQPM1H/Hombre-Remera-Celeste.jpg', 'https://postimg.cc/LJ8BVn2F][img]https://i.postimg.cc/LJ8BVn2F/Hombre-Remera-Negro.jpg'],
        size: ['sm', 'md', 'lg', 'xlg'],
        colors: [colors.pink, colors.denim, colors.buttermilk],
        price: 6000
    },
    {
        name: "Gorra",
        category: 'Gorra',
        img: ['Gurl1', 'Gurl2', 'Gurl3'],
        colors: [colors.denim, colors.buttermilk],
        price: 4000
    },
    {
        name: 'Remera Oversize',
        category: 'Remera',
        variant: [{
            color: colors.black,
            img: ['https://postimg.cc/LJ8BVn2F][img]https://i.postimg.cc/LJ8BVn2F/Hombre-Remera-Negro.jpg']
        }, {
            color: colors.emerald,
            img: ['']
        }],
    }
];

export default indumentaria;
