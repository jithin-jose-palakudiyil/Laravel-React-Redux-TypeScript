import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';


// @ts-ignore
import AppBar from '../appbar/AppBar'
import SideBar from '../sidebar/SideBar'
const LayoutView = ({ children }) => {



  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const drawerWidth = 240;
  const mdTheme = createTheme();


  return (
    <div>
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          {/*  Top App Bar*/}
          <AppBar  drawerWidth={drawerWidth} toggleDrawer={toggleDrawer} open={open}   />
          {/*  //Top App Bar*/}

          {/*  SideBarMenu */}
          <SideBar drawerWidth={drawerWidth} toggleDrawer={toggleDrawer}  open={open}/>
          {/*  //SideBarMenu */}



          {/*  Content */}
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
            }}
          >
            
           
            {  children } 
           
           
          </Box>
          {/*  //Content */} 
        </Box>
      </ThemeProvider>
    </div>
  )
}

export default LayoutView