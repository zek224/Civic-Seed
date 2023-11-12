// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const NavBarResident = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <Link to="/ideas" style={{ textDecoration: "none", color: "white" }}>
                <Button color="inherit">Browse ideas</Button>
              </Link>
              <Link to="/create" style={{ textDecoration: "none", color: "white" }}>
                <Button color="inherit">Create an idea</Button>
              </Link>
              <Link to="/myideas" style={{ textDecoration: "none", color: "white" }}>
                <Button color="inherit">My ideas</Button>
              </Link>
            </div>
            <div style={{ textAlign: "center", flexGrow: 1 }}>
              <Typography variant="h6" component="div" style={{ color: "white" }}>
                CivicSeed
              </Typography>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ cursor: "pointer" }}>
                <span role="img" aria-label="Search Icon">
                  🔍
                </span>
              </div>
              <TextField
                id="outlined-search"
                label="Search"
                type="search"
                variant="outlined"
                size="small"
              />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBarResident;
