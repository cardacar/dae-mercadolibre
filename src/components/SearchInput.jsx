import React, { useContext } from "react";
import { Box, InputBase } from "@mui/material";
import { InitialContext } from "../context/Context";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { getAllProducts } from "../service/mercadolibreService";

const SearchContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  position: "relative",
  backgroundColor: theme.palette.common.white,
  height: "36px",
  width: "100%",
  borderRadius: "1px",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.common.black,
  fontSize: "15px",
  opacity: 1,
  width: "100%",

  "& .MuiInputBase-input": {
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    paddingLeft: "1rem",
  },
}));

const SearchInput = () => {
  const { productContext, setProductContext } = useContext(InitialContext);

  const getAllProductSearch = (search) => {
    getAllProducts(search).then((res) => {
      setProductContext({ ...productContext, allProducts: res.data.results });
    });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      getAllProductSearch(productContext.searchInputText);
    }
  };

  return (
    <Box display="flex">
      <SearchContainer>
        <StyledInputBase
          placeholder="Buscar"
          onChange={(e) =>
            setProductContext({
              ...productContext,
              searchInputText: e.target.value,
            })
          }
          onKeyUp={(e) => handleKeyPress(e)}
        />
        <SearchIconWrapper>
          <Divider orientation="vertical" flexItem />
          <IconButton
            onClick={() => getAllProductSearch(productContext.searchInputText)}
            sx={{ "&:hover": { backgroundColor: "transparent" } }}
          >
            <SearchIcon />
          </IconButton>
        </SearchIconWrapper>
      </SearchContainer>
    </Box>
  );
};

export default SearchInput;
