"use client";
import calculateTotalSavings from "@/utils/calculateTotalSavings";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import NumbersIcon from "@mui/icons-material/Numbers";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Image from "next/image";

interface IOrderProductInfo {
  name: string;
  quantity: number;
  price: number;
  orderPrice: number;
  imageUrl?: string;
}

export default function OrderProductInfo({
  name,
  quantity,
  price,
  orderPrice,
  imageUrl,
}: IOrderProductInfo) {
  const { hasSavings, totalSavings } = calculateTotalSavings(
    price,
    orderPrice,
    quantity
  );

  return (
    <Grid item xs={12}>
      <Card
        sx={{
          borderRadius: 2,
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        }}
      >
        <CardContent>
          <Box display="flex" alignItems="center" mb={2}>
            <LocalMallIcon color="primary" sx={{ mr: 1, fontSize: 28 }} />
            <Typography variant="h6" fontWeight="bold" color="text.primary">
              Product Details
            </Typography>
          </Box>

          <TableContainer
            component={Paper}
            sx={{
              mt: 2,
              borderRadius: 2,
              overflow: "hidden",
              border: "1px solid",
              borderColor: "divider",
            }}
          >
            <Table>
              <TableHead sx={{ bgcolor: "action.hover" }}>
                <TableRow>
                  <TableCell sx={{ width: "45%" }}>Product</TableCell>
                  <TableCell align="center" sx={{ width: "15%" }}>
                    Quantity
                  </TableCell>
                  <TableCell align="right" sx={{ width: "20%" }}>
                    Unit Price
                  </TableCell>
                  <TableCell align="right" sx={{ width: "20%" }}>
                    Total
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Box display="flex" alignItems="center">
                      <Avatar
                        variant="rounded"
                        sx={{
                          width: 56,
                          height: 56,
                          mr: 2,
                          bgcolor: "background.default",
                        }}
                      >
                        {imageUrl ? (
                          <Image
                            src={imageUrl}
                            alt={name}
                            width={56}
                            height={56}
                            style={{ objectFit: "cover" }}
                          />
                        ) : (
                          <LocalMallIcon color="action" />
                        )}
                      </Avatar>
                      <Typography fontWeight={500}>{name}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell align="center">
                    <Chip
                      label={quantity}
                      icon={<NumbersIcon fontSize="small" />}
                      color="default"
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell align="right">
                    <Box display="flex" flexDirection="column">
                      {hasSavings && (
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ textDecoration: "line-through" }}
                        >
                          ${price.toFixed(2)}
                        </Typography>
                      )}
                      <Typography
                        variant="body1"
                        fontWeight={600}
                        color={hasSavings ? "success.main" : "text.primary"}
                      >
                        ${orderPrice.toFixed(2)}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="body1" fontWeight={600}>
                      ${(orderPrice * quantity).toFixed(2)}
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          {hasSavings && (
            <Box mt={2} p={2} bgcolor="success.light" borderRadius={2}>
              <Typography variant="body2" color="success.dark">
                <strong>You saved:</strong> ${totalSavings.toFixed(2)} (
                {((1 - orderPrice / price) * 100).toFixed(0)}% discount)
              </Typography>
            </Box>
          )}

          <Box mt={3} p={2} bgcolor="background.paper" borderRadius={2}>
            <Box display="flex" justifyContent="space-between" mb={1}>
              <Typography variant="body1" color="text.secondary">
                Subtotal ({quantity} item{quantity > 1 ? "s" : ""})
              </Typography>
              <Typography variant="body1" fontWeight={600}>
                ${(orderPrice * quantity).toFixed(2)}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="body1" color="text.secondary">
                Total Savings
              </Typography>
              <Typography variant="body1" color="success.main" fontWeight={600}>
                -${hasSavings ? totalSavings.toFixed(2) : "0.00"}
              </Typography>
            </Box>
            <Divider sx={{ my: 1.5 }} />
            <Box display="flex" justifyContent="space-between">
              <Typography variant="body1" fontWeight="bold">
                Order Total
              </Typography>
              <Typography variant="body1" fontWeight="bold">
                ${(orderPrice * quantity).toFixed(2)}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}
