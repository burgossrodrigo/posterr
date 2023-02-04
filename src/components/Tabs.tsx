import { Box, Tab, Tabs, Typography } from "@mui/material"
import { useContext, useEffect, useState } from "react";
import GridComponent from "./GridComponent";
import PropTypes from 'prop-types';
import OnlyFollowersGrid from "./OnlyFollowersGrid";
import { Link, useLocation } from "react-router-dom";
import { AnyNsRecord } from "dns";
import { AppContext } from "../state";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;
    const location: string | any = useLocation()
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const TabComponent = () => {
    const location = useLocation()
    const [value, setValue] = useState(0)
    const { state } = useContext(AppContext)

    const formatPost = () => {
      if(location.pathname === "/following"){
        setValue(1)
      }
      setValue(0)
    }

    useEffect(() => {
      formatPost()
    }, [state])

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      console.log(event, newValue, 'event')
        setValue(newValue)
      }

    return(<>
        <Tabs onChange={handleChange}>
          <Link to="/"><Tab label="All" /></Link>
          <Link to="/following"><Tab label="Following" /></Link>
        </Tabs>
        <TabPanel index={0} value={value}><GridComponent /></TabPanel>
        <TabPanel index={1} value={value}><OnlyFollowersGrid /></TabPanel>    
    </>)
}

export default TabComponent