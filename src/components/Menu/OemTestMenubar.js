import React, { useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';
import { useState } from 'react';

const drawerWidth = '15%';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const OemTestMenubar = ({ rolePermissions }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [cardsPermission, setCardsPermission] = useState([]);

  useEffect(() => {
    const oemCardStates = localStorage.getItem('oem');
    const parsedCardStates = JSON.parse(oemCardStates);
    setCardsPermission(parsedCardStates );
  }, []);

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const filteredPermissions = Object.entries(cardsPermission)
  .filter(([permission, value]) => value)
  .map(([permission]) => permission);

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
      open={open}
    >
      <DrawerHeader>
        {/* <IconButton onClick={handleDrawerClose} /> */}
      </DrawerHeader>
      <Divider />
      <List>

{/* {Object.entries(cardsPermission).map(([permission, value], index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon style={{ minWidth: '30px' }}>
               
              </ListItemIcon>
              <ListItemText>
                <Typography variant="body1" style={{ fontSize: '15px' }}>
                  {permission}: {value ? 'true' : 'false'}
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))} */}

{filteredPermissions.map((permission, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon style={{ minWidth: '30px' }}>
                {/* Your icon goes here */}
              </ListItemIcon>
              <ListItemText>
                <Typography variant="body1" style={{ fontSize: '15px' }}>
                  {permission}
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default OemTestMenubar;
