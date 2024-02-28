// import hombreRemeraBlanco from "../../img/Remeras/hombre/HombreRemeraBlanco.JPG";
import hombreRemeraVerde from "../../img/Remeras/hombre/HombreRemeraVerde.JPG";
import hombreRemeraVerde2 from "../../img/Remeras/hombre/HombreRemeraVerde2.JPG";
import hombreRemeraVerde3 from "../../img/Remeras/hombre/HombreRemeraVerde3.JPG";
import hombreRemeraBordo from "../../img/Remeras/hombre/HombreRemeraBordo.JPG";
import hombreRemeraBordo2 from "../../img/Remeras/hombre/HombreRemeraBordo2.JPG";
// import hombreRemeraBordo3 from "../../img/Remeras/hombre/HombreRemeraBordo3.JPG";
import hombreRemeraNegro from "../../img/Remeras/hombre/HombreRemeraNegro.JPG";
import hombreRemeraNegro2 from "../../img/Remeras/hombre/HombreRemeraNegro2.JPG";
import hombreRemeraNegro3 from "../../img/Remeras/hombre/HombreRemeraNegro3.JPG";
// import hombreRemeraCeleste from '../../img/Remeras/hombre/HombreRemeraCeleste.JPG'
import GorraVerde from '../../img/Gorras/gorra1.jpg'
import GorraGris from '../../img/Gorras/gorra2.jpg'
import GorraGrisNegro from '../../img/Gorras/gorra3.jpg'
import GorraNegro from '../../img/Gorras/gorra4.jpg'

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
        hex: "#0000",
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
        name: 'Remera Oversize',
        category: 'Remera',
        size: ['sm', 'md', 'lg', 'xlg'],
        variant: [{
            color: colors.black,
            img: [hombreRemeraNegro, hombreRemeraNegro2, hombreRemeraNegro3],
        }, {
            color: colors.pink,
            img: [hombreRemeraBordo, hombreRemeraBordo2],
        }, {
            color: colors.emerald,
            img: [hombreRemeraVerde, hombreRemeraVerde2, hombreRemeraVerde3],
        }],
        price: 6000,
    },
    {
        name: 'Gorras',
        category: 'gorra',
        data: [
            {
                id: 0,
                nameProd: "Gorra gris",
                img: GorraGris
            },
            {
                id: 1,
                nameProd: "Gorra gris-negro",
                img: GorraGrisNegro
            },
            {
                id: 2,
                nameProd: "Gorra negro",
                img: GorraNegro
            },

            {
                id: 3,
                nameProd: "Gorra verde",
                img: GorraVerde
            },
        ],
        price: 4000,
    },

];

export default indumentaria;
