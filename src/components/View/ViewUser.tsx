import { CrownFilled, EyeOutlined, MailOutlined, PhoneFilled, UserOutlined } from '@ant-design/icons'
import { Image, Modal, Typography } from 'antd'
import React, { useState } from 'react'
import UserCart from '../userdata/UserCart'
import UserPost from '../userdata/UserPost'
import UserTodos from '../userdata/UserTodos'
import "./viewuser.css"
const ViewUser = ({ record }: any) => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <EyeOutlined onClick={() => setOpen(true)} />
            <Modal
                width={900}
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
            >
                <div className='main-modal'>
                    <div className='sub-div'>
                        <div className='left'>
                            <Image src={record.image} />
                        </div>
                        <div className='right'>
                            <div className='name'>
                                <Typography.Title level={2}><UserOutlined /> {record.firstName} {record.maidenName} {record.lastName}</Typography.Title>
                                <Typography.Title type='secondary' level={3}><UserOutlined /> {record.username}</Typography.Title>
                                <Typography.Title type='secondary' level={3}><MailOutlined /> {record.email}</Typography.Title>
                            </div>
                            <div className='other'>
                                <div style={{ fontSize: "20px" }}>
                                    <CrownFilled /> {record.birthDate}
                                </div>
                                <div style={{ fontSize: "20px" }}>
                                    <PhoneFilled /> {record.phone}
                                </div>
                            </div>
                            <div style={{ margin: "10px 0  20px 0", fontSize: "20px" }}>
                                {/* <GlobalOutlined/> {user.address.address}, {user.address.city},({user.address.postalCode}) */}
                            </div>
                            <div className='userlinks'>
                                <div>
                                    <UserCart id= {record.id}/>
                                </div>
                                <div>
                                    <UserPost id= {record.id}/>
                                </div>  
                                <div>
                                    <UserTodos id= {record.id}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default ViewUser