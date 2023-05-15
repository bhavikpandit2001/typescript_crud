import { PlusCircleFilled } from '@ant-design/icons'
import { Modal } from 'antd'
import React, { useState } from 'react'

const AddCart = () => {
    const [open, setOpen] = useState(false)

    const OpenModal = () =>{
        setOpen(true)
    }
  return (
    <>
        <PlusCircleFilled style={{fontSize: "25px", color: "#1379e5"}} onClick={OpenModal}/>
        <Modal open={open} onOk={() => setOpen(false)} onCancel={() => setOpen(false)}>
          <div style={{margin: "20px"}}></div>
        </Modal>
    </>
  )
}

export default AddCart