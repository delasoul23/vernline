import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  allPurchasesId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  lastPurchase?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
