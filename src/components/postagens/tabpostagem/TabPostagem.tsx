import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css'
import { Box } from '@material-ui/core';

function TabPostagens() {
  const [value, setValue] = useState('1')
  function handleChange(event: React.ChangeEvent<{}>, newValue: string){
    setValue(newValue);
  };

  // TabIndicatorProps={{style: {display: 'none'}}}
  return (
    <TabContext value={value}>
        <AppBar position="static" className='barrinha' style={{color: '#fcfcfc'}}>
          <TabList centered indicatorColor='primary' onChange={handleChange}  aria-label="simple tabs example">
            <Tab  label="Postagens" value="1"  />
            <Tab label="Sobre o projeto" value="2" />
          </TabList>
        </AppBar>
        <TabPanel value="1">
          <Box display='flex' flexWrap='wrap' justifyContent='center'>
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus similique nulla neque deserunt sed repudiandae ea accusantium, dicta nihil nisi nostrum ratione quod incidunt aspernatur delectus temporibus, sit, expedita recusandae.
        </TabPanel>
      </TabContext>
  )
}

export default TabPostagens