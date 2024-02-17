import React, {StrictMode} from "react";
import { AuthContext } from "./context/AuthContext.ts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/pages/Profile.js";
import { useState } from "react";
import Home from "./components/Dashboard.js";
import Events from "./components/EventDetails.js";
import Tasks from "./components/CreateAnewTask.js";
import Logout from "./components/pages/Profile.js";
import LoginForm from "./components/pages/loginform.js";
import EventCreate from "./components/eventcreate.js";
import EventList from "./components/eventlist.js";
import EventDetail from "./components/eventdetail.js";
import EventEdit from "./components/editevent.js";

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="app">
      <AuthContext.Provider value={{ user, setUser }}>
        <React.StrictMode>
        <BrowserRouter>
          <Routes>
              <Route exact path="/login" element={<LoginForm/>} />
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/profile" element={<Profile/>} />
              <Route exact path="/event" element={<EventList/>} />
              <Route exact path="/tasks" element={<Tasks/>} />
              <Route exact path="/event/create" element={<EventCreate/>} />
              <Route path="/events/:id" element={<EventDetail/>} />
              <Route path="/events/edit/:id" element={<EventEdit/>} />
            </Routes>
        </BrowserRouter>
        </React.StrictMode>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
