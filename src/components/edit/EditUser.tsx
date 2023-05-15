import { EditOutlined } from '@ant-design/icons'
import { Button, Form, Input, message, Modal } from 'antd'
import axios from 'axios'
import React, { useState } from 'react'

const EditUser = ({record}: any) => {
    const [open, setOpen] = useState(false)

    const Edit = (value: any) =>{
        axios.put(`https://dummyjson.com/users/${record.id}`,value)
        .then(res => {
            console.log(res.data)
            message.success(`product ${record.id} updated successfully`)
        }).catch(error =>{
            console.log(error)
        })
    }
  return (
    <div>
        <EditOutlined onClick={() => setOpen(true)}/>
        <Modal open={open} onOk={() => setOpen(false)} onCancel={() => setOpen(false)}>
        <div style={{ margin: "20px" }}>
        <Form onFinish={Edit}>
            <Form.Item label="lastname" name="lastName">
              <Input type='text' placeholder='enter lastName' defaultValue={record.lastName} />
            </Form.Item>
            <Button type='primary'htmlType='submit'>Edit</Button>
          </Form>
        </div>
        </Modal>
    </div>
  )
}

export default EditUser