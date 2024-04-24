import { Pagination } from "@/types/api";
import { GeneralEntity } from "@/types/general";

export type VideoType = {
  video_id: number;
  video_title: string;
  embed: string;
} & GeneralEntity;

export type VideoQuery = {
  title?: string;
} & Pagination;
