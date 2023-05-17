import { Button, message } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setOrders } from '../redux/orders/orderSlice'

const OrderBtn = ({item}: any) => {
    const dispatch = useDispatch()
    const Buy = () =>{
        console.log(item)
        dispatch(setOrders(item))
        message.success("product added to orders section")
    }
  return (
    <div>
        <Button type='primary' onClick={Buy}>Buy now</Button>
    </div>
  )
}

export default OrderBtn