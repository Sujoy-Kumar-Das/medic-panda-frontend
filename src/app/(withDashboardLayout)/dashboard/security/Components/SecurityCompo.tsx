"use client";
import Header from "@/components/shared/header/Header";
import { Container, Grid } from "@mui/material";
import UpdateEmailCompo from "./UpdateEmailCompo";
import UpdatePasswordCompo from "./UpdatePasswordCompo";
import VerifyAccountCompo from "./VerifyAccountCompo";

export default function SecurityCompo({ data }: { data: any }) {
  return (
    <Container>
      {/* Page Header */}
      <Header
        title="Account Security"
        subtitle="Manage your security settings and protect your account with enhanced security measures."
      />

      {/* Grid for Security Options */}
      <Grid container spacing={3}>
        {/* Email Section */}
        <UpdateEmailCompo email={data?.user?.email} />

        {/* Password Section */}
        <UpdatePasswordCompo />

        {/* Verification Section */}

        <VerifyAccountCompo isVerified={data?.user?.isVerified} />
      </Grid>
    </Container>
  );
}
