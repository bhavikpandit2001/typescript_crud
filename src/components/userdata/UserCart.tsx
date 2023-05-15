import { ShoppingOutlined } from '@ant-design/icons'
import { Button, message, Modal, Table } from 'antd'
import axios from 'axios'
import React, {  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserCart } from '../../redux/carts/cartSlice'
import { RootState } from '../../redux/store'


const UserCart = ({ id }: any) => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const usercart = useSelector((state: RootState) => state.carts.usercart)
  console.log(usercart)
  const OpenCart = () =>{
    axios.get(`https://dummyjson.com/users/${id}/carts`)
      .then(res => {
        setOpen(true)
        console.log(res.data.carts)
        dispatch(setUserCart(res.data.carts))
        message.success("carts fetched successfully")
      }).catch(error => {
        console.log(error)
        message.error("something went wrong")
      })
  }
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

  ]
  return (
    <div>
      <Button type='primary' onClick={OpenCart}><ShoppingOutlined />user cart</Button>
      <Modal open={open} onOk={() => setOpen(false)} onCancel={() => setOpen(false)}>
        <div style={{ margin: "20px" }}>
          <Table
          dataSource={usercart}
          columns={column}></Table>
        </div>
      </Modal>
    </div>
  )
}

export default UserCart