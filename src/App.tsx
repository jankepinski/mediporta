import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { FilterBar } from "./components/organisms/filter-bar/filter-bar";

export type Tag = {
  name: string;
  count: number;
};

function App() {
  const [data, setData] = useState<Tag[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  return (
    <Card>
      <CardContent sx={{ display: "flex", flexDirection: "column" }}>
        <FilterBar
          setData={setData}
          setIsLoading={setIsLoading}
          page={page}
          setIsError={setIsError}
        />
        <TableContainer
          sx={{
            maxHeight: "400px",
            height: "400px",
            overflowX: "hidden",
            border: "1px solid lightgray",
          }}
          className="table-container"
        >
          {isLoading ? (
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            <Table stickyHeader>
              <TableHead>
                <TableCell>
                  <strong>Name</strong>
                </TableCell>
                <TableCell>
                  <strong>Count</strong>
                </TableCell>
              </TableHead>
              <TableBody>
                {data.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.count}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
          {data.length === 0 && !isLoading && !isError && (
            <Box
              sx={{
                width: "100%",
                height: "80%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h4">No data available</Typography>
            </Box>
          )}
          {isError && !isLoading && (
            <Box
              sx={{
                width: "100%",
                height: "80%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h4">Error fetching data</Typography>
            </Box>
          )}
        </TableContainer>
        <Pagination
          // hardcoding the page count to 25 according to api limitations (page limit is 25 for requests without access token)
          count={25}
          onChange={(_, value) => {
            setPage(value);
          }}
        />
      </CardContent>
    </Card>
  );
}

export default App;
