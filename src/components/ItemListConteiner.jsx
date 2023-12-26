import React from 'react'
import ItemList from './ItemList'


const ItemListContainer = () => {
    const productos = [
        { id: 1, nombre: "CB650R", descripcion: "esta es la descipcion de la moto 1", precio: 50000, imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffotos.jornaldocarro.estadao.com.br%2Fuploads%2F2020%2F01%2F31112429%2Fa1d89f5309854f840e5ee43c0f37096b.jpg&f=1&nofb=1&ipt=bc750a62f4a7dff8839ec7a1592258da37fb6997276645fad5cc8f9f0bd8fe39&ipo=images", marca: "Honda" },
        { id: 2, nombre: "MT10", descripcion: "esta es la descipcion de la moto 2", precio: 60000, imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mundomotero.com%2Fwp-content%2Fuploads%2F2015%2F11%2FYamaha-MT-10_25.jpg&f=1&nofb=1&ipt=a1e33abcbd2df6ae291ae611b729d530139e6b0c551f08d3e00cde81a887289c&ipo=images", marca: "Yamaha" },
        { id: 3, nombre: "Ninja ZX-10RR", descripcion: "esta es la descipcion de la moto 3", precio: 70000, imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstorage.kawasaki.eu%2Fpublic%2Fkawasaki.eu%2Fen-EU%2Fmodel%2F19ZX1002G_201GN2DRF1CG_A_001.jpg&f=1&nofb=1&ipt=c6c12688a4449f5089ba2acc71a3575e7e67366989167ac29eb52fb24106bc23&ipo=images", marca: "Kawasaki" },
        { id: 4, nombre: "FLSTF Fat Boy", descripcion: "esta es la descipcion de la moto 4", precio: 80000, imagen: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F2.bp.blogspot.com%2F-GN6C7-MGIL4%2FTV-Uhtq_BrI%2FAAAAAAAAAHU%2FiAeFp_xN4XA%2Fs1600%2F2011-Harley-Davidson-FLSTF%2BFatBoy-02.jpg&f=1&nofb=1&ipt=504591725a7e91f670c568b8e864ed38dbd358302a70e15a41955583e9736c32&ipo=images", marca: "Harley Davidson" }
    ]

    const mostrarProductos = new Promise((resolve, reject) => {

        if (productos.length > 0) {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        } else {
            reject("No se obtuvieron Productos")
        }
    })


    mostrarProductos
        .then((resultado) => { console.log(resultado) })
        .catch((error) => { console.log(error) })

    return (
        <div><ItemList productos={productos} /> </div>
    )




}

export default ItemListContainer