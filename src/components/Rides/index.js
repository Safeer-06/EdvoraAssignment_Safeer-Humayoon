import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import { FilterIcon } from "../../images";

const RideContainer = styled(Row)`
  min-height: 100vh;
  background-color: #292929;
  padding: 58px 44px;

  .tabs {
    display: flex;
    justify-content: space-between;
    .tabItem {
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
      color: #ffffff;
      span {
        border-bottom: 2px solid #ffffff;
        padding-bottom: 6px;
      }
    }
  }
  .filter {
    display: flex;
    align-items: center;
    span {
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: #f2f2f2;
      margin-left: 8px;
    }
  }
`;

const Rides = () => {
  return (
    <RideContainer gutter={[0, 24]}>
      <Col span={24}>
        <Row className="tabs">
          <Col>
            <Row gutter={[44, 0]}>
              <Col className="tabItem">
                <span>Nearest rides</span>
              </Col>
              <Col className="tabItem">
                <span>Upcoming rides (4)</span>
              </Col>
              <Col className="tabItem">
                <span>Past rides (2)</span>
              </Col>
            </Row>
          </Col>
          <Col>
            <div className="filter">
              <img src={FilterIcon} alt="filtericon" />
              <span>Filters</span>
            </div>
          </Col>
        </Row>
      </Col>
      <Col span={24}></Col>
    </RideContainer>
  );
};

export default Rides;
