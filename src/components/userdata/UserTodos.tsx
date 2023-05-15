import { BarsOutlined } from '@ant-design/icons'
import { Button, message, Modal, Table, Tag } from 'antd'
import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { setUserTodos } from '../../redux/Todos/todoSlice'

const UserTodos = ({id}:any) => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const usertodos = useSelector((state: RootState) => state.todos.usertodos )

  const OpenTodos = () =>{
    axios.get(`https://dummyjson.com/users/${id}/todos`)
      .then(res => {
        setOpen(true)
        console.log(res.data.todos)
        dispatch(setUserTodos(res.data.todos))
        message.success("todos fetched successfully")
      }).catch(error => {
        console.log(error)
        message.error("something went wrong")
      })
  }

  const column = [
    {
      title: "id",
      dataIndex: "id",
      key: "1"
    },
    {
      title: "todo",
      dataIndex: "todo",
      key: "2"
    },
    {
      title: "completed",
      dataIndex: "completed",
      key: "3",
      render: (completed: string) =>{
        return(
         <div>{completed ? 
             <Tag color="success">{"completed"}</Tag>
             : <Tag color="magenta">{"pending"}</Tag>}
             </div>
        )
     }
    }
  ]
  
  return (
    <div>
         <Button type='primary' onClick={OpenTodos}><BarsOutlined />user todos</Button>
         <Modal open={open} onOk={() => setOpen(false)} onCancel={() => setOpen(false)}>
        <div style={{ margin: "20px" }}>
          <Table
          dataSource={usertodos}
          columns={column}
          >

          </Table>
        </div>
      </Modal>
    </div>
  )
}

export default UserTodos