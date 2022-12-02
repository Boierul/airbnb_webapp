import React from 'react';
import {Box, Container, CssBaseline} from "@mui/material";

import './App.css';
import Header from "./components/navbar/Header";
import OptionsTab from "./components/options/OptionsTab";
import LocationCards from "./components/hero/LocationCards";
import MobileFooter from "./components/footer/MobileFooter";

function App() {
    return (
        <React.Fragment>
            <CssBaseline/>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100vh',
                }}
            >
                <Box>
                    <Header/>
                    <OptionsTab/>
                </Box>

                {/*  Scrollable content   */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexGrow: 1,
                        height: 100,
                        overflowY: 'scroll',
                    }}
                >
                    <Container maxWidth="xl" sx={{mb: 3}}>
                        <LocationCards/>

                        <Box
                            sx={{
                                display: {xs: 'flex', md: 'none'},
                            }}
                        >
                            <MobileFooter/>
                        </Box>
                    </Container>
                </Box>

            </Box>
        </React.Fragment>
    );
}

export default App;
