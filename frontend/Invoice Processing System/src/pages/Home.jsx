import { Box, Button, Typography } from "@mui/material";
import Header from "../components/Header";
import AddInvoice from "../components/AddInvoice";
import { useState } from "react";

export default function Home() {
  const [addInvoice, setAddInvoice] = useState(false);

  const toggleInvoice = () => {
    setAddInvoice(true);
  };
  return (
    <>
      <Header />
      <Box style={{ margin: 20 }}>
        <Typography variant="h4">Pending Invoices</Typography>

        {!addInvoice && (
          <Button
            variant="contained"
            style={{ marginTop: 15 }}
            onChange={addInvoice}
            onClick={toggleInvoice}
          >
            Add Invoice
          </Button>
        )}

        {addInvoice && <AddInvoice />}
      </Box>
    </>
  );
}
