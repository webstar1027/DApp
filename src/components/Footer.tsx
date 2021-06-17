import React, { ReactElement, FC } from "react";
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import Dropmenu from './Dropmenu';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import './Footer.css'

// define interface to represent component props
interface Props {
    title: String
}

const Footer: FC<Props> = ({ title }): ReactElement => {
    return (
        <div>
            <Hidden lgUp>
                        <Grid>
                            <div className="buttongroup">
                                <Button className="connectbutton" style={{float:"left", display:"inline-block", fontSize:"16px", padding:"8px 15px", borderRadius:"10px", color:"#FF007A", backgroundColor:"#FDEAF1"}} disableRipple>Connect to a Wallet</Button>      
                                <WbSunnyOutlinedIcon className="footersunnyicon"  />
                                <Dropmenu />
                            </div>
                        </Grid>             
            </Hidden> 
            <Hidden mdDown>
                <Grid>
                    <div className="footer">
                        <p className="number">12646472</p> 
                        <div className="dot"></div>  
                    </div>
                </Grid>   
            </Hidden>
        </div>
    );
};

export default Footer;