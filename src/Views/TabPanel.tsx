import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Box, Typography } from '@material-ui/core';
import EditButton from '../IconButtons/EditIconButton';

type Props = {
  children: React.ReactNode;
};
function TabPanel(props: Props) {
  return (
    <div role='tabpanel'>
      <Box p={3}>
        <Typography>{props.children}</Typography>
      </Box>
    </div>
  );
}

const tabPanels: { [key: string]: JSX.Element } = {
  active1: (
    <TabPanel>
      Item One <EditButton />
    </TabPanel>
  ),
  disabled: <TabPanel>Item Two</TabPanel>,
  active2: <TabPanel>Item Three</TabPanel>,
};
export default function TabPanels() {
  const [value, setValue] = useState('');

  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Paper square>
      <Tabs
        value={value}
        indicatorColor='primary'
        textColor='primary'
        onChange={handleChange}>
        <Tab label='Active' value={'active1'} />
        <Tab label='Disabled' disabled value={'disabled'} />
        <Tab label='Active' value={'active2'} />
      </Tabs>
      {tabPanels[value] || null}
    </Paper>
  );
}
