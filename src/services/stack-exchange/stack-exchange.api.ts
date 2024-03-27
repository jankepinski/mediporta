import axios from "axios";
import { Dayjs } from "dayjs";
import { Tag } from "../../App";

export type Filter = {
  page: number;
  pageSize: number;
  search: string;
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  sorting: string;
  descending: boolean;
};

export const fetchTags = async ({
  page,
  pageSize,
  search,
  startDate,
  endDate,
  sorting,
  descending,
}: Filter) => {
  const order = descending ? "desc" : "asc";
  let requestUrl = `https://api.stackexchange.com/2.3/tags?page=${page}&pagesize=${pageSize}&sort=${sorting}&order=${order}&site=stackoverflow`;

  if (startDate) {
    requestUrl += `&fromdate=${startDate.unix()}`;
  }

  if (endDate) {
    requestUrl += `&todate=${endDate.unix()}`;
  }

  if (search) {
    requestUrl += `&inname=${search}`;
  }

  const response = await axios.get<Tag>(requestUrl).catch((error) => {
    return error;
  });

  if (response.response) {
    return "Error fetching data";
  }

  return response.data;
};
