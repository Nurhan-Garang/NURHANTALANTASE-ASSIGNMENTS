import React from "react";
import ShoppingCart from "./ShoppingCart";
import UserProfile from "./UserProfile";
import {ThemeContext}from "./ThemeContext"
const App = () => {
  return <div>
    
    <ThemeContext.Provider value="light">
      <UserProfile />
      <ShoppingCart />
    </ThemeContext.Provider>
    </div>;
};

export default App;
