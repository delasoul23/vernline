import { Customer } from "../customer/Customer";

export type Item = {
  createdAt: Date;
  customer?: Array<Customer>;
  id: string;
  updatedAt: Date;
};
