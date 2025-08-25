import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
export default function BlogCard({ blog }: { blog: any }) {
  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: 3,
        transition: "0.3s",
        "&:hover": { boxShadow: 6 },
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={blog.image}
        alt={blog.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          variant="subtitle2"
          fontWeight="medium"
          color={blog.categoryColor}
          gutterBottom
        >
          {blog.category}
        </Typography>
        <Typography
          variant="h6"
          fontWeight="bold"
          color="text.primary"
          gutterBottom
        >
          {blog.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2}>
          {blog.description}
        </Typography>
        <Link
          href="#"
          underline="none"
          sx={{
            color: "primary.main",
            fontWeight: 500,
            display: "inline-flex",
            alignItems: "center",
            "&:hover": {
              color: "primary.dark",
            },
          }}
        >
          Read More
          <Box ml={0.5} component="span">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Box>
        </Link>
      </CardContent>
    </Card>
  );
}
