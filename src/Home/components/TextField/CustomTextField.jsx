import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

// rgba(40,44,75, 0.9)"
const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    borderBottomColor: "2px solid #fff",
  },
  "& .MuiFilledInput-root": {
    color: "#fff",
  },
  "& .MuiInputLabel-root": {
    color: "#fff",
  },
  "& .MuiFilledInput-underline": {
    color: "#fff",
  },
}));

export default CustomTextField;
