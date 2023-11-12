import React from "react";
import { Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import AddIcon from '@mui/icons-material/Add';

const NavBarResident = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="static" style={{ backgroundColor: '#2a7e19' }}> {/* Light green color */}
        <Toolbar style={{ justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <Link to="/myideas" style={{ textDecoration: "none", color: "white" }}>
              <IconButton color="inherit">My ideas</IconButton>
            </Link>
            <Link to="/ideas-page-resident" style={{ textDecoration: "none", color: "white" }}>
              <IconButton color="inherit">Browse ideas</IconButton>
            </Link>
          </div>

          <Typography variant="h6" component="div" style={{ color: "white", flexGrow: 1, textAlign: "center", fontSize: '1.8rem' }}>
            CivicSeed
          </Typography>

          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <Link to="/myVotes" style={{ textDecoration: "none", color: "white" }}>
              <IconButton color="inherit">See my Votes</IconButton>
            </Link>
            <Tooltip title="Create new idea">
              <Link to="/create" style={{ color: "white" }}>
                <IconButton color="inherit">
                  <AddIcon />
                </IconButton>
              </Link>
            </Tooltip>
            <span role="img" aria-label="Search Icon" style={{ cursor: "pointer" }}>
              🔍
            </span>
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

export default NavBarResident;
