import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { ItemTitle } from "../item/ItemTitle";

export const CustomerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="item.id" reference="Item" label="All Purchases">
          <SelectInput optionText={ItemTitle} />
        </ReferenceInput>
        <DateTimeInput label="Last Purchase" source="lastPurchase" />
        <TextInput label="Roles" source="roles" />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
