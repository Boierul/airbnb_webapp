import React from 'react';
import {BsGlobe} from 'react-icons/bs';
import {AiOutlineMenu} from 'react-icons/ai';
import {FaRegUserCircle} from 'react-icons/fa';
import {flexCenter} from 'themes/commonStyles';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const ProfileSettings = () => {
    return (
        <Box sx={flexCenter}>
            <Link href="#"> Become A Host</Link>
            <Stack>
                <Button
                    sx={{
                        borderRadius: 10,
                    }}
                >
                    <BsGlobe size={22}/>
                </Button>

                <Button
                    sx={{
                        borderRadius: 10,
                        border: '1px solid #ddd',
                    }}
                >
                    <Stack>
                        <AiOutlineMenu size={24}/>
                        <FaRegUserCircle size={24}/>
                    </Stack>
                </Button>
            </Stack>
        </Box>
    );
};

export default ProfileSettings;
