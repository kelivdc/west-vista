import { Box, Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <Box bgcolor="#000" color="#fff" p={2} marginBottom={8} mt="20px">
        <Typography align="center" color="#ccc">
            <div>Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11750</div>
            <hr size="1" />
            <div>Copyright ©2022. All rights reserved</div>
        </Typography>
    </Box>
  )
}

export default Footer