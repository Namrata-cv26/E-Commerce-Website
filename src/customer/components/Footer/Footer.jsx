import { Typography } from '@mui/material'
import React from 'react'
import { Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
        <Grid className='bg-black text-white text-center mt-10'
        container 
        sx={{bgcolor:"black", color:"white",py:3}}>
            <Grid item xs={12} small={6} md={3}>
                <Typography className='pb-5' variant='h6'>Company</Typography>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>About</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>Blog</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>Press</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>Jobs</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>Partners</Button>
                </div>
               
                
            </Grid>

            <Grid item xs={12} small={6} md={3}>
                <Typography className='pb-5' variant='h6'>Solutions</Typography>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>Marketing</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>Analytics</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>Commerce</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>Insights</Button>
                </div>
                
               
                
            </Grid>

            <Grid item xs={12} small={6} md={3}>
                <Typography className='pb-5' variant='h6'>Documentation</Typography>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>Guides</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>API status</Button>
                </div> 
            </Grid>

            <Grid item xs={12} small={6} md={3}>
                <Typography className='pb-5' variant='h6'>Legal</Typography>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>Claim</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>Privacy</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>Terms</Button>
                </div>  
            </Grid>

            <Grid className='pt-20' items xs={12}>
                <Typography variant="body2" component="p" align="center">
                    &copy; 2024 Electro. All rights reserved.
                </Typography>
                

            </Grid>
        </Grid>
    </div>
  )
}

export default Footer