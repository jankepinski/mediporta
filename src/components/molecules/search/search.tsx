import { Button, IconButton, TextField } from "@mui/material";
import { useState } from "react";
import { Close, Search as SearchIcon } from "@mui/icons-material";

export const Search = ({ setValue }: { setValue: (value: string) => void }) => {
  const [search, setSearch] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setValue(search);
      }}
      style={{ display: "flex", gap: 8, marginBottom: 8 }}
    >
      <TextField
        size="small"
        fullWidth
        placeholder="Type in a part of the tag"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        InputProps={{
          endAdornment: search && (
            <IconButton
              onClick={() => {
                setSearch("");
                setValue("");
              }}
            >
              <Close />
            </IconButton>
          ),
        }}
      />
      <Button
        variant="contained"
        type="submit"
        sx={{ color: "white", borderColor: "transparent" }}
      >
        <SearchIcon />
      </Button>
    </form>
  );
};
