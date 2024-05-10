import { Button, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import FoundationsSection from "../components/FoundationsSection";
import NonprofitSection from "../components/NonprofitSection";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import api from "../api/api";

const Home = () => {
  const [selectedFoundation, setSelectedFoundation] = useState();
  const [selectedNonprofits, setSelectedNonprofits] = useState();
  const [error, setError] = useState("");
  const sendEmails = async () => {
    try {
      setError("");
      if (!selectedFoundation || !selectedNonprofits) {
        setError(
          "Please select 1 foundation and atleast 1 nonprofit to send emails"
        );
        return;
      }
      const response = await api.post("/emails", {
        foundation: selectedFoundation,
        nonprofits: selectedNonprofits,
      });
      console.log("Emails sent:", response.data);
    } catch (error) {
      console.error("Error sending emails:", error);
    }
  };
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
          Dashboard
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <Tooltip
            title="Please select 1 foundation and atleast 1 nonprofit to send emails"
            placement="left"
          >
            <Button
              variant="outlined"
              sx={{ textTransform: "none" }}
              endIcon={<ForwardToInboxIcon />}
              onClick={() => sendEmails()}
            >
              Send Emails
            </Button>
          </Tooltip>
          {error && (
            <Typography sx={{ color: "red", fontSize: "0.8rem" }}>
              {error}
            </Typography>
          )}
        </div>
      </div>
      <div style={{ display: "flex", paddingTop: 25 }}>
        <div style={{ width: "30vw", paddingRight: 15 }}>
          <FoundationsSection setSelectedFoundation={setSelectedFoundation} />
        </div>
        <div style={{ paddingRight: 15 }}>
          <NonprofitSection setSelectedNonprofits={setSelectedNonprofits} />
        </div>
      </div>
    </div>
  );
};

export default Home;
