import React, { useRef } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  TextField,
  Button,
  Box,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
//import { AuthContext } from "../../contexts/AuthContext";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();


  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
    cardCenter: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    card: {
      maxWidth: 300,
      maxHeight: 600,
    },
  });

  const classes = useStyles();

  return (
    <div>
      <Box className={classes.cardCenter}>
        <Card className={classes.card}>
          <CardHeader title="Sign Up Form" />
              <CardContent>
                <form noValidate autoComplete="off" >
                  <TextField
                    id="email"
                    ref={emailRef}
                    required
                    label="Email"
                    type="email"
                    name="email"
                    variant="filled"
                    margin="normal"
                    placeholder="test@email.com"
                    fullWidth
                  />
                
                  <TextField
                    id="password"
                    ref={passwordRef}
                    required
                    label="Password"
                    type="password"
                    name="password"
                    variant="filled"
                    margin="normal"
                    placeholder="********"
                    fullWidth
                  />
                 
                  
                </form>
                <Button type="submit" variant="contained">
                  Sign Up
                </Button>
              </CardContent>

        </Card>
      </Box>
    </div>
  );
};

export default SignUp;
