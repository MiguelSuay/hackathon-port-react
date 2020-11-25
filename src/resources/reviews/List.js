import React from "react"
import { Datagrid, List, TextField, Filter, SelectInput, TextInput, ImageField, DateField } from "react-admin"
import BidButton from "../../components/BidButton"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  image: {
    padding: 0,
    "& img": {
      display: "block",
      maxHeight: 120,
      margin: 0
    }
  },
}));

const ListPage = (props)  => {
  const classes = useStyles()
  return (
  <List 
    {...props} 
    actions={false}
    bulkActionButtons={false}
  >
    <Datagrid>
      <TextField label="Date" source="date"/>
      <TextField label="Customer" source="customer" />
      <TextField label="Rating" source="rating" />
      <TextField label="Product" source="product" />
      <TextField label="Comment" source="comment" />
      <TextField label="status" source="status" />
    </Datagrid>
  </List>
)}

export default ListPage