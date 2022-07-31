import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Shared/Header";
import Footer from "./components/Shared/Footer";
import Home from "./pages/Home";
import NetworkHome from "./pages/NetworkHome";
import NetworkConnexions from "./pages/Network/NetworkConnexions";
import NetworkSubscribes from "./pages/Network/NetworkSubscribes";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Error from "./pages/Error";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/network" element={<NetworkHome />} />
          <Route path="/network/connexions" element={<NetworkConnexions />} />
          <Route path="/network/subscribes" element={<NetworkSubscribes />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
