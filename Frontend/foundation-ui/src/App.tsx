import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SentEmails from "./pages/SentEmails";
import { Sidebar } from "./components/Sidebar";
import { Box } from "@mui/material";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box
          component="main"
          className="app-body"
          sx={{
            backgroundColor: 'linear-gradient(0deg, rgba(241,245,249,0) 0%, rgba(0,212,255,1) 100%)',
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - 250px)` },
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/emails" element={<SentEmails />} />
          </Routes>
        </Box>
        </Box>
      </BrowserRouter>
    </>
  );
};

export default App;
