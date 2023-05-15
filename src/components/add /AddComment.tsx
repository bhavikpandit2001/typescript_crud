import { PlusCircleFilled } from '@ant-design/icons'
import {  Modal } from 'antd'
import React, { useState } from 'react'

const AddComment = () => {
    const [open, setOpen] = useState(false)

    const OpenModal = () =>{
        setOpen(true)
    }
  return (
    <>
        <PlusCircleFilled style={{fontSize: "25px", color: "#1379e5"}} onClick={OpenModal}/>
        <Modal open={open} onOk={() => setOpen(false)} onCancel={() => setOpen(false)}></Modal>
    </>
  )
}

export default AddComment