import { AlipayOutlined, EyeOutlined, InfoOutlined, MobileOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Badge, Button, Image, Modal, Rate, Typography } from 'antd'
import { useState } from 'react'
import OrderBtn from '../OrderBtn'
import "./viewuser.css"
const ViewProduct = ({ record }: any) => {
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
                <div className='main-modal' style={{margin: "15px"}}>
                    <Badge.Ribbon text={record.discountPercentage}>
                        <div className='sub-div'>
                            <div className='left'>
                                <Image src={record.thumbnail} />
                            </div>
                            <div className='right'>
                                <div className='name'>
                                    <Typography.Title level={2}><MobileOutlined /> {record.title} </Typography.Title>
                                    <Typography.Title type='secondary' level={3}><MobileOutlined /> {record.brand}</Typography.Title>
                                    <Typography.Title type='secondary' level={3}><InfoOutlined /> {record.description}</Typography.Title>
                                </div>
                                <div className='other'>
                                    <div style={{ fontSize: "20px" }}>
                                        <Rate value={record.rating}></Rate>
                                    </div>
                                    <div style={{ fontSize: "20px" }}>
                                        <Typography.Text disabled delete style={{ fontSize: "20px", marginRight: "15px"}}>{record.discountPercentage} <AlipayOutlined /> </Typography.Text>
                                       {record.price} <AlipayOutlined /> 
                                    </div>
                                </div>
                                <div style={{ margin: "10px 0  20px 0", fontSize: "20px" }}>
                                    {/* <GlobalOutlined/> {user.address.address}, {user.address.city},({user.address.postalCode}) */}
                                </div>
                                <div className='userlinks'>
                                    <div>
                                    <OrderBtn item={record}/>
                                    </div>
                                    <div>
                                        
                                        <Button type='primary'><ShoppingCartOutlined/> Add To Cart</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Badge.Ribbon>
                </div>
            </Modal>
        </div>
    )
}

export default ViewProduct