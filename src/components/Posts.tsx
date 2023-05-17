import { HeartFilled, SearchOutlined } from '@ant-design/icons'
import { Button, Form, Input, Typography } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPosts } from '../redux/posts/postSlice'
import { RootState } from '../redux/store'
import Comments from './like, share , comments/Comments'
import Share from './like, share , comments/Share'
import "./posts.css"
import AddPost from './add /AddPost'

const Posts = () => {
    const dispatch = useDispatch()
    const posts = useSelector((state: RootState) => state.posts.posts)
    const [active, setActive] = useState(false)

    useEffect(() => {
        axios.get("https://dummyjson.com/posts")
            .then(res => {
                console.log(res.data.posts)
                dispatch(setPosts(res.data.posts))
            }).catch(error => {
                console.log(error)
            })
    }, [])

    const Like = () => {
        setActive(true)
    }
    const Dislike = () => {
        setActive(false)
    }
    const Clicked = () => {
        if (!active) {
            Like()
        } else {
            Dislike()
        }
    }
    const Search = (value: any) => {
        console.log("search value", value.search)
        axios.get(`https://dummyjson.com/posts/search?q=${value.search}`)
            .then(res => {
                console.log(res.data.posts)
                dispatch(setPosts(res.data.posts))
            }).catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <h2 className='h2'>posts management </h2>
            <div className='posts'>
                <div style={{ margin: "10px 10px", display: "flex", justifyContent: "space-between" }}>
                <Form onFinish={Search}>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                        <Form.Item name="search">
                        <Input style={{ borderRadius: "10px" }} type='search' placeholder='please type text to search'/>
                        </Form.Item>
                        <Button htmlType='submit'><SearchOutlined/></Button>
                        </div>
                    </Form>
                    <AddPost />
                </div>
                <div className='post-layout'>
                    {posts.map((item) => {
                        return (
                            <div className="card">
                                <div className="card-layout">
                                    <div className="image">
                                        <Typography.Title level={3} style={{ color: 'white' }}>{item.title}</Typography.Title>
                                    </div>
                                    <div className="actions">
                                        <div>
                                            <HeartFilled onClick={Clicked} style={{ color: active ? "red" : 'gray', fontSize: "25px" }} />
                                        </div>
                                        <div>
                                            <Share />
                                        </div>
                                        <div>
                                            <Comments />
                                        </div>
                                    </div>
                                    <div className='body'>
                                        <Typography.Paragraph style={{ padding: " 0 10px" }} ellipsis={{ rows: 2, expandable: true }}>{item.body}</Typography.Paragraph>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Posts