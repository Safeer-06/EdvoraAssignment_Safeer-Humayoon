import Images from "./images";
import { Header, Rides } from "./components";
import "./App.css";
import React, {useEffect, useState} from "react";
function App() {
  const [user, setUser] = useState();
  useEffect(()=>{
    fetch("https://assessment.api.vweb.app/user").then((data)=> data.json().then(setUser));
  }, []);
  console.log("user: ", user);
  return (
    <>
      <Header {...user} />
      <Rides stationCode={user?.station_code} />
    </>
  );
}

export default App;
