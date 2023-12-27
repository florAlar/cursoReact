import { React, useState, useEffect } from 'react'
import ItemList from './ItemList'
import { pedirInfo } from '../utils/pedirData'
import { useParams } from 'react-router-dom'
import { Flex,Wrap,WrapItem } from '@chakra-ui/react'


const ItemListContainer = () => {


    const [productos, setProductos] = useState([])
    const { categoria } = useParams()

    useEffect(() => {
        pedirInfo()
            .then((res) => {
                if (categoria) {
                    setProductos(res.filter((prod) => prod.categoria === categoria))
                } else {
                    setProductos(res)
                }
            })
    }, [categoria])

    return (
        <Flex>
            <Wrap>
            <ItemList productos={productos} />
            </Wrap>
        </Flex>
    )




}

export default ItemListContainer