import React, { BaseSyntheticEvent } from 'react';
import { Theme } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';

interface Props {
    anchorEl: any,
    open: any,
    id: string,
    keepMounted: any
    onClose: any
}

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    borderRadius: "20px",
    background: "#EDEEF2"
  },
})((props: Props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));
const StyledMenuItem = withStyles((theme: Theme) => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.grey[400],
        fontWeight: theme.typography.fontWeightBold,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);

export default function CustomizedMenus() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event: BaseSyntheticEvent) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <div className="dropmenu">
            <MoreHorizOutlinedIcon aria-controls="customized-menu"
                aria-haspopup="true" className="dotsicon" onClick={handleClick} fontSize="small" />  

            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <StyledMenuItem>
                <ListItemIcon>
                    <ErrorOutlineOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="About" />
                </StyledMenuItem>
                <StyledMenuItem>
                <ListItemIcon>
                    <MenuBookOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Docs" />
                </StyledMenuItem>
                <StyledMenuItem>
                <ListItemIcon>
                    <CodeOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Code" />
                </StyledMenuItem>
                <StyledMenuItem>
                <ListItemIcon>
                    <ChatBubbleOutlineRoundedIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Discord" />
                </StyledMenuItem>
                <StyledMenuItem>
                <ListItemIcon>
                    <WatchLaterOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Code" />
                </StyledMenuItem>
            </StyledMenu>
        </div>
      );
}