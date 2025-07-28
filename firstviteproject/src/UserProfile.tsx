import React, { useState, useEffect, useRef, useReducer } from "react";
import { ThemeContext } from "./ThemeContext";

interface State {
  name: string;
  editied: boolean;
}

type Action = { type: "SET_NAME"; payload: string } | { type: "save" };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload, editied: true };
    case "save":
      return { ...state, editied: false };
    default:
      return state;
  }
};

const useProfile = () => {
  const [user, setUser] = useState<{ name: string } | null>(null);
  const [onlineTime, setOnline] = useState(0);
  const nameInputRef = useRef<HTMLInputElement>(null);

  const [state, dispatch] = useReducer(reducer, { name: "", edited: false });

  const theme = React.useContext(ThemeContext);

  useEffect(() => {
    setTimeout(() => {
      setUser({ name: "Sharon Anyona" });
      dispatch({ type: "SET_NAME", payload: "sharon Anyona" });
      nameInputRef.current?.focus();
    }, 1000);
  }, []);
  
  // Timer to show how long user has been online
  useEffect(() => {
    const timer = setInterval(() => {
      setOnlineTime((time) => time + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handSave = (e: React.ChangeEvent<HTMLInputElement>) => {
    display({ type: "SET_NAME", payload: e.target.value });
  };

  const handleSave = () => {
    dispatch({ type: "SAVE" });
  };
  if (!user) return <p>Loading user data...</p>;
  return (
    <div
      style={{
        background: theme === "dark" ? "#222" : "f9f9f9",
        color: theme === "dark" ? "#fff" : "000",
        padding: "20px",
        borderRadius: "10px",
        maxWidth: "500px",
        margin: "20px auto",
        fontFamily: "Arial",
      }}
    >
      <h2>User profile</h2>
      <p>
        <strong>Online for:</strong>
        {onlineTime}seconds
      </p>

      <input
        ref={nameInputRef}
        type="text"
        value={state.name}
        style={{ padding: "10px", fontsize: "16px", width: "100%" }}
      ></input>
      <button
        onClick={handleSave}
        disabled={!state.edited}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          backgroundColor: "2ecc71",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        save changes
      </button>
      {state.editied && (
        <p style={{ color: "orange" }}>You have unsaved changes</p>
      )}
    </div>
  );
};
export default UserProfile;
