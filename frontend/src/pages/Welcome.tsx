import React from 'react'
import { Box, Button, Typography } from '@mui/material'

export function WelcomePage() {
    return (
        <Box sx={{ width: '90vw', display: 'flex', flexDirection: 'column', alignItems: 'center', alignSelf: 'center' }}>
            <Box sx={{ width: '86vw', height: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'end' }}>
                <Typography variant='h4' component='h1'>Send your money smarter</Typography>
                <Typography sx={{ paddingTop: '0.75rem', paddingBottom: '4rem' }}>Quick supportive description</Typography>
            </Box>
            <Button fullWidth variant='contained'>Start here</Button>
        </Box>
    )
}