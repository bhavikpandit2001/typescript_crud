import { EyeOutlined } from '@ant-design/icons'
import { Input, Modal, Table, Typography } from 'antd'
import React, { useState } from 'react'

const ViewCart = ({ record }: any) => {
    const [open, setOpen] = useState(false)

    const column = [
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
            key: "3",
            render: (quantity: any) => {
                return (
                    <>
                        <Input type='number' defaultValue={quantity} />
                    </>
                )
            }
        },
        {
            title: "total",
            dataIndex: "total",
            key: "5",
        },

    ]
    return (
        <div>
            <EyeOutlined onClick={() => setOpen(true)} />
            <Modal open={open} onOk={() => setOpen(false)} onCancel={() => setOpen(false)}>
                <div>
                    <Typography.Text>total products: {record.products.length}</Typography.Text>
                    <Table
                        dataSource={record.products}
                        columns={column}>
                    </Table>
                </div>
                <div>
                    <Typography.Text>Total price: {record.total}</Typography.Text>
                </div>
            </Modal>
        </div>
    )
}

export default ViewCart