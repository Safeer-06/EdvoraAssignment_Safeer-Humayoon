import React from "react";
import { Row, Col } from "antd";
import { Logo, AvatarSample } from "../../images";
import styled from "styled-components";

const HeaderContainer = styled(Row)`
  height: 84px;
  padding: 20px 44px;
  background-color: #101010;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 420px) {
    height: 120px;
  }
  
  .logoContainer {
    display: flex;
    align-items: center;
  }
  .userContainer {
    display: flex;
    justify-content: flex-end;
    .userName {
      font-weight: 700;
      font-size: 20px;
      line-height: 25px;
      color: #ffffff;
      display: flex;
      align-items: center;
    }
    img {
      height: 44px;
      width: 44px;
      border-radius: 100%;
    }
  }
`;

const Header = ({ name, url }) => {
  return (
    <HeaderContainer>
      <Col className="logoContainer">
        <img src={Logo} alt="Edvora" />
      </Col>
      <Col className="userContainer">
        <Row gutter={[25, 0]}>
          <Col className="userName">{name}</Col>
          <Col>
            <img src={url} alt="avatar" />
          </Col>
        </Row>
      </Col>
    </HeaderContainer>
  );
};

export default Header;
