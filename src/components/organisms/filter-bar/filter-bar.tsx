import { ArrowUpward, ArrowDownward, Close } from "@mui/icons-material";
import { Box, Button, Select, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import { Dayjs } from "dayjs";
import { fetchTags } from "../../../services/stack-exchange/stack-exchange.api";
import { DatePicker } from "../../molecules/date-picker/date-picker";
import { Tag } from "../../../App";
import { Search } from "../../molecules/search/search";
import { TitledBox } from "../../atoms/titled-box/titled-box";

type FilterBarProps = {
  page: number;
  setData: React.Dispatch<React.SetStateAction<Tag[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
};

export const FilterBar = ({
  page,
  setData,
  setIsLoading,
  setIsError,
}: FilterBarProps) => {
  const [pageSize, setPageSize] = useState(25);
  const [search, setSearch] = useState("");

  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);

  const [descending, setDescending] = useState(false);
  const [sorting, setSorting] = useState("name");

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const { items } = await fetchTags({
        page,
        pageSize,
        search,
        startDate,
        endDate,
        sorting,
        descending,
      });
      setIsLoading(false);
      if (!items) {
        setIsError(true);
        return;
      }
      setData(items);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageSize, descending, sorting, search, startDate, endDate, page]);

  const clearFilters = () => {
    setStartDate(null);
    setEndDate(null);
  };

  return (
    <Box>
      <Search setValue={setSearch} />
      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          gap: 1,
        }}
      >
        <Button onClick={clearFilters} disabled={!startDate && !endDate}>
          <Close />
        </Button>
        <TitledBox title="date from">
          <DatePicker
            value={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </TitledBox>
        <TitledBox title="date to">
          <DatePicker value={endDate} onChange={(date) => setEndDate(date)} />
        </TitledBox>

        <TitledBox title="sort by">
          <Select
            value={sorting}
            onChange={(event) => setSorting(event.target.value as string)}
            size="small"
          >
            <MenuItem value={"name"}>name</MenuItem>
            <MenuItem value={"popular"}>popular</MenuItem>
            <MenuItem value={"activity"}>activity</MenuItem>
          </Select>
        </TitledBox>
        <TitledBox title="per page">
          <Select
            value={pageSize}
            onChange={(event) => setPageSize(event.target.value as number)}
            size="small"
          >
            <MenuItem value={25}>25</MenuItem>
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={100}>100</MenuItem>
          </Select>
        </TitledBox>
        <TitledBox title="sorting direction">
          <Button
            onClick={() => setDescending(!descending)}
            sx={{ width: "100%" }}
          >
            {descending ? <ArrowDownward /> : <ArrowUpward />}
          </Button>
        </TitledBox>
      </Box>
    </Box>
  );
};
