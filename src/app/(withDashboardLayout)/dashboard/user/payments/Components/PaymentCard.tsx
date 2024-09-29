import { dateFormatter } from "@/utils/date.formatter";
import { Box, Card, CardContent, Typography } from "@mui/material";

const PaymentCard = ({ paymentHistory }) => {
  console.log(paymentHistory);
  return (
    <Card
      sx={{
        borderRadius: "12px",
        boxShadow: "0px 8px 40px rgba(0, 0, 0, 0.1)",
        marginBottom: "20px",
        backgroundColor: "#FFFFFF",
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: "0px 12px 50px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "#007bff",
            marginBottom: "12px",
          }}
        >
          Transaction ID:
          <span style={{ fontWeight: "normal" }}>
            {paymentHistory.transactionId}
          </span>
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "#2D3748",
            marginBottom: "8px",
            fontStyle: "italic",
          }}
        >
          Product:
          <span style={{ fontWeight: "bold" }}>
            {paymentHistory?.order?.product?.name}
          </span>
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
            padding: "10px 0",
            borderTop: "1px solid #E0E0E0",
            borderBottom: "1px solid #E0E0E0",
          }}
        >
          <Typography variant="body2" sx={{ color: "#4A5568" }}>
            Order Date:
            <span style={{ fontWeight: "500" }}>
              {dateFormatter(paymentHistory.order.createdAt)}
            </span>
          </Typography>
          {paymentHistory?.order?.completedDate && (
            <Typography variant="body2" sx={{ color: "#4A5568" }}>
              Completed Order Date:
              <span style={{ fontWeight: "500" }}>
                {dateFormatter(paymentHistory?.order?.completedDate)}
              </span>
            </Typography>
          )}
        </Box>
        <Typography
          variant="body2"
          sx={{
            color: "#6c757d",
            marginTop: "10px",
          }}
        >
          Status:
          <span style={{ color: "#28a745", fontWeight: "bold" }}>
            {paymentHistory?.order?.status}
          </span>
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#4A5568",
            marginTop: "8px",
          }}
        >
          Transaction Date:
          <span style={{ fontWeight: "500" }}>
            {dateFormatter(paymentHistory.createdAt)}
          </span>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PaymentCard;
