
import React, { useState, useEffect, useContext } from 'react';
import { ReactComponent as JSheader } from '../assets/Jason_Sampy.svg'
import { ReactComponent as JS2 } from '../assets/JS.svg'
import './Header.css'

import { Box, Divider } from '@mui/material';
const headerHeight = '68 + 7 + 16 + 14 = 79px '
//header height not used here only for reference

export default function Header(props) {
    const windowWidth = window.innerWidth;
    useEffect(() => {
        console.log(windowWidth)
    })
    return (

        <Box className='header' sx={{ ...props.sx, right: 0, display: 'flex', justifyContent: 'center', paddingTop: '16px', borderColor: 'black', paddingBottom: '7px', position: 'absolute' }}>
            {windowWidth > 800 ?

                <JSheader className="js_header" /> : <JS2 className='js_header' />
            }
        </Box>


    );
}