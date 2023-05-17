import axios from 'axios'
import { useEffect, useState } from 'react'
import { Button, Modal, Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { setCarts } from '../redux/carts/cartSlice'
import { RootState } from '../redux/store'
import AddCart from './add /AddCart'
import ViewCart from './View/ViewCart'

const Carts = () => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
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
            dataIndex: "products",
            key: "2",
            render: (record: any) =>{
                const datacolumn = [
                    {
                        title: "title",
                        dataIndex: "title",
                        key: "1"
                    },
                    {
                        title: "price",
                        dataIndex: "price",
                        key: "2"
                    },
                    {
                        title: "quantity",
                        dataIndex: "quantity",
                        key: "3"
                    },
                    {
                        title: "price",
                        dataIndex: "price",
                        key: "4"
                    },
                    {
                        title: "total",
                        dataIndex: "total",
                        key: "5"
                    }
                ]
                return(
                    <div>
                        <Button onClick={() => setOpen(true)}>Products</Button>
                        <Modal open={open} onOk={() => setOpen(false)} onCancel={() => setOpen(false)}>
                            <Table
                            dataSource={record}
                            columns={datacolumn}
                            ></Table>
                        </Modal>
                    </div>
                )
            }
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
                    <AddCart/>
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