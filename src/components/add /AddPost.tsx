import { PlusCircleFilled } from '@ant-design/icons'
import { Button, Form, Input, message, Modal } from 'antd'
import axios from 'axios'
import { useState } from 'react'

const AddPost = () => {
  const [open, setOpen] = useState(false)

  const OpenModal = () => {
    setOpen(true)
  }
  const addPost = (values: any) =>{
    console.log(values)
    axios.post("https://dummyjson.com/posts/add", values)
    .then(res => {
      console.log(res.data)
      setOpen(false)
      message.success("new post added successfully")
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
          <Form onFinish={addPost}>
            <Form.Item label="title" name="title">
              <Input type='text' placeholder='enter title' />
            </Form.Item>
            <Form.Item label="userId" name="userId">
              <Input type='number' min={1} max={30} placeholder='enter userId' />
            </Form.Item>
            <Button type='primary' htmlType='submit'>Add</Button>
          </Form>
        </div>
      </Modal>
    </>
  )
}

export default AddPost