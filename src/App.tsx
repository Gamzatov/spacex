import React from "react";
import { json } from "stream/consumers";
import { IResponse } from "./types";
import { default as axios } from "axios";
import StartItem from './components/StartItem/StartItem'
import { Link, Routes, Route } from "react-router-dom";
import Popup from "./components/Popup/Popup";
import Home from './pages/Home/Home'
import "./App.css";

function App() {
  const [response, setResponse] = React.useState<IResponse[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [active, setActive] = React.useState(false);



  const togglePop = () => {
    setActive(!active);
  }
  async function fetchData() {
    try {
      const res = await axios.get<IResponse[]>(
        "https://api.spacexdata.com/v5/launches/"
      );
      setResponse(res.data);
      setIsLoading(false)
      console.log(res);
    } catch (e) {
      alert(e);
    }
  }
  // console.log('data', response)
  React.useEffect(() => {
    fetchData();

  }, []);
 
  
  return <div className="App">

  
    <Home isLoading={isLoading} response={response} active={active} togglePop={togglePop} />
    {/* <Route path="/" element={<Home isLoading={isLoading} response={response} />} /> */}
    <div className="single_img">
      <Routes>
        <Route path="/launches/:id" element={<Popup response={response} setActive={setActive} />} />
      </Routes>
    </div>



  </div>;
}

export default App;
