import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { useState } from "react";
import { Box, IconButton } from "@mui/material";
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `2.5rem`,
 
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  "&": {
    border: "1px solid #ffffff88",
    borderRadius: "30px",
    color: "#fff",
  },
  "&:hover": {
    border: "1px solid #fff",
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  left: '-5px',
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
export default function SearchButton() {
  const [searchActive, setSearchActive] = useState(false);
  return (
    <Box display={"flex"} position={"relative"}>
      <IconButton
        className={`opacity-1 relative z-10 ${
          searchActive && "!opacity-0 !z-0"
        }`}
        onClick={() => setSearchActive(true)}
        color="primary"
        sx={{ border: "1px solid #ffffff88" }}
      >
        <SearchIcon />
      </IconButton>
      <Search
        className={`absolute transition-all duration-500 opacity-0 z-0 -left-2 w-14 ${
          searchActive && "!opacity-100 !-translate-x-48 !w-56"
        }`}
      >
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </Box>
  );
}
