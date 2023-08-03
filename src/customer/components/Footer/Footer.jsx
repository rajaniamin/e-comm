import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
    return (
        <div>
            <Grid className="bg-black  text-white text-center mt-10"
                container
                sx={{ bgcolor: "black", color: "white", py: 3 }}>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">Company</Typography>
                    <div>  
                        <Button className="pb-5" variant="h6 ">About</Button>
                    </div>
                    <div>      
                        <Button className="pb-5" variant="h6 ">Blog</Button>
                    </div>
                    <div>     
                      <Button className="pb-5" variant="h6 ">Jobs</Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">Solutions</Typography>
                    <div>  
                        <Button className="pb-5" variant="h6 ">Call</Button>
                    </div>
                    <div>      
                        <Button className="pb-5" variant="h6 ">Chat</Button>
                    </div>
                    <div>     
                      <Button className="pb-5" variant="h6 ">Mail</Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">Marketting</Typography>
                    <div>  
                        <Button className="pb-5" variant="h6 ">Insights</Button>
                    </div>
                    <div>      
                        <Button className="pb-5" variant="h6 ">Support</Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">Documentaions</Typography>
                    <div>  
                        <Button className="pb-5" variant="h6 ">APIs</Button>
                    </div>
                    <div>      
                        <Button className="pb-5" variant="h6 ">Guides</Button>
                    </div>
                </Grid>
                <Grid className="pt-20" item xs={12}>
                    <Typography className="body2" component="p" align="center">
                       @ 2023 . All Rights are Reversed
                    </Typography>
                   
                </Grid>

            </Grid>
        </div>
    )
}

export default Footer