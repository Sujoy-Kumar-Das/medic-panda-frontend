import { dateFormatter } from "@/utils/date.formatter";
import { Box, Card, CardContent, Typography } from "@mui/material";

interface IPaymentHistory {
  order: {
    product: {
      name: string;
    };
    createdAt: string;
    completedDate?: string;
    status: string;
  };
  transactionId: string;
  createdAt: string;
}

interface IPaymentCardProps {
  paymentHistory: IPaymentHistory;
}

const PaymentCard = ({ paymentHistory }: IPaymentCardProps) => {
  const { order, transactionId, createdAt } = paymentHistory;
  return (
    <Card
      sx={{
        borderRadius: "12px",
        boxShadow: "0px 8px 40px rgba(0, 0, 0, 0.1)",
        marginBottom: "20px",
        backgroundColor: "background.main",
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
          <span style={{ fontWeight: "normal" }}>{transactionId}</span>
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
              {dateFormatter(order.createdAt)}
            </span>
          </Typography>
          {order?.completedDate && (
            <Typography variant="body2" sx={{ color: "#4A5568" }}>
              Completed Order Date:
              <span style={{ fontWeight: "500" }}>
                {dateFormatter(order?.completedDate)}
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
          <span
            style={{
              color: "#28a745",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            {order?.status}
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
          <span style={{ fontWeight: "500" }}>{dateFormatter(createdAt)}</span>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PaymentCard;
