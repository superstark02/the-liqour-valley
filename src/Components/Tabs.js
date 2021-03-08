import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MyList from './MyList';
import { FilteredList } from './FilteredList';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}

      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Category() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Beer" {...a11yProps(1)} />
          <Tab label="Whisky" {...a11yProps(2)} />
          <Tab label="Vodka" {...a11yProps(3)} />
          <Tab label="Rum" {...a11yProps(4)} />
        </Tabs>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <MyList/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <FilteredList keyword={"Beer"} />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <FilteredList keyword={"Whisky"} />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <FilteredList keyword={"Vodka"} />
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <FilteredList keyword={"Rum"} />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
