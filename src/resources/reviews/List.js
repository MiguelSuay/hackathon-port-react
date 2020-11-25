import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import {
  Datagrid,
  Filter,
  List,
  SelectInput,
  TextField,
  TextInput,
} from "react-admin";

const useStyles = makeStyles((theme) => ({
  image: {
    padding: 0,
    "& img": {
      display: "block",
      maxHeight: 120,
      margin: 0,
    },
  },
}));

const FiltersPage = (props) => {
  return (
    <Filter {...props}>
      <SelectInput
        label="Rating"
        source="rating"
        choices={[
          { id: "5/5", name: "5/5" },
          { id: "4/5", name: "4/5" },
          { id: "3/5", name: "3/5" },
          { id: "2/5", name: "2/5" },
          { id: "1/5", name: "1/5" },
        ]}
        alwaysOn
        variant="standard"
      />
      <TextInput label="Product" source="product" alwaysOn variant="standard" />
    </Filter>
  );
};

const ListPage = (props) => {
  const classes = useStyles();
  return (
    <List
      {...props}
      actions={false}
      filters={<FiltersPage />}
      bulkActionButtons={false}
    >
      <Datagrid>
        <TextField label="Date" source="date" />
        <TextField label="Customer" source="customer" />
        <TextField label="Rating" source="rating" />
        <TextField label="Product" source="product" />
        <TextField label="Comment" source="comment" />
        <TextField label="status" source="status" />
      </Datagrid>
    </List>
  );
};

export default ListPage;
