import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { ItemTitle } from "../item/ItemTitle";

export const CustomerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="item.id" reference="Item" label="All Purchases">
          <SelectInput optionText={ItemTitle} />
        </ReferenceInput>
        <DateTimeInput label="Last Purchase" source="lastPurchase" />
        <TextInput label="Roles" source="roles" />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Create>
  );
};
