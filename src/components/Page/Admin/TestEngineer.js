import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import TesterMenu from '../../Menu/TesterMenu';

const TestEngineer = () => {
  
    
    

  return (
    <>
    <TesterMenu/>
    <div style={{margin: '15%',width: '85%',display: 'flex',alignItems: 'center',justifyContent: 'center'}}> 
        <h1>
            Welcome To Test Engineer!
        </h1>
    </div>
   
    </>
  );
};

export default TestEngineer;
