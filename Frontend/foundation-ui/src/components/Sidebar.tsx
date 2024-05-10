import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import { NavLink, useLocation } from "react-router-dom";
import temelio from "../assets/temelio.svg";

export function Sidebar() {
  const { pathname } = useLocation();

  const DrawerList = (
    <Box sx={{ width: 250 }}>
      <img
        style={{ color: "white", padding: 27, filter: "brightness(2000%)" }}
        src={temelio}
        alt="Grant Management Logo"
      />
      <List sx={{ color: "white" }}>
        <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
          <ListItem
            key="dashboard"
            className={pathname === "/" ? "active" : ""}
          >
            <ListItemButton sx={{ paddingBottom: 0, paddingTop: 0 }}>
              <ListItemIcon sx={{ minWidth: 35 }}>
                <DashboardIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
        </NavLink>
        <NavLink
          to="/emails "
          style={{ textDecoration: "none", color: "white" }}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <ListItem
            key="emails"
            className={pathname === "/emails" ? "active" : ""}
          >
            <ListItemButton sx={{ paddingBottom: 0, paddingTop: 0 }}>
              <ListItemIcon sx={{ minWidth: 35 }}>
                <MarkEmailReadIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Sent Mails" />
            </ListItemButton>
          </ListItem>
        </NavLink>
      </List>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: 250 }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 260,
            backgroundColor: "#2f85a5",
          },
        }}
        open
      >
        {DrawerList}
      </Drawer>
    </Box>
  );
}
