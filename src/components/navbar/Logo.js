import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import {FaAirbnb} from 'react-icons/fa';
import {flexCenter} from 'themes/commonStyles';

const Logo = () => {
    return (
        <Box sx={flexCenter}>
            <FaAirbnb size={36} color={'#ff385c'}/>

            <Typography
                sx={{
                    ml: 1,
                    color: (theme) => theme.palette.secondary.main,
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    letterSpacing: '-0.5px'
                }}
                component="h3"
            >
                airbnb
            </Typography>
        </Box>
    );
};

export default Logo;
