import { DeleteOutlined } from "@ant-design/icons"
import { Avatar, Image, message, Table } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { removeOrders } from "../redux/orders/orderSlice"
import { RootState } from "../redux/store"

const Orders = () => {
    const orders =  useSelector((state: RootState) => state.orders.list)
    const dispatch = useDispatch()
    console.log(orders)

    const columns = [
        {
            title: "image",
            dataIndex: "thumbnail",
            render: (record: any) =>{
                return(
                    <Avatar icon={<Image alt='avtar' src={record}></Image>}/>
                )
            },
            key: "1"
        },
        {
            title: "title",
            dataIndex: "title",
            key: "1"
        },
        {
            title: "brand",
            dataIndex: "brand",
            key: "2"
        },
        {
            title: "stock",
            dataIndex: "stock",
            key: "3",
            
        },
        {
            title: "price",
            dataIndex: "price",
            key: "4"
        },
        {
            title: "actions",
            render:(record: any) => {
                return(
                    <DeleteOutlined onClick={() => Delete(record)} />
                )
            },
            key: "5"
        }
    ]

    const Delete = (record: any) =>{
        console.log(record)
        dispatch(removeOrders(record))
        message.success("order deleted successfully")
    }
  return (
    <div>
        <Table
        dataSource={orders}
        columns={columns}
        >

        </Table>
    </div>
  )
}

export default Orders