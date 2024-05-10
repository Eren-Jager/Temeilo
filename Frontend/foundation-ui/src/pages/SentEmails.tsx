import React, { useEffect, useState } from "react";
import api from "../api/api";
import { Typography, Button } from "@mui/material";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import EmailSection from "../components/EmailSection";

const SentEmails = () => {
  const [emails, setEmails] = useState<[]>([]);

  const fetchEmails = async () => {
    const response = await api.get("/emails");
    setEmails(
      response.data.map((email: any) => ({
        ...email.nonprofit,
        message: email.message,
      }))
    );
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{ fontWeight: 600, color: "rgb(30 41 59)" }}
          variant="h3"
        >
          Sent Emails
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <Button
            variant="outlined"
            sx={{ textTransform: "none" }}
            endIcon={<RotateLeftIcon />}
            onClick={() => fetchEmails()}
          >
            Refresh
          </Button>
        </div>
      </div>
      <div style={{ display: "flex", paddingTop: 25 }}>
        <EmailSection emails={emails} />
      </div>
    </div>
  );
};

export default SentEmails;
