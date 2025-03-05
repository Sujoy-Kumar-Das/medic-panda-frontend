import { Box, Card, CardContent, Divider, Skeleton } from "@mui/material";

const UserDetailsCardSkeleton = () => {
  return (
    <Card
      sx={{
        mx: "auto",
        gap: 2,
        p: 3,
        width: "100%",
        maxWidth: 500,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: "#f9f9f9",
        height: "auto",
      }}
    >
      {/* User Image */}
      <Skeleton
        variant="circular"
        width={100}
        height={100}
        sx={{ mx: "auto" }}
      />

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 0,
          width: "100%",
        }}
      >
        <Skeleton variant="text" width={120} height={28} />

        <Skeleton variant="text" width={180} height={20} sx={{ mt: 1 }} />

        {/* Verified Status */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
          <Skeleton variant="circular" width={24} height={24} />
          <Skeleton variant="text" width={100} height={20} />
        </Box>

        <Skeleton variant="text" width={200} height={20} sx={{ mt: 1 }} />
        <Skeleton variant="text" width={150} height={20} sx={{ mt: 1 }} />

        {/* Block Status */}
        <Box mt={2}>
          <Skeleton
            variant="rectangular"
            width={100}
            height={32}
            sx={{ borderRadius: 1 }}
          />
        </Box>
      </CardContent>

      <Divider sx={{ width: "100%", my: 2 }} />

      {/* Extra Information */}
      <Box sx={{ textAlign: "center", width: "100%", mt: 2 }}>
        <Skeleton variant="text" width={220} height={20} />
        <Skeleton variant="text" width={200} height={20} sx={{ mt: 1 }} />
      </Box>
    </Card>
  );
};

export default UserDetailsCardSkeleton;
