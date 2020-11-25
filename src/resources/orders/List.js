import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import {
  Datagrid,
  List,
  TextField,
  Filter,
  SelectInput,
  TextInput,
  ImageField,
} from "react-admin";
import BidButton from "../../components/BidButton";

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
        label="Categories"
        source="product_category"
        choices={[
          { id: "Electronics", name: "Electronics" },
          { id: "metals", name: "Metals" },
          { id: "paper", name: "Paper" },
          { id: "plastics", name: "Plastics" },
        ]}
        alwaysOn
        variant="standard"
      />
      <TextInput label="Search" source="product" alwaysOn variant="standard" />
    </Filter>
  );
};

const ListPage = (props) => {
  const classes = useStyles();
  return (
    <List
      {...props}
      actions={false}
      bulkActionButtons={false}
      filters={<FiltersPage />}
      title="Make waste offer?"
    >
      <Datagrid>
        <ImageField
          label=" "
          source="product_image"
          cellClassName={classes.image}
          title="Image"
        />
        <TextField label="Product" source="product" />
        <TextField label="Category" source="product_category" />
        <TextField label="LER Code" source="ler_code" />
        <TextField label="Weight" source="weight" />
        <TextField label="Container" source="container" />
        <TextField label="Seller" source="seller" />
        <TextField label="Current price" source="current_price" />
        <BidButton label="Bid"/>
      </Datagrid>
    </List>
  );
};

export default ListPage;
