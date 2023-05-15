import { DeleteOutlined } from '@ant-design/icons'
import { Input, Table } from 'antd'
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
         title: 'username',
         dataIndex: 'username',
         key: '3',

      },
      {
         title: 'password',
         dataIndex: 'password',
         key: '4',
         render: (password: string) => {
            return (
               <Input.Password style={{ width: '50%' }} defaultValue={password} />
            )
         }
      },
      {
         title: 'action',
         key: '4',
         render: (record: any) => {
            return (
               <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <ViewUser record={record}/>
                  <EditUser record={record} />
                  <DeleteOutlined onClick={() => console.log("record:", record)}/>
               </div>
            )
         }
      }
   ]

   return (
      <div>
         <h2 style={{ textAlign: "center" }}>user management table</h2>
         <div style={{ width: "80%", border: "1px solid #cdc9c9", margin: "20px auto" }}>
            <div style={{ margin: "10px 10px" }}>
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