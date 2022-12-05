import React from 'react';
import {Box, Container, CssBaseline} from "@mui/material";

import './App.css';
import Header from "./components/navbar/Header";
import OptionsTab from "./components/options/OptionsTab";
import LocationCards from "./components/hero/LocationCards";
import MobileFooter from "./components/footer/MobileFooter";
import DesktopFooter from "./components/footer/DesktopFooter";

import { displayOnDesktop } from 'themes/commonStyles';
import MobileFooterMenu from "./components/footer/MobileFooterMenu";

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

                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <MobileFooterMenu />
                </Box>

                <Box sx={displayOnDesktop}>
                    <DesktopFooter />
                </Box>

            </Box>
        </React.Fragment>
    );
}

export default App;
