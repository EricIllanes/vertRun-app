import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/homePage";
import "./App.css";
import MonthView from "./components/monthView";
import DetailsMonth from "./components/detailsByMonth";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/month" element={<MonthView />} />
          <Route path="/month/:number" element={<DetailsMonth />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
