import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import HomeIcon from '@material-ui/icons/Home';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useTranslation } from "react-i18next";



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AddressCard() {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <HomeIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
          {t("address_card")}
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="country"
            label={t("country")}
            name="country"
            autoComplete="country"
            autoFocus
          />
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="city"
            label={t("city")}
            name="city"
            autoComplete="city"
            autoFocus
          />
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="street"
            label={t("street")}
            name="street"
            autoComplete="street"
            autoFocus
          />
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {t("save")}
          </Button>
         
        </form>
      </div>
      <Box mt={8}>
      </Box>
    </Container>
  );
}