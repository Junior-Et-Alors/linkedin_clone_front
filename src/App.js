import { createContext, useEffect, useState } from "react";
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
import PostForm from "./components/Shared/Modals/formTemplates/PostForm";
import testUser from "./assets/placeholders/users/testUser";
export const ModalContext = createContext();
export const UserContext = createContext();

const App = () => {
  const [modalConfig, setModalConfig] = useState({ title: "Post", template: PostForm, modify: false });
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(testUser);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ModalContext.Provider value={{ modalConfig, setModalConfig, showModal, setShowModal }}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/network" element={<NetworkHome />} />
            <Route path="/network/connexions" element={<NetworkConnexions />} />
            <Route path="/network/subscribes" element={<NetworkSubscribes />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/*" element={<Error />} />
          </Routes>
          <Footer />
        </Router>
      </ModalContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
