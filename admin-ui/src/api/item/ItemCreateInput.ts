import { CustomerCreateNestedManyWithoutItemsInput } from "./CustomerCreateNestedManyWithoutItemsInput";

export type ItemCreateInput = {
  customer?: CustomerCreateNestedManyWithoutItemsInput;
};
