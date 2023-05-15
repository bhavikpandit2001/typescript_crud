import { PlusCircleFilled } from '@ant-design/icons'
import { Button, Form, Input, message, Modal } from 'antd'
import axios from 'axios'
import React, { useState } from 'react'

const AddProduct = () => {
  const [open, setOpen] = useState(false)

  const OpenModal = () => {
    setOpen(true)
  }

  const Add = (value: any) =>{
    console.log(value)
    axios.post("https://dummyjson.com/products/add", value)
    .then(res =>{
      console.log(res.data)
      message.success("product added successfully")
      setOpen(false)
    }).catch(error =>{
      console.log(error)
      message.error("something went wrong")
    })
  }
  return (
    <>
      <PlusCircleFilled style={{ fontSize: "25px", color: "#1379e5" }} onClick={OpenModal} />
      <Modal open={open} onOk={() => setOpen(false)} onCancel={() => setOpen(false)}>
        <div style={{ margin: "20px" }}>
          <Form onFinish={Add}>
          <Form.Item label="title" name="title">
            <Input type='text'  placeholder='enter title' />
          </Form.Item>
          <Button type='primary' htmlType='submit'>Add</Button>
          </Form>
        </div>
      </Modal>
    </>
  )
}

export default AddProduct