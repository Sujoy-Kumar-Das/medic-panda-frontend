"use client";
import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import SendIcon from "@mui/icons-material/Send";
import { Button, Card, Stack, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";

export default function SendMessageCompo() {
  const handleContactUs = (values: FieldValues) => {
    console.log(values);
  };

  return (
    <Card
      sx={{
        backgroundColor: "background.paper",
        boxShadow: 3,
        p: 4,
        flexGrow: 1,
        borderRadius: 2,
      }}
    >
      <Typography
        variant="h5"
        sx={{ mb: 3, color: "text.primary", fontWeight: "bold" }}
      >
        Send Us a Message
      </Typography>
      <PandaForm onSubmit={handleContactUs}>
        <Stack direction={"column"} gap={3}>
          <PandaInputField name="name" fullWidth type="text" label="Name" />
          <PandaInputField name="email" type="email" fullWidth label="Email" />
          <PandaInputField
            name="subject"
            fullWidth
            label="Subject"
            type="text"
          />
          <PandaInputField
            name="message"
            fullWidth
            label="Message"
            type="text"
            multiline
            rows={4}
          />
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            type="submit" // Ensure the button submits the form
            sx={{
              backgroundColor: "primary.main",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
              color: "#fff",
              borderRadius: 2,
            }}
          >
            Send Message
          </Button>
        </Stack>
      </PandaForm>
    </Card>
  );
}
