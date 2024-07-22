import { formatCountdown } from "antd/es/statistic/utils"
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Button, Modal } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import {useNavigate} from "react-router-dom";
export default ()=>{
    const {state} = useLocation();
    console.log(state)

    const navigate=useNavigate();
    const { Meta } = Card;
const App = () => (
  
    <Meta
      avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
      title="Card title"
      description="This is the description"
    />
) 
    return (
        <>
        <center>
        <Card
    style={{
      width: 400,
      marginTop:20
    }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    
  >

        <p>Id:{state.id}</p>
        <p>Name:{state.name}</p>
        <p>Department:{state.department}</p>
        <p>Age:{state.age}</p>
        <p>Salary:{state.salary}</p>
        {/*<button onClick={()=>navigate('/getAllEmp')}>Go To Home</button>*/}
        <button class="btn btn-primary me-md-2" type="button" onClick={()=>navigate('/getAllEmp')}>Go To Home</button>
        
        </Card>
        </center>
        </>
      );
}
