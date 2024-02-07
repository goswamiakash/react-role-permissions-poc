import React from 'react'
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
 
const drawerWidth = '15%';
 
 
 
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


 
 
 
export default function Menu() {

    const navigate = useNavigate();
 
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
 
    const handleDrawerOpen = () => {
      setOpen(true);
    };
 
    const handleDrawerClose = () => {
      setOpen(false);
    };


    const handleTester =()=>{
        navigate('/test-engineer')
    
    }
    const handleOemTester =()=>{
        navigate('/oem-test-engineer')
    
    }
    const handleCxo =()=>{
        navigate('/cxo')
    
    }
 
  return (
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={true}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {/* {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />} */}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
        <ListItem disablePadding>
            <ListItemButton onClick={()=>{
                handleTester();
            }}> 
                <ListItemIcon style={{minWidth: '30px'}}>
                    {/* <DashboardOutlinedIcon style={{fontSize: '25px'}}/> */}
                </ListItemIcon>
                <ListItemText>
                    <Typography variant="body1" style={{ fontSize: '15px' }}>
                        Tester
                    </Typography>
                </ListItemText>
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton 
            onClick={()=>{
                handleOemTester();
            }}>
                <ListItemIcon style={{minWidth: '30px'}}>
                    {/* <DashboardOutlinedIcon style={{fontSize: '25px'}}/> */}
                </ListItemIcon>
                <ListItemText>
                    <Typography variant="body1" style={{ fontSize: '15px' }}>
                        OEM Tester
                    </Typography>
                </ListItemText>
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton onClick={()=>{
                handleCxo();
            }}>
                <ListItemIcon style={{minWidth: '30px'}}>
                    {/* <DashboardOutlinedIcon style={{fontSize: '25px'}}/> */}
                </ListItemIcon>
                <ListItemText>
                    <Typography variant="body1" style={{ fontSize: '15px' }}>
                        CXO
                    </Typography>
                </ListItemText>
            </ListItemButton>
        </ListItem>
        </List>
      </Drawer>
  )
}
 