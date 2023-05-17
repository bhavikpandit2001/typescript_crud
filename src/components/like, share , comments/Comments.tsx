import { CommentOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Modal, Typography } from 'antd'
import axios from 'axios'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setComments } from '../../redux/posts/commentSlice'
import { RootState } from '../../redux/store'

const Comments = () => {
    const dispatch = useDispatch()
    const comments = useSelector((state: RootState) => state.comments.comments)
    const [open, setOpen] = useState(false)
    const Comments = () =>{
        setOpen(true)
        axios.get("https://dummyjson.com/comments")
        .then(res =>{
            console.log(res.data.comments)
            dispatch(setComments(res.data.comments))
        })
    }
    return (
        <div>
            <CommentOutlined onClick={Comments} style={{fontSize: "25px" , color: "orange"}} />
            <Modal centered open={open} onOk={() => { setOpen(false) }} onCancel={() => { setOpen(false) }} title={"comments"}>
                <div style={{height: "200px", overflowY: "scroll", margin: "10px"}}>
                    {comments.map(comment =>{
                        return(
                            <div style={{display: "flex", alignItems:"center", margin: "5px 0", backgroundColor: "whitesmoke"}}>
                                <Avatar style={{marginRight: "5px"}} icon={<UserOutlined/>}></Avatar>
                                <Typography.Paragraph style={{marginBottom: "0"}}> {comment.body}</Typography.Paragraph>
                            </div>
                        )
                    })}
                </div>
            </Modal>
        </div>
    )
}

export default Comments