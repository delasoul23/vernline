import { Customer as TCustomer } from "../api/customer/Customer";

export const CUSTOMER_TITLE_FIELD = "username";

export const CustomerTitle = (record: TCustomer): string => {
  return record.username || record.id;
};
