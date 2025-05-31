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
        p: { xs: 3, md: 4 },
        height: "100%",
        "&:hover": {},
        transition: "all 0.3s ease",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          mb: 3,
          color: "text.primary",
          fontWeight: 700,
          fontSize: { xs: "1.5rem", md: "1.75rem" },
        }}
      >
        Send Us a Message
      </Typography>
      <PandaForm onSubmit={handleContactUs}>
        <Stack direction={"column"} spacing={3}>
          <PandaInputField
            name="name"
            fullWidth
            type="text"
            label="Full Name"
            size="small"
          />
          <PandaInputField
            name="email"
            type="email"
            fullWidth
            label="Email Address"
            size="small"
          />
          <PandaInputField
            name="subject"
            fullWidth
            label="Subject"
            type="text"
            size="small"
          />
          <PandaInputField
            name="message"
            fullWidth
            label="Your Message"
            type="text"
            multiline
            rows={5}
            size="small"
          />
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            type="submit"
            sx={{
              py: 1.5,
              px: 4,
              fontWeight: 600,
              fontSize: "1rem",
              textTransform: "capitalize",
              alignSelf: { xs: "stretch", sm: "flex-start" },
              "&:hover": {
                transform: "translateY(-2px)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Send Message
          </Button>
        </Stack>
      </PandaForm>
    </Card>
  );
}
