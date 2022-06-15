import { Root as TRoot } from "../api/root/Root";

export const ROOT_TITLE_FIELD = "id";

export const RootTitle = (record: TRoot): string => {
  return record.id || record.id;
};
