import { Box, Button, TextField, Typography, styled } from "@mui/material";
import { useState } from "react";
import { saveInvoice } from "../services/api";

const Components = styled(Box)({
  marginTop: 20,
  "& > p": {
    fonstSize: 26,
    marginBottom: 10,
  },
  "& > div > div": {
    marginRight: 20,
    midWith: 200,
  },
});

const defaultObj = {
  vendor: "",
  product: "",
  amount: "",
  date: "",
  action: "pending",
};

export default function AddInvoice() {
  const [invoice, setInvoice] = useState(defaultObj);

  const onValueChange = (e) => {
    setInvoice({
      ...invoice,
      [e.target.name]: e.target.value,
    });
  };

  const addNewInvoice = async () => {
    await saveInvoice({ ...invoice, amount: Number(invoice["amount"]) });
  };

  return (
    <Components>
      <Box>
        <Typography>Add Invoice</Typography>
        <TextField
          variant="standard"
          placeholder="Enter vendor name"
          onChange={(e) => onValueChange(e)}
          name="vendor"
          autoComplete="off"
        />
        <TextField
          variant="standard"
          placeholder="Enter product name"
          onChange={(e) => onValueChange(e)}
          name="product"
          autoComplete="off"
        />

        <TextField
          variant="standard"
          type="number"
          placeholder="Enter amount (in Rs)"
          onChange={(e) => onValueChange(e)}
          name="amount"
          autoComplete="off"
        />

        <TextField
          variant="standard"
          type="date"
          placeholder="Enter date"
          onChange={(e) => onValueChange(e)}
          name="date"
          autoComplete="off"
        />

        <Button variant="contained" onClick={() => addNewInvoice}>
          Add Inovice
        </Button>
      </Box>
    </Components>
  );
}
