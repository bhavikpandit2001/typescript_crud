import { PlusCircleFilled } from '@ant-design/icons'
import { Form, Input, Modal, Select } from 'antd'
import React, { useState } from 'react'

const AddTodo = () => {
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
                        <Form.Item label="todo">
                            <Input type='text' placeholder='enter todo' />
                        </Form.Item>
                        <Form.Item label="completed?">
                            <Select
                            defaultValue={"pending"}
                            options={[{
                                value: '0',
                                label: 'pending',
                            },
                            {
                                value: '1',
                                label: 'completed',
                            },]}>
                            </Select>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        </>
    )
}

export default AddTodo