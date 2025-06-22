import { Button } from "@mui/material";

const InvoiceDownloadButton = ({ loading }: { loading: RegExp | boolean }) => (
  <Button
    variant="contained"
    color="primary"
    fullWidth
    disabled={Boolean(loading)}
  >
    {loading ? "Generating Invoice..." : "Download Invoice"}
  </Button>
);

export default InvoiceDownloadButton;
