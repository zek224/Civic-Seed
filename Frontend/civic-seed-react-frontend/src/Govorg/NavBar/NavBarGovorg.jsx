import React from "react";
import { Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const NavBarGovorg = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="static" style={{ backgroundColor: '#2a7e19' }}>
        <Toolbar style={{ justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <Link to="/reportedideas" style={{ textDecoration: "none", color: "white" }}>
                <Button color="inherit">Funded ideas</Button>
            </Link>
            <Link to="/ideas-page-official" style={{ textDecoration: "none", color: "white" }}>
                <Button color="inherit">Browse ideas</Button>
            </Link>
          </div>

          <Typography variant="h6" component="div" style={{ color: "white", fontWeight: 'bold', marginLeft: '70px' }}>
            CivicSeed
          </Typography>

          <div style={{ flex: '0 0 30px' }} /> {/* Invisible spacer */}

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
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBarGovorg;
