import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import { FilterIcon } from "../../images";
import { Ride } from "../";

const RideContainer = styled(Row)`
  min-height: 100vh;
  background-color: #292929;
  padding: 58px 44px;
  align-content: flex-start;

  .tabs {
    display: flex;
    justify-content: space-between;
    .tabItem {
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
      color: #ffffff;
      cursor: pointer;
      span {
        &.isSelected {
          border-bottom: 2px solid #ffffff;
        }
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

const Rides = (props) => {
  const { stationCode } = props;
  const [rides, setRides] = useState([]);
  const [currentTab, setCurrentTab] = useState("nearest");
  const findNearestStation = (stationCode, stationPaths) => {
    return stationPaths.reduce((prev, current) =>
      Math.abs(current - stationCode) < Math.abs(prev - stationCode)
        ? current
        : prev
    );
  };
  useEffect(() => {
    if (!stationCode) return;
    fetch("https://assessment.api.vweb.app/rides").then((data) =>
      data.json().then((rides) => {
        const newRides = rides.map((ride) => {
          return {
            ...ride,
            nearestStation: findNearestStation(stationCode, ride?.station_path),
            distance: Math.abs(
              stationCode - findNearestStation(stationCode, ride?.station_path)
            ),
          };
        });
        setRides(newRides);
      })
    );
  }, [stationCode]);

  const nearestRides = rides.sort((a, b) => a.distance - b.distance);
  const upcomingRides = rides.filter((ride) => {
    return new Date(ride?.date).getTime() > new Date().getTime();
  });
  const previousRides = rides.filter((ride) => {
    return new Date(ride?.date).getTime() < new Date().getTime();
  });

  const ridesToShow =
    currentTab === "nearest"
      ? nearestRides
      : currentTab === "upcoming"
      ? upcomingRides
      : previousRides;
  console.log("Rides: ", previousRides);
  return (
    <RideContainer gutter={[0, 24]}>
      <Col span={24}>
        <Row className="tabs">
          <Col>
            <Row gutter={[44, 0]}>
              <Col
                className="tabItem"
                onClick={() => {
                  setCurrentTab("nearest");
                }}
              >
                <span className={currentTab === "nearest" && "isSelected"}>
                  Nearest rides ({nearestRides.length})
                </span>
              </Col>
              <Col
                className="tabItem"
                onClick={() => {
                  setCurrentTab("upcoming");
                }}
              >
                <span className={currentTab === "upcoming" && "isSelected"}>
                  Upcoming rides ({upcomingRides.length})
                </span>
              </Col>
              <Col
                className="tabItem"
                onClick={() => {
                  setCurrentTab("past");
                }}
              >
                <span className={currentTab === "past" && "isSelected"}>
                  Past rides ({previousRides.length})
                </span>
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
      <Col span={24}>
        <Row gutter={[0, 13]}>
          {ridesToShow.map((ride) => {
            return (
              <Col span={24}>
                <Ride {...ride} />
              </Col>
            );
          })}
        </Row>
      </Col>
    </RideContainer>
  );
};

export default Rides;
