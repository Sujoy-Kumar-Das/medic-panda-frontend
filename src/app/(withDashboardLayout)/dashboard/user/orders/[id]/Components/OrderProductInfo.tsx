"use client";
import {
  Card,
  CardContent,
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
interface IOrderProductInfo {
  name: string;
  quantity: number;
  price: number;
}
export default function OrderProductInfo({
  name,
  quantity,
  price,
}: IOrderProductInfo) {
  return (
    <Grid item xs={12}>
      <Card>
        <CardContent>
          <Typography variant="h6" fontWeight="bold" color="text.primary">
            Product in Order
          </Typography>
          <TableContainer component={Paper} sx={{ mt: 2 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Product Name</TableCell>
                  <TableCell align="center">Quantity</TableCell>
                  <TableCell align="right">Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>{name}</TableCell>
                  <TableCell align="center">{quantity}</TableCell>
                  <TableCell align="right">${price.toFixed(2)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Grid>
  );
}
