import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";

export type CustomerUpdateInput = {
  allPurchases?: ItemWhereUniqueInput | null;
  lastPurchase?: Date | null;
  roles?: string | null;
  username?: string | null;
};
