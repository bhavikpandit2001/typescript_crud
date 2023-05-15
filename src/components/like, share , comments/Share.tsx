import { FacebookFilled, InstagramFilled, LinkedinFilled, ShareAltOutlined, TwitterCircleFilled, WhatsAppOutlined, YoutubeFilled } from '@ant-design/icons'
import { Input, Modal } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./share.css"
const Share = () => {
    const [open, setOpen] = useState(false)
    const Share = () => {
        setOpen(true)
    }
    return (
        <div>
            <ShareAltOutlined onClick={Share} style={{fontSize: "25px", color: "success"}} />
            <Modal centered open={open} onOk={() => { setOpen(false) }} onCancel={() => { setOpen(false) }} title={"share"}>
                <div style={{ height: "130px", margin: "10px" }}>
                    <div>
                        <Input type='text' value="https://dummyjson.com/comments"/>
                    </div>
                    <div>
                        <h3>other apps</h3>
                    </div>
                    <div className='apps'>
                        <div>
                            <Link to="https://www.facebook.com/">
                                <FacebookFilled style={{ fontSize: "40px", borderRadius: "5px" }} />
                            </Link>
                        </div>
                        <div>
                            <Link to="https://www.instagram.com/">

                                <InstagramFilled style={{ fontSize: "40px", borderRadius: "5px", color: "red" }} />
                            </Link>
                        </div>
                        <div>
                            <Link to="https://twitter.com/i/flow/login">
                                <TwitterCircleFilled style={{ fontSize: "40px", borderRadius: "5px" }} />
                            </Link>
                        </div>
                        <div>
                            <Link to="https://www.youtube.com/">
                                <YoutubeFilled style={{ fontSize: "40px", borderRadius: "5px", color: "red" }} />
                            </Link>
                        </div>
                        <div>
                            <Link to="https://in.linkedin.com/?src=go-pa&trk=sem-ga_campid.14650114788_asid.151761418307_crid.657403558718_kw.linkedin%20login_d.c_tid.kwd-12704335873_n.g_mt.e_geo.9154067&mcid=6844056167778418689&cid=&gclid=EAIaIQobChMI3tqknKbt_gIVFBtyCh1yegToEAAYASAAEgJaX_D_BwE&gclsrc=aw.ds">
                                <LinkedinFilled style={{ fontSize: "40px", borderRadius: "5px" }} />
                            </Link>
                        </div>
                        <div>
                            <Link to="https://in.linkedin.com/?src=go-pa&trk=sem-ga_campid.14650114788_asid.151761418307_crid.657403558718_kw.linkedin%20login_d.c_tid.kwd-12704335873_n.g_mt.e_geo.9154067&mcid=6844056167778418689&cid=&gclid=EAIaIQobChMI3tqknKbt_gIVFBtyCh1yegToEAAYASAAEgJaX_D_BwE&gclsrc=aw.ds">
                                <WhatsAppOutlined style={{ fontSize: "40px", borderRadius: "5px", color:"green" }} />
                            </Link>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Share