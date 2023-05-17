import { DeleteOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Form, Input, Table } from 'antd'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { setUsers } from '../redux/user/userSlice'
import AddUser from './add /AddUser'
import EditUser from './edit/EditUser'
import ViewUser from './View/ViewUser'

const Home = () => {
   const dispatch = useDispatch()
   const users = useSelector((state: RootState) => state.users.list)
   useEffect(() => {
      axios.get("https://dummyjson.com/users")
         .then(res => {
            console.log(res.data.users)
            dispatch(setUsers(res.data.users))
         }).catch(error => {
            console.log(error)
         })
   }, [])

   const column = [
      {
         title: 'id',
         dataIndex: 'id',
         key: '1'
      },
      {
         title: 'email',
         dataIndex: 'email',
         key: '2',

      },
      {
         title: 'firstName',
         dataIndex: 'firstName',
         key: '3',

      },
      {
         title: 'lastName',
         dataIndex: 'lastName',
         key: '4',

      },
      {
         title: 'username',
         dataIndex: 'username',
         key: '5',

      },
      {
         title: 'password',
         dataIndex: 'password',
         key: '6',
         render: (password: string) => {
            return (
               <Input.Password defaultValue={password} />
            )
         }
      },
      {
         title: 'action',
         key: '7',
         render: (record: any) => {
            return (
               <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <ViewUser record={record} />
                  <EditUser record={record} />
                  <DeleteOutlined onClick={() => console.log("record:", record)} />
               </div>
            )
         }
      }
   ]

   const Search = (value: any) => {
      console.log("search value", value.search)
      axios.get(`https://dummyjson.com/users/search?q=${value.search}`)
         .then(res => {
            console.log(res.data.users)
            dispatch(setUsers(res.data.users))
         }).catch(error => {
            console.log(error)
         })
   }

   return (
      <div>
         <h2 style={{ textAlign: "center" }}>user management table</h2>
         <div style={{ width: "80%", border: "1px solid #cdc9c9", margin: "20px auto" }}>
            <div style={{ margin: "10px 10px", display: "flex", justifyContent: "space-between" }}>
               <Form onFinish={Search}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                     <Form.Item name="search">
                        <Input style={{ borderRadius: "10px" }} type='search' placeholder='please type text to search' />
                     </Form.Item>
                     <Button htmlType='submit'><SearchOutlined /></Button>
                  </div>
               </Form>
               <AddUser />
            </div>
            <Table
               dataSource={users}
               columns={column}
            >
            </Table>
         </div>
      </div>
   )
}

export default Home