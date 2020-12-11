import React, {useState, useContext} from "react";
import {
  AppBar,
  Toolbar,
  Button,
  makeStyles,
} from "@material-ui/core";
import Login from '../../Components/WelcomePage/Login';
import {AuthContext} from "../../contexts/AuthContext"




const Navbar = () => {
    const [loginOpen, setLoginOpen] = useState(false)
    // set to true if you want dialog to open first 
    const authContext = useContext(AuthContext);

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

  const classes = useStyles();



  const handleAuth = () => {
    if (authContext.isAuth) {
      authContext.logout()
      setLoginOpen(false)
      return
    }
    if (!authContext.isAuth) {
      if (!loginOpen) {
        setLoginOpen(true)
        return
      }
      setLoginOpen(false)
    }
  }
  

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          
        
         { 
          authContext.isAuth ? <Button color='inherit' onClick={handleAuth}> Logout </Button> :
        <Button color='inherit' onClick={handleAuth}> Login </Button>
         }
         
    

        </Toolbar>
        <Login open={loginOpen} onClose={handleAuth}/>
      </AppBar>
    </div>
  );
};

export default Navbar;