import React,{useState,useEffect} from 'react';
import MenuBar from '../Menu/Menubar';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';



const Admin = () => {

  const [cardStates, setCardStates] = useState({
    'Manage Admins': true,
    'Device Monitoring': true,
    'Check Critical Alert': true,
    'Test Case Status': true,
    'Test Result and Reports': true,
    'Network KPIs': true,
    'Test Exception': true,
  });

  const [oemCardStates, setOemCardStates] = useState({
    'Manage Admins': true,
    'Device Monitoring': true,
    'Check Critical Alert': true,
    'Test Case Status': true,
    'Test Result and Reports': true,
    'Network KPIs': true,
    'Test Exception': true,
  });

  const [cxoCardStates, setCxoCardStates] = useState({
    'Manage Admins': true,
    'Device Monitoring': true,
    'Check Critical Alert': true,
    'Test Case Status': true,
    'Test Result and Reports': true,
    'Network KPIs': true,
    'Test Exception': true,
  });

  useEffect(() => {
    // Fetch cardStates from local storage
    const storedCardStates = localStorage.getItem('cardStates');
    if (storedCardStates) {
      setCardStates(JSON.parse(storedCardStates));
    }else{
      localStorage.setItem('cardStates', JSON.stringify(cardStates));
      
    }
  }, []);

  useEffect(() => {
    // Fetch cardStates from local storage
    const oem = localStorage.getItem('oem');
    if (oem) {
      setOemCardStates(JSON.parse(oem));
    }else{
      localStorage.setItem('oem', JSON.stringify(oemCardStates));
      
    }
  }, []);

  useEffect(() => {
    // Fetch cardStates from local storage
    const cxo = localStorage.getItem('cxo');
    if (cxo) {
      setCxoCardStates(JSON.parse(cxo));
    }else{
      localStorage.setItem('cxo', JSON.stringify(cxoCardStates));
      
    }
  }, []);

  const handleToggle = (permission) => {
    // Toggle the value in cardStates and update local storage
    const newCardStates = { ...cardStates, [permission]: !cardStates[permission] };
    setCardStates(newCardStates);
    localStorage.setItem('cardStates', JSON.stringify(newCardStates))
  };

  const  handleOemToggle = (permission) => {
    // Toggle the value in cardStates and update local storage
    const newCardStates = { ...oemCardStates, [permission]: !oemCardStates[permission] };
    setOemCardStates(newCardStates);
    localStorage.setItem('oem', JSON.stringify(newCardStates))
  };

  const  handleCxoToggle = (permission) => {
    // Toggle the value in cardStates and update local storage
    const newCardStates = { ...cxoCardStates, [permission]: !cxoCardStates[permission] };
    setCxoCardStates(newCardStates);
    localStorage.setItem('cxo', JSON.stringify(newCardStates))
  };

 

  return (

    <>
  <MenuBar/>
  <Grid container spacing={2} style={{width: '85%',marginLeft: '15%'}}>
    <Grid item xs={12} sm={6} md={3}>
      <Card>
        <CardContent>
        <div style={{ height: '75px', background: '#9B19EC', borderRadius: '10px', padding: '10px' }}>
            <Typography variant="h6" align="center" style={{ color: 'white' }}>
            Role & Permission
            </Typography>
          </div>
          <Grid container spacing={1}>
            {/* {rolePermission.map((permission, permissionIndex) => ( */}
              <Grid  item xs={12}>
                <div style={{ height: '60px', background: 'white', borderBottom: '1px solid #E5E5E5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                
                    <Typography variant="body2" align="center" style={{ marginLeft: '10px', fontSize: '16px', color: '#9D2235' }}>
                    Manage Admins
                    </Typography>
                
                </div>
              </Grid>
              <Grid  item xs={12}>
                <div style={{ height: '60px', background: 'white', borderBottom: '1px solid #E5E5E5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                
                    <Typography variant="body2" align="center" style={{ marginLeft: '10px', fontSize: '16px', color: '#9D2235' }}>
                    Device Monitoring
                    </Typography>
                
                </div>
              </Grid>
              <Grid  item xs={12}>
                <div style={{ height: '60px', background: 'white', borderBottom: '1px solid #E5E5E5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                
                    <Typography variant="body2" align="center" style={{ marginLeft: '10px', fontSize: '16px', color: '#9D2235' }}>
                    Check Critical Alert
                    </Typography>
                
                </div>
              </Grid>
              <Grid  item xs={12}>
                <div style={{ height: '60px', background: 'white', borderBottom: '1px solid #E5E5E5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                
                    <Typography variant="body2" align="center" style={{ marginLeft: '10px', fontSize: '16px', color: '#9D2235' }}>
                    Test Case Status
                    </Typography>
                
                </div>
              </Grid>
              <Grid  item xs={12}>
                <div style={{ height: '60px', background: 'white', borderBottom: '1px solid #E5E5E5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                
                    <Typography variant="body2" align="center" style={{ marginLeft: '10px', fontSize: '16px', color: '#9D2235' }}>
                    Test Result and Reports
                    </Typography>
                
                </div>
              </Grid>
              <Grid  item xs={12}>
                <div style={{ height: '60px', background: 'white', borderBottom: '1px solid #E5E5E5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                
                    <Typography variant="body2" align="center" style={{ marginLeft: '10px', fontSize: '16px', color: '#9D2235' }}>
                    Network KPIs
                    </Typography>
                
                </div>
              </Grid>
              <Grid  item xs={12}>
                <div style={{ height: '60px', background: 'white', borderBottom: '1px solid #E5E5E5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                
                    <Typography variant="body2" align="center" style={{ marginLeft: '10px', fontSize: '16px', color: '#9D2235' }}>
                    Test Exception
                    </Typography>
                
                </div>
              </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
      <Card>
        <CardContent>
        <div style={{ height: '75px', background: '#9B19EC', borderRadius: '10px', padding: '10px' }}>
            <Typography variant="h6" align="center" style={{ color: 'white' }}>
            Test Engineer
            </Typography>
          </div>
          <Grid container spacing={1}>
          {Object.entries(cardStates).map(([permission, value]) => (
                <Grid key={permission} item xs={12}>
                  <div style={{ height: '60px', background: 'white', borderBottom: '1px solid #E5E5E5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {value ? (
                      <DoneIcon
                        style={{
                          color: '#1AB24E',
                          margin: '5px',
                          borderRadius: '50%',
                          cursor: 'pointer',
                        }}
                        onClick={() => handleToggle(permission)}
                      />
                    ) : (
                      <CloseIcon
                        style={{
                          color: '#9D2235',
                          margin: '5px',
                          borderRadius: '50%',
                          cursor: 'pointer',
                        }}
                        onClick={() => handleToggle(permission)}
                      />
                    )}
                  </div>
                </Grid>
              ))}
             
          </Grid>
        </CardContent>
      </Card>
    </Grid>

    <Grid item xs={12} sm={6} md={3}>
      <Card>
        <CardContent>
        <div style={{ height: '75px', background: '#9B19EC', borderRadius: '10px', padding: '10px' }}>
            <Typography variant="h6" align="center" style={{ color: 'white' }}>
            OEM Test Engineer
            </Typography>
          </div>
          <Grid container spacing={1}>
          {Object.entries(oemCardStates).map(([permission, value]) => (
                <Grid key={permission} item xs={12}>
                  <div style={{ height: '60px', background: 'white', borderBottom: '1px solid #E5E5E5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {value ? (
                      <DoneIcon
                        style={{
                          color: '#1AB24E',
                          margin: '5px',
                          borderRadius: '50%',
                          cursor: 'pointer',
                        }}
                        onClick={() => handleOemToggle(permission)}
                      />
                    ) : (
                      <CloseIcon
                        style={{
                          color: '#9D2235',
                          margin: '5px',
                          borderRadius: '50%',
                          cursor: 'pointer',
                        }}
                        onClick={() => handleOemToggle(permission)}
                      />
                    )}
                  </div>
                </Grid>
              ))} 
          </Grid>
        </CardContent>
      </Card>
    </Grid>

    <Grid item xs={12} sm={6} md={3}>
      <Card>
        <CardContent>
        <div style={{ height: '75px', background: '#9B19EC', borderRadius: '10px', padding: '10px' }}>
            <Typography variant="h6" align="center" style={{ color: 'white' }}>
            Cxo
            </Typography>
          </div>
          <Grid container spacing={1}>
          {Object.entries(cxoCardStates).map(([permission, value]) => (
                <Grid key={permission} item xs={12}>
                  <div style={{ height: '60px', background: 'white', borderBottom: '1px solid #E5E5E5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {value ? (
                      <DoneIcon
                        style={{
                          color: '#1AB24E',
                          margin: '5px',
                          borderRadius: '50%',
                          cursor: 'pointer',
                        }}
                        onClick={() => handleCxoToggle(permission)}
                      />
                    ) : (
                      <CloseIcon
                        style={{
                          color: '#9D2235',
                          margin: '5px',
                          borderRadius: '50%',
                          cursor: 'pointer',
                        }}
                        onClick={() => handleCxoToggle(permission)}
                      />
                    )}
                  </div>
                </Grid>
              ))} 
          </Grid>
        </CardContent>
      </Card>
    </Grid>
    
  </Grid>
  
  </>
  )
  
};

export default Admin;
