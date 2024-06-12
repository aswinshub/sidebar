import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import React from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

const drawerWidth = 240;

const Xsidebar = () => {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <AppBar
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
            background: `black  `,
            boxShadow: `none`,
          }}
        >
          <Toolbar> 
            <Typography variant="h6" noWrap component="div">
              Permanent drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          
          <Divider />
          

          <List sx={{  padding:'20px'}}>
            {[
              "Approval",
              "Events",
              "Sub-admin",
              "Finance",
              "Staffs",
              "Tier",
              "Policy",
            ].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Toolbar />
          <h1>Home Page</h1>
        </Box>
      </Box>
    </div>
  );
};

export default Xsidebar;
