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
    height: 150px;
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
    color: #ffffff;
    padding: 4px 10px;
  }
`;
const Ride = ({
  city,
  date,
  destination_station_code,
  id,
  map_url,
  nearestStation,
  origin_station_code,
  state,
  station_path,
  distance
}) => {
  return (
    <RideContainer gutter={[44, 0]}>
      <Col span={4}>
        <img src={map_url} alt="map" />
      </Col>
      <Col flex="1 1 auto">
        <Row gutter={[0, 8]}>
          <Col span={24} className="rideLabel">
            Ride Id : {id}
          </Col>
          <Col span={24} className="rideLabel">
            Origin Station : {origin_station_code}
          </Col>
          <Col span={24} className="rideLabel">
            station_path : [{station_path.join(', ')}]
          </Col>
          <Col span={24} className="rideLabel">
            Date : {date}
          </Col>
          <Col span={24} className="rideLabel">
            Distance : {distance}
          </Col>
        </Row>
      </Col>
      <Col style={{ alignSelf: "flex-start" }}>
        <span className="tag">{city}</span>
      </Col>
      <Col style={{ alignSelf: "flex-start" }}>
        <span className="tag">{state}</span>
      </Col>
    </RideContainer>
  );
};

export default Ride;
