import { AlipayOutlined, DeleteOutlined, SearchOutlined } from '@ant-design/icons'
import { Avatar, Button, Form, Image, Input, Table } from 'antd'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/products/productSlice'
import { RootState } from '../redux/store'
import AddProduct from './add /AddProduct'
import EditProduct from './edit/EditProduct'
import ViewProduct from './View/ViewProduct'

const Products = () => {
    const dispatch = useDispatch()
    const products = useSelector((state: RootState) => state.products.list)
    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then(res => {
                console.log(res.data.products)
                dispatch(setProducts(res.data.products))
            }).catch(error => {
                console.log(error)
            })
    }, [])

    const column = [
        {
            title: "thumbnail",
            dataIndex: "thumbnail",
            key: "1",
            render: (thumbnail: string) => {
                return (
                    <Avatar icon={<Image src={thumbnail} />}></Avatar>
                )
            }
        },
        {
            title: "title",
            dataIndex: "title",
            key: "2"
        },
        {
            title: "brand",
            dataIndex: "brand",
            key: "3"
        },
        {
            title: "description",
            dataIndex: "description",
            key: "4"
        },
        {
            title: "category",
            dataIndex: "category",
            key: "5"
        },
        {
            title: "price",
            dataIndex: "price",
            key: "6",
            render: (price: string) => {
                return (
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        {price}
                        <AlipayOutlined />
                    </div>
                )
            }
        },
        {
            title: "action",
            render: (record: any) => {
                return (
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <ViewProduct record={record} />
                        <EditProduct record={record} />
                        <DeleteOutlined onClick={() => DeleteProduct(record)} />
                    </div>
                )
            }
        }
    ]
    const Search = (value: any) => {
        console.log("search value", value.search)
        axios.get(`https://dummyjson.com/products/search?q=${value.search}`)
            .then(res => {
                console.log(res.data.products)
                dispatch(setProducts(res.data.products))
            }).catch(error => {
                console.log(error)
            })
    }
    console.log(products)
    const DeleteProduct = (record: any) => {
        console.log("record", record)
    }
    return (
        <div>
            <h2 style={{ textAlign: "center" }} >products management table</h2>

            <div style={{ width: "80%", border: "1px solid #cdc9c9", margin: "20px auto" }}>
                <div style={{ margin: "10px 10px", display: "flex", justifyContent: "space-between"}}>
                    <Form onFinish={Search}>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                        <Form.Item name="search">
                        <Input style={{ borderRadius: "10px" }} type='search' placeholder='please type text to search'/>
                        </Form.Item>
                        <Button htmlType='submit'><SearchOutlined/></Button>
                        </div>
                    </Form>
                    <AddProduct />
                </div>
                <Table
                    dataSource={products}
                    columns={column}
                >
                </Table>
            </div>
        </div>
    )
}

export default Products