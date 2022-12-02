import React from 'react';
import {Box, CssBaseline} from "@mui/material";

import './App.css';
import Header from "./components/navbar/Header";

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
                <Header/>
            </Box>
        </React.Fragment>
    );
}

export default App;
