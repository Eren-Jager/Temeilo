import React, { useState } from "react";
import api from "../api/api";
import { Button, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const NonprofitForm = ({ handleClose, getNonprofits }: any) => {
  const [nonprofits, setNonprofits] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    console.log(nonprofits);
    event.preventDefault();
    try {
      const response = await api.post("/nonprofits", {
        name: nonprofits.name,
        email: nonprofits.email,
        address: nonprofits.address,
      });
      console.log("nonprofits added:", response.data);
      setNonprofits({ name: "", email: "", address: "" });
    } catch (error) {
      console.error("Error adding nonprofits:", error);
    } finally {
      getNonprofits();
      handleClose();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        padding: "15px",
        gap: "5px",
        flexDirection: "row",
      }}
    >
      <TextField
        label="Name"
        value={nonprofits?.name}
        onChange={(e) => setNonprofits({ ...nonprofits, name: e.target.value })}
      />
      <TextField
        label="Email"
        value={nonprofits?.email}
        onChange={(e) =>
          setNonprofits({ ...nonprofits, email: e.target.value })
        }
      />
      <TextField
        label="Address"
        value={nonprofits?.address}
        onChange={(e) =>
          setNonprofits({ ...nonprofits, address: e.target.value })
        }
      />
      <Button variant="outlined" sx={{ textTransform: "none" }} type="submit">
        <AddIcon />
      </Button>
    </form>
  );
};

export default NonprofitForm;
