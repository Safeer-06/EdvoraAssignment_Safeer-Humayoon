import React from "react";
import { Row, Col } from "antd";
import Images from "../../images";

const Header = () => {
  return (
    <Row
      style={{
        height: "84px",
        padding: "20px 44px",
        backgroundColor: "#101010",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Col span={18} style={{ display: "flex", alignItems: "center" }}>
        <img src={Images.Logo} alt="Edvora" />
      </Col>
      <Col span={6} style={{ display: "flex", justifyContent: "flex-end" }}>
        <Row gutter={[25, 0]}>
          <Col
            span={18}
            style={{ fontWeight: "700", fontSize: "20px", lineHeight: "25px", color: "#FFFFFF", display: "flex", alignItems: "center" }}
          >
            Dhruv Singh
          </Col>
          <Col span={6}>
            <img src={Images.AvatarSample} alt="avatar" />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Header;
