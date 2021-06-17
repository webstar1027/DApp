import React, { ReactElement, FC } from "react";
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import Grid from '@material-ui/core/Grid';
import  buttonimg from '../img/download.png';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import './Layout.css'
interface Props {
    title: String
}
const Layout: FC<Props> = ({ title }): ReactElement => {
    return (
        <div style={{  marginTop:"50px", marginBottom:"100px"}}>
            <Grid container item xs={12} spacing={3}>
                <Grid item sm={2} md={4} lg={4} />
                <Grid item sm={8} md={4} lg={4}>
                    <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    className="layoutfield"
                    >
                        <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                        >
                            <p style={{cursor:"pointer"}}>Swap</p>
                            <SettingsOutlinedIcon style={{cursor:"pointer"}}/>
                        </Grid>
                        <div className="inputfield">
                            <button className="button1">
                                <img src={buttonimg} className="buttonimg" alt="logo"/>
                                ETH
                                <ExpandMoreIcon className="buttonarrow"/>
                            </button>
                            <input className="input1" placeholder="0.0"/>
                        </div>
                        <div className="inputfield">
                            <button className="button2">Select a token<ExpandMoreIcon /></button>
                            <input className="input2" placeholder="0.0"/>
                        </div>
                        <div>
                        <ArrowDownwardIcon className="arrowbutton"/>
                        </div>
                        <button className="button3">Connect wallet</button>
                    </Grid>
                </Grid>
                <Grid item sm={2} md={4} lg={4} />
            </Grid>
                
            
        </div>
    );
};

export default Layout;