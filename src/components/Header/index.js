import React from 'react'
import {Row, Col} from "antd";
import Images from '../../images';

const Header = () => {
  return (
    <Row style={{height: "84px", padding: "20px 44px", backgroundColor: "#101010", display: "flex", justifyContent: "space-between"}}>
        <Col span={12}>
            <img src={Images.Logo} alt="Edvora"/>
        </Col>
        <Col span={12}>
                
        </Col>
    </Row>  
  )
}

export default Header