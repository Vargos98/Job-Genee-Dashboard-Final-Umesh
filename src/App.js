import React from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/ProfileOverview";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    

      <BrowserRouter>
        <Navbar />
        <Profile/>
      </BrowserRouter>
    
  );
}

export default App;
