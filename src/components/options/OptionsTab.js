import React from 'react';
import {FaFilter} from 'react-icons/fa';

import {Box, Button, Container, Tab} from "@mui/material";
import Tabs, {tabsClasses} from '@mui/material/Tabs';

import {locationsTab} from 'data/mock-data';
import {flexCenter} from "../../themes/commonStyles";

function OptionsTab() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container maxWidth="xl">
            <Box
                sx={{
                    display: 'flex',
                    flexGrow: 1,
                    px: {xs: 0, md: 2},
                    alignItems: 'center',
                    mt: 2,
                    mb: 2,
                }}
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    sx={{
                        [`& .${tabsClasses.scrollButtons}`]: {
                            '&.Mui-disabled': {opacity: 0.3},
                        },
                    }}
                >
                    {locationsTab.map((tab) => {
                        return <Tab key={tab.id} icon={tab.icon} label={tab.label}/>;
                    })}
                </Tabs>

                <Button
                    sx={{
                        display: {xs: 'none', md: 'block'},
                        border: '1px solid #ddd',
                        minWidth: 90,
                        justifyContent: 'space-between',
                        alignContent: 'center',
                        borderRadius: 2,
                        ml: '1rem',
                        textTransform: 'capitalize',
                        color: 'theme.palette.text.primary',
                    }}
                >
                    <Box
                        sx={{
                            ...flexCenter
                        }}>
                        <FaFilter/>
                        <h5 style={{paddingLeft: '.5rem'}}>
                            Filters
                        </h5>
                    </Box>

                </Button>
            </Box>
        </Container>
    );
}

export default OptionsTab;