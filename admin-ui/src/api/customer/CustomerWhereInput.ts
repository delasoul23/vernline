import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CustomerWhereInput = {
  allPurchases?: ItemWhereUniqueInput;
  id?: StringFilter;
  lastPurchase?: DateTimeNullableFilter;
  roles?: StringNullableFilter;
  username?: StringNullableFilter;
};
