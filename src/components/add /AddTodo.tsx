import { PlusCircleFilled } from '@ant-design/icons'
import { Button, Form, Input, Modal, Select } from 'antd'
import React, { useState } from 'react'

const AddTodo = () => {
    const [open, setOpen] = useState(false)

    const OpenModal = () => {
        setOpen(true)
    }
    const addTodo = (values: any) => {
        console.log(values)
    }
    return (
        <>
            <PlusCircleFilled style={{ fontSize: "25px", color: "#1379e5" }} onClick={OpenModal} />
            <Modal open={open} onOk={() => setOpen(false)} onCancel={() => setOpen(false)}>
                <div style={{ margin: "20px" }}>
                    <Form onFinish={addTodo}>
                        <Form.Item label="todo" name="todo">
                            <Input type='text' placeholder='enter todo' />
                        </Form.Item>
                        <Form.Item label="userId" name="userId">
                            <Input type='number' min={1} max={30} placeholder='enter userId' />
                        </Form.Item>
                        <Form.Item label="completed?" name="completed?">
                            <Select
                                defaultValue={"pending"}
                                options={[{
                                    value: 'false',
                                    label: 'pending',

                                },
                                {
                                    value: 'true',
                                    label: 'completed',
                                },]}>
                            </Select>
                        </Form.Item>
                        <Button type='primary' htmlType='submit'>Add</Button>
                    </Form>
                </div>
            </Modal>
        </>
    )
}

export default AddTodo