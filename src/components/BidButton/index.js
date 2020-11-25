import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#FFF",
    borderRadius: "1px",
    backgroundColor: "#FC7772",    
    '&:hover': {
      backgroundColor: "#FC7772",
    },
    '& span': {
      textTransform: "capitalize"
    }
  },
}));

const BidButton = ({label}) => {
  const classes = useStyles()
  return (
    <Button classes={classes} variant="contained">{label}</Button>
  )  
}

export default BidButton