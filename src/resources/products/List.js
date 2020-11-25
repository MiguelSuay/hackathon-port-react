import React from "react"
import { Datagrid, List, TextField, Filter, SelectInput, TextInput } from "react-admin"
import BidButton from "../../components/BidButton"

const FiltersPage = (props) => {
  return (
    <Filter  {...props}>
      <SelectInput label="Categories" source="category" choices={[
        { id: 'programming', name: 'Programming' },
        { id: 'lifestyle', name: 'Lifestyle' },
        { id: 'photography', name: 'Photography' }
      ]} alwaysOn variant="standard" />
      <TextInput label="Search" source="q" alwaysOn  variant="standard"/>
    </Filter>
  )
}

const ListPage = (props)  => (
  <List 
    {...props} 
    actions={false}
    bulkActionButtons={false}
    filters={<FiltersPage />}
  >
    <Datagrid>
      <TextField label="Product" source="product"/>
      <TextField label="LER code" source="LER_code"/>
      <TextField label="Weight (mtn)" source="LER_code"/>
      <TextField label="Container" source="LER_code"/>
      <TextField label="Seller" source="LER_code"/>
      <TextField label="Current price" source="LER_code"/>
      <BidButton />
    </Datagrid>
  </List>
)

export default ListPage