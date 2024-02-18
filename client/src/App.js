import React, {StrictMode, useEffect} from "react";
import { AuthContext } from "./context/AuthContext.js";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Profile from "./components/pages/Profile.js";
import { useState } from "react";
import Home from "./components/Dashboard.js";
import Events from "./components/EventDetails.js";
import Tasks from "./components/CreateAnewTask.js";
import LoginForm from "./components/pages/loginform.js";
import EventCreate from "./components/eventcreate.js";
import EventList from "./components/eventlist.js";
import EventDetail from "./components/eventdetail.js";
import EventEdit from "./components/editevent.js";
import RegisterForm from "./components/pages/signupform.js";


function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="app">
      <AuthContext.Provider value={{ user, setUser }}>
        <React.StrictMode>
        <BrowserRouter>
          <Routes>
              <Route path="/login" element={!user ? <LoginForm /> : <Navigate to="/home" />} />
              <Route path="/home" element={user ? <Home /> : <Navigate to="/login" />} />
              <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
              <Route path="/event" element={user ? <EventList /> : <Navigate to="/login" />} />
              <Route path="/tasks" element={user ? <Tasks /> : <Navigate to="/login" />} />
              <Route path="/event/create" element={user ? <EventCreate /> : <Navigate to="/login" />} />
              <Route path="/events/:id" element={user ? <EventDetail /> : <Navigate to="/login" />} />
              <Route path="/events/edit/:id" element={user ? <EventEdit /> : <Navigate to="/login" />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </BrowserRouter>
        </React.StrictMode>
      </AuthContext.Provider>
    </div>
  );
}
export default App;
