import React, { useState } from "react";
import api from "../api/api";
import { Button, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const FoundationForm = ({ handleClose, getFoundations }: any) => {
  const [foundation, setFoundation] = useState({ name: "", email: "" });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    console.log(foundation);
    event.preventDefault();
    try {
      const response = await api.post("/foundations", {
        name: foundation.name,
        email: foundation.email,
      });
      console.log("Foundation added:", response.data);
      setFoundation({ name: "", email: "" });
    } catch (error) {
      console.error("Error adding foundation:", error);
    } finally {
      handleClose();
      getFoundations();
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
        value={foundation?.name}
        onChange={(e) => setFoundation({ ...foundation, name: e.target.value })}
      />
      <TextField
        label="Email"
        value={foundation?.email}
        onChange={(e) =>
          setFoundation({ ...foundation, email: e.target.value })
        }
      />
      <Button variant="outlined" sx={{ textTransform: "none" }} type="submit">
        <AddIcon />
      </Button>
    </form>
  );
};

export default FoundationForm;
