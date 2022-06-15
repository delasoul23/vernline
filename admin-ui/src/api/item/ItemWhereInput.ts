import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type ItemWhereInput = {
  customer?: CustomerListRelationFilter;
  id?: StringFilter;
};
