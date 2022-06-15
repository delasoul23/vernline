import { Item } from "../item/Item";

export type Customer = {
  allPurchases?: Item | null;
  createdAt: Date;
  id: string;
  lastPurchase: Date | null;
  roles: string | null;
  updatedAt: Date;
  username: string | null;
};
