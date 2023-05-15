import { PlusCircleFilled } from '@ant-design/icons'
import { Form, Input, Modal } from 'antd'
import React, { useState } from 'react'

const AddPost = () => {
  const [open, setOpen] = useState(false)

  const OpenModal = () => {
    setOpen(true)
  }
  return (
    <>
      <PlusCircleFilled style={{ fontSize: "25px", color: "#1379e5" }} onClick={OpenModal} />
      <Modal open={open} onOk={() => setOpen(false)} onCancel={() => setOpen(false)}>
        <div style={{ margin: "20px" }}>
          <Form>
            <Form.Item label="title">
              <Input type='text' placeholder='enter title' />
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </>
  )
}

export default AddPost