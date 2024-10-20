import teamMember1 from "@/assets/team_member_1.png";
import teamMember2 from "@/assets/team_member_2.png";
import teamMember3 from "@/assets/team_member_3.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

// Corrected teamData array with direct image assignment
const teamData = [
  {
    id: 1,
    name: "Dr. John Doe",
    position: "Chief Pharmacist",
    description:
      "Expertise in pharmaceutical care with 15+ years of experience.",
    image: teamMember1,
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    position: "Senior Medical Advisor",
    description:
      "Bringing advanced medical insights to ensure optimal patient care.",
    image: teamMember2,
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  {
    id: 3,
    name: "Mr. Alex Johnson",
    position: "Operations Manager",
    description:
      "Overseeing daily operations to ensure seamless service delivery.",
    image: teamMember3,
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
];

const teamCardStyle = {
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  borderRadius: "12px",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
  },
};

export default function TeamMemberSection() {
  return (
    <Box sx={{ py: 10, bgcolor: "#f9f9f9" }}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
          Meet Our Team
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color="text.secondary"
          mb={6}
          maxWidth="600px"
          mx="auto"
        >
          Our team of dedicated professionals is here to ensure you have access
          to safe and effective medications.
        </Typography>
        <Grid container spacing={4}>
          {teamData.map((member) => (
            <Grid item xs={12} sm={6} md={4} key={member.id}>
              <Card sx={teamCardStyle}>
                <CardMedia sx={{ height: 300, position: "relative" }}>
                  <Image
                    src={member.image}
                    alt={`${member.name} image`}
                    layout="fill"
                    objectFit="cover"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </CardMedia>
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h6" fontWeight="bold">
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={1}>
                    {member.position}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.description}
                  </Typography>
                  <Box mt={2} display="flex" justifyContent="center" gap={1}>
                    <Link href={member.linkedin} passHref>
                      <IconButton color="primary">
                        <LinkedInIcon />
                      </IconButton>
                    </Link>
                    <Link href={member.twitter} passHref>
                      <IconButton color="primary">
                        <TwitterIcon />
                      </IconButton>
                    </Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
