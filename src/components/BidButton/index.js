import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText("#FC7772"),
    borderRadius: "1px",
    backgroundColor: "#FC7772",
    '&:hover': {
      backgroundColor: "#FC7772",
    },
  },
}));

const BidButton = (props) => {
  const classes = useStyles()
  return (
    <Button classes={classes} variant="contained">Bid</Button>
  )  
}

export default BidButton