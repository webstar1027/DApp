import React, { ReactElement, FC } from "react";
import Button from '@material-ui/core/Button';
import Dropmenu from './Dropmenu';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import { ReactComponent as LogoSvg } from '../img/logo.svg';
import './Header.css'

// define interface to represent component props
interface Props {
    title: String
}

const Header: FC<Props> = ({ title }): ReactElement => {
    return (
        <div>
            <Grid container item xs={12} spacing={3} style={{paddingTop:"20px"}}>
                    <Grid item xs={4} md={6} lg={4} >
                        <LogoSvg className="logo"/>
                    </Grid>
                    <Grid item xs={8} md={6} lg={4}>
                        <div className="topnav">
                            <a className="active" href="#home">Swap</a>
                            <a href="#news">Pool</a>
                            <a href="#contact">Vote</a>
                            <a href="#about" id="arrow">Charts<sup>↗</sup></a>
                        </div>
                    </Grid>
                    <Hidden mdDown>
                        <Grid item md={3} lg={4}>
                            <div className="buttongroup">
                                <Button className="connectbutton" style={{ display:"inline-block", fontSize:"16px", padding:"5px 15px", borderRadius:"10px", color:"#FF007A", backgroundColor:"#FDEAF1", marginBottom:"30px", border:"1px solid #FDEAF1"}}>Connect to a Wallet</Button>      
                                <WbSunnyOutlinedIcon className="sunicon" />
                                <Dropmenu />
                            </div>
                        </Grid>             
                    </Hidden>    
             </Grid>   
                       
        </div>
    );
};

export default Header;