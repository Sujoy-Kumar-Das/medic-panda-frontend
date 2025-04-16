import { OrderStatus } from "@/types";
import { IOrderInvoicePDF } from "@/types/IOrderDetails";
import calculateTotalSavings from "@/utils/calculateTotalSavings";
import getStatusColor from "@/utils/getStatusColor";
import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

// Register fonts
Font.register({
  family: "Helvetica",
  src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf",
});

Font.register({
  family: "Helvetica-Bold",
  src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf",
});

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    padding: 40,
    fontSize: 12,
    lineHeight: 1.4,
    color: "#333",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  invoiceTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 5,
  },
  invoiceSubtitle: {
    fontSize: 10,
    color: "#7f8c8d",
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#2c3e50",
    borderBottomWidth: 1,
    borderBottomColor: "#ecf0f1",
    paddingBottom: 5,
  },
  gridContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  gridColumn: {
    width: "48%",
  },
  infoLabel: {
    fontSize: 10,
    color: "#7f8c8d",
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 12,
    marginBottom: 8,
  },
  table: {
    width: "100%",
    marginTop: 15,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#f8f9fa",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  tableRow: {
    flexDirection: "row",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  tableCol: {
    paddingHorizontal: 5,
    fontSize: 10,
  },
  colName: {
    width: "40%",
  },
  colQty: {
    width: "15%",
    textAlign: "right",
  },
  colPrice: {
    width: "20%",
    textAlign: "right",
  },
  colTotal: {
    width: "25%",
    textAlign: "right",
  },
  totals: {
    marginTop: 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#ecf0f1",
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 5,
  },
  totalLabel: {
    width: "30%",
    textAlign: "right",
    fontSize: 10,
    color: "#7f8c8d",
  },
  totalValue: {
    width: "20%",
    textAlign: "right",
    fontSize: 12,
  },
  grandTotal: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#2c3e50",
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 40,
    right: 40,
    fontSize: 10,
    textAlign: "center",
    color: "#95a5a6",
    borderTopWidth: 1,
    borderTopColor: "#ecf0f1",
    paddingTop: 10,
  },
  savingsText: {
    fontSize: 8,
    color: "#e74c3c",
  },
});

const OrderInvoicePdf = ({ orderDetails }: IOrderInvoicePDF) => {
  const subtotal =
    Number(orderDetails.orderPrice) * Number(orderDetails.quantity);
  const { hasSavings, savings, totalSavings } = calculateTotalSavings(
    Number(orderDetails.originalPrice),
    Number(orderDetails.orderPrice),
    Number(orderDetails.quantity)
  );

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.invoiceTitle}>MedicPanda</Text>
            <Text style={styles.invoiceTitle}>INVOICE</Text>
            <Text style={styles.invoiceSubtitle}>#{orderDetails.id}</Text>
          </View>
          <View>
            <Text style={styles.infoLabel}>Date Issued</Text>
            <Text style={styles.infoValue}>
              {new Date(String(orderDetails.orderDate)).toLocaleDateString(
                "en-US",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )}
            </Text>
            <Text style={styles.infoLabel}>Status</Text>
            <Text
              style={{
                color: getStatusColor(orderDetails.status as OrderStatus),
                fontWeight: "bold",
              }}
            >
              {orderDetails.status}
            </Text>
          </View>
        </View>

        {/* Bill To & Ship To */}
        <View style={styles.gridContainer}>
          <View style={styles.gridColumn}>
            <Text style={styles.sectionTitle}>Bill To</Text>
            <Text style={styles.infoLabel}>Customer Name</Text>
            <Text style={styles.infoValue}>{orderDetails.customerName}</Text>
            <Text style={styles.infoLabel}>Email</Text>
            <Text style={styles.infoValue}>{orderDetails.email}</Text>
            <Text style={styles.infoLabel}>Contact</Text>
          </View>
          <View style={styles.gridColumn}>
            <Text style={styles.sectionTitle}>Ship To</Text>
            <Text style={styles.infoLabel}>Shipping Address</Text>
            <Text style={styles.infoValue}>{orderDetails.shippingAddress}</Text>
            <Text style={styles.infoLabel}>Order Date</Text>
            <Text style={styles.infoValue}>
              {new Date(String(orderDetails.orderDate)).toLocaleDateString(
                "en-US",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )}
            </Text>
          </View>
        </View>

        {/* Product Table */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Order Details</Text>
          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <Text style={[styles.tableCol, styles.colName]}>ITEM</Text>
              <Text style={[styles.tableCol, styles.colQty]}>QTY</Text>
              <Text style={[styles.tableCol, styles.colPrice]}>UNIT PRICE</Text>
              <Text style={[styles.tableCol, styles.colTotal]}>TOTAL</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={[styles.tableCol, styles.colName]}>
                {orderDetails.productName}
              </Text>
              <Text style={[styles.tableCol, styles.colQty]}>
                {orderDetails.quantity}
              </Text>
              <Text style={[styles.tableCol, styles.colPrice]}>
                ${Number(orderDetails.orderPrice).toFixed(2)}
                {hasSavings && (
                  <Text style={styles.savingsText}>
                    {" "}
                    (Save ${savings.toFixed(2)})
                  </Text>
                )}
              </Text>
              <Text style={[styles.tableCol, styles.colTotal]}>
                ${subtotal.toFixed(2)}
              </Text>
            </View>
          </View>
        </View>

        {/* Totals */}
        <View style={styles.totals}>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Subtotal:</Text>
            <Text style={styles.totalValue}>${subtotal.toFixed(2)}</Text>
          </View>
          {hasSavings && (
            <>
              <View style={styles.totalRow}>
                <Text style={styles.totalLabel}>Discount:</Text>
                <Text style={[styles.totalValue, { color: "#e74c3c" }]}>
                  -${totalSavings.toFixed(2)}
                </Text>
              </View>
              <View style={styles.totalRow}>
                <Text style={styles.totalLabel}>You Saved:</Text>
                <Text style={[styles.totalValue, { color: "#2ecc71" }]}>
                  ${totalSavings.toFixed(2)}
                </Text>
              </View>
            </>
          )}
          <View style={[styles.totalRow, { marginTop: 10 }]}>
            <Text style={[styles.totalLabel, styles.grandTotal]}>Total:</Text>
            <Text style={[styles.totalValue, styles.grandTotal]}>
              ${Number(orderDetails.totalAmount).toFixed(2)}
            </Text>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer} fixed>
          <Text>Thank you for shopping with MedicPanda!</Text>
          <Text>
            If you have any questions, please contact us at
            support@medicpanda.com
          </Text>
          <Text style={{ marginTop: 5 }}>
            Invoice generated on {new Date().toLocaleDateString()}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default OrderInvoicePdf;
