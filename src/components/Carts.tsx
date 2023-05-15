import axios from 'axios'
import React, { useEffect } from 'react'
import { Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { setCarts } from '../redux/carts/cartSlice'
import { RootState } from '../redux/store'
import AddCart from './add /AddCart'
import ViewCart from './View/ViewCart'

const Carts = () => {
    const dispatch = useDispatch()
    const carts = useSelector((state: RootState) => state.carts.list)
    useEffect(() => {
        axios.get("https://dummyjson.com/carts")
            .then(res => {
                console.log(res.data.carts)
                dispatch(setCarts(res.data.carts))
            }).catch(error => {
                console.log(error)
            })
    }, [])

    const column = [
        {
            title: "id",
            dataIndex: "id",
            key: "1"
        },
        {
            title: "products",
            dataIndex: "totalProducts",
            key: "2"
        },
        {
            title: "quantity",
            dataIndex: "totalQuantity",
            key: "3"
        },
        {
            title: "total",
            dataIndex: "total",
            key: "4"
        },
        {
            title: "action",
            render: (record: any) => {
                return (
                    <>
                        <ViewCart record ={record}/>
                    </>
                )
            }
        },
    ]
    return (
        <div>
            <h2 style={{ textAlign: "center" }}>carts management table</h2>
            <div style={{ width: "80%", border: "1px solid #cdc9c9", margin: "20px auto" }}>
                <div style={{ margin: "10px 10px" }}>
                    <AddCart />
                </div>
                <Table
                    dataSource={carts}
                    columns={column}
                >
                </Table>
            </div>
        </div>
    )
}


export default Carts