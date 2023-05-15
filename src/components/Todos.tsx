import { DeleteOutlined } from '@ant-design/icons'
import { Table, Tag } from 'antd'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { setTodos } from '../redux/Todos/todoSlice'
import AddTodo from './add /AddTodo'

const Todos = () => {
    const dispatch = useDispatch()
    const todos = useSelector((state:  RootState) => state.todos.todos)
    useEffect(() =>{
        axios.get("https://dummyjson.com/todos")
        .then(res => {
            console.log(res.data.todos)
            dispatch(setTodos(res.data.todos))
        }).catch(error =>{
            console.log(error)
        })
    },[])

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
        },
        {
            title: "actions",
            render: (record:any) =>{
                return(
                    <>
                        <DeleteOutlined onClick={() =>{console.log(record)}} style={{color: "red"}}/>
                    </>
                )
            }
        }

    ]
    return (
        <div>
        <h2 style={{textAlign: "center"}} >Todos management table</h2>
        <div style={{ width: "80%", border: "1px solid #cdc9c9", margin: "20px auto" }}>
        <div style={{margin: "10px 10px" }}>
                    <AddTodo />
                </div>
            <Table
                dataSource={todos}
                columns={column}
            >
            </Table>
        </div>
    </div>
  )
}

export default Todos