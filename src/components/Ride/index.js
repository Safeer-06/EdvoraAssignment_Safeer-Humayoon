import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import { MapSample } from "../../images";

const RideContainer = styled(Row)`
  min-height: 200px;
  border-radius: 10px;
  background-color: #171717;
  padding: 25px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .rideLabel {
    color: white;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
  }

  .tag {
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0a0a0a;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #FFFFFF;
    padding: 4px 10px;
  }
`;
const Ride = () => {
  return (
    <RideContainer gutter={[44, 0]}>
      <Col span={4}>
        <img src={MapSample} alt="map" />
      </Col>
      <Col flex="1 1 auto">
        <Row gutter={[0, 8]}>
          <Col span={24} className="rideLabel">
            Ride Id : 002
          </Col>
          <Col span={24} className="rideLabel">
            Origin Station : 20
          </Col>
          <Col span={24} className="rideLabel">
            station_path : [20, 39, 40, 42, 54, 63, 72, 88, 98]
          </Col>
          <Col span={24} className="rideLabel">
            Date : 15th Feb 2022 16:33
          </Col>
          <Col span={24} className="rideLabel">
            Distance : 0
          </Col>
        </Row>
      </Col>
      <Col style={{alignSelf: "flex-start"}}><span className="tag">City Name</span></Col>
      <Col style={{alignSelf: "flex-start"}}><span className="tag">State Name</span></Col>
    </RideContainer>
  );
};

export default Ride;
