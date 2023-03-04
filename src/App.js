
import './App.css';
import {HomeContainer} from "./Components/Home/HomeContainer";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {TestContainer} from "./Components/Test/TestContainer";
import {ResultContainer} from "./Components/Result/ResultContainer";
import {StartContainer} from "./Components/Start/StartContainer";

function App() {
  return (
    <div className={"App"}>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Navigate to="/start"/>}/>
              <Route path="/start" element={<StartContainer/>}/>
              < Route path = "/test" element={<TestContainer/>}/>
              < Route path = "/result" element={<ResultContainer/>}/>
              < Route path = "/auth" element={<HomeContainer/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
