import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: "1px solid lightgray",
          paddingBlock: 8,
          paddingInline: 8,
          minWidth: 0,
          minHeight: 0,
          color: "#555",
          ":hover": {
            border: "1px solid lightgray",
          },
          ":focus": {
            outline: "none",
          },
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          paddingTop: 16,
          alignSelf: "center",
          "& .MuiPaginationItem-root": {
            ":focus": {
              outline: "none",
            },
          },
        },
      },
    },
  },
});
