import { AuthContext } from "./context/AuthContext.ts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/pages/Profile.js";
import { useState } from "react";
import Home from "./components/Dashboard.js";
import Layout from "./components/Auth.js";
import Events from "./components/EventDetails.js";
import Tasks from "./components/CreateAnewTask.js";
import Logout from "./components/pages/Profile.js";

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="app">
      <AuthContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/profile" element={<Profile/>} />
              <Route exact path="/event" element={<Events/>} />
              <Route exact path="/tasks" element={<Tasks/>} />
              <Route exact path="/logout" element={<Logout/>} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
