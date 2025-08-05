import CommonContainer from "@/components/shared/common-container/CommonContainer";
import CommonHeader from "@/components/shared/header/CommonHeader";
import BlogCardsSkeleton from "@/components/skeleton/BlogCardsSkeleton";
import { Box, Button } from "@mui/material";
import Link from "next/link";
import { Suspense } from "react";
import BlogList from "./BlogList";

export default function BlogSection() {
  return (
    <CommonContainer>
      <CommonHeader
        title="Health Tips & Articles"
        subtitle="Read our latest health guides and wellness tips"
      />

      <Suspense fallback={<BlogCardsSkeleton />}>
        <BlogList />
      </Suspense>

      <Box textAlign="center" mt={8}>
        <Button
          component={Link}
          href="/blog"
          variant="outlined"
          size="large"
          sx={{
            borderRadius: "50px",
            textTransform: "none",
            px: 4,
            py: 1.5,
            fontWeight: 500,
            borderColor: "primary.main",
            color: "primary.main",
            "&:hover": {
              bgcolor: "primary.light",
              border: "none",
              color: "primary.contrastText",
              boxShadow: 5,
            },
          }}
        >
          View All Articles
        </Button>
      </Box>
    </CommonContainer>
  );
}
