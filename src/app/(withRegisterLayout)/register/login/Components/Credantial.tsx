import { Button, Stack, Typography } from "@mui/material";

export default function Credential({
  users,
  onSetDefaultValue,
}: {
  users: string[];
  onSetDefaultValue: (user: string) => void;
}) {
  return (
    <Stack spacing={1} direction="column" my={2}>
      <Typography variant="subtitle1" fontWeight="bold">
        Login Credentials:
      </Typography>
      <Stack direction="row" spacing={2}>
        {users.map((user) => (
          <Button
            key={user}
            onClick={() => onSetDefaultValue(user)}
            variant="outlined"
            size="small"
          >
            {user}
          </Button>
        ))}
      </Stack>
    </Stack>
  );
}
