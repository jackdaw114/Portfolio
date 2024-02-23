
import React, { useState, useEffect, useContext } from 'react';
import { ReactComponent as JSheader } from '../assets/Jason_Sampy.svg'
import { ReactComponent as JS2 } from '../assets/JS.svg'
import './Header.css'

import { Box, Divider } from '@mui/material';

export default function Header() {
    const windowWidth = window.innerWidth;
    useEffect(() => {
        console.log(windowWidth)
    })
    return (
        <Box className='header' >
            <Box sx={{ width: '100vw', display: 'flex', justifyContent: 'center', paddingTop: 2, borderColor: 'black', paddingBottom: 1 }}>
                {windowWidth > 800 ?

                    <JSheader className="js_header" /> : <JS2 className='js_header' style={{ paddingBottom: '7px', width: '200px' }} />
                }
            </Box>

        </Box >
    );
}