import { GroupOutlined } from '@ant-design/icons'
import { Badge, Button, message, Modal, Table, Typography } from 'antd'
import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserPosts } from '../../redux/posts/postSlice'
import { RootState } from '../../redux/store'

const UserPost = ({id}:any) => {
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()
    const userposts = useSelector((state: RootState) => state.posts.userposts)

  const OpenPosts = () =>{
    axios.get(`https://dummyjson.com/users/${id}/posts`)
      .then(res => {
        setOpen(true)
        console.log(res.data.posts)
        dispatch(setUserPosts(res.data.posts))
        message.success("posts fetched successfully")
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
      title: "title",
      dataIndex: "title",
      key: "2"
    },
    {
      title: "body",
      dataIndex: "body",
      key: "3",
      render: (record: any) =>{
        return(
            <>
            <Typography.Paragraph ellipsis={{rows:2}}>{record}</Typography.Paragraph>
            </>
        )
      }
    },
    {
      title: "reactions",
      dataIndex: "reactions",
      key: "4",
      render: (reaction: number) =>{
        return(
            <>
                <Badge count={reaction}></Badge>
            </>
        )
      }
    },
  ]

  return (
    <div>
        <Button type='primary' onClick={OpenPosts}><GroupOutlined />user posts</Button>
        <Modal open={open} onOk={() => setOpen(false)} onCancel={() => setOpen(false)}>
        <div style={{ margin: "20px" }}>
          <Table
          dataSource={userposts}
          columns={column}></Table>
        </div>
      </Modal>
    </div>
  )
}

export default UserPost