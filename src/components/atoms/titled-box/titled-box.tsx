import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

export const TitledBox = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {children}
      <Typography variant="caption">{title}</Typography>
    </Box>
  );
};
