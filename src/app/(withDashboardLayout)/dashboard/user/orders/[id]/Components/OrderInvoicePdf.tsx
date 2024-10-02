import { IOrderDetails } from "@/types";
import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

// Define styles for the invoice
const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    padding: 30,
    fontSize: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 80,
    height: 80,
  },
  companyInfo: {
    textAlign: "right",
  },
  section: {
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    borderBottomStyle: "solid",
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "#333",
  },
  info: {
    marginBottom: 5,
    fontSize: 12,
    lineHeight: 1.5,
  },
  table: {
    display: "flex",
    width: "auto",
    margin: "10px 0",
  },
  tableRow: {
    flexDirection: "row",
  },
  tableColHeader: {
    width: "25%",
    padding: 5,
    backgroundColor: "#f0f0f0",
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    borderBottomStyle: "solid",
    textAlign: "left",
  },
  tableCol: {
    width: "25%",
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    borderBottomStyle: "solid",
    textAlign: "left",
  },
  tableCell: {
    fontSize: 12,
  },
  totalAmount: {
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 10,
    textAlign: "right",
    color: "#333",
  },
  footer: {
    marginTop: 30,
    fontSize: 10,
    textAlign: "center",
    color: "#666",
  },
});

// Invoice PDF Document Component
const OrderInvoicePdf = ({ orderDetails }: { orderDetails: IOrderDetails }) => {
  const {
    customerName,
    shippingAddress,
    orderDate,
    status,
    product,
    totalAmount,
  } = orderDetails;

  return (
    <Document>
      <Page style={styles.page}>
        {/* Title */}
        <Text style={styles.title}>Invoice</Text>

        {/* Order Information */}
        <View style={styles.section}>
          <Text style={styles.info}>Invoice ID: #{orderDetails.id}</Text>
          <Text style={styles.info}>Order Date: {orderDate}</Text>
          <Text style={styles.info}>Order Status: {status}</Text>
        </View>

        {/* Customer Information */}
        <View style={styles.section}>
          <Text style={styles.info}>Customer: {customerName}</Text>
          <Text style={styles.info}>Shipping Address: {shippingAddress}</Text>
        </View>

        {/* Product Information */}
        <View style={styles.section}>
          <View style={styles.table}>
            {/* Table Header */}
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>Product Name</Text>
              <Text style={styles.tableColHeader}>Quantity</Text>
              <Text style={styles.tableColHeader}>Price</Text>
              <Text style={styles.tableColHeader}>Total</Text>
            </View>

            {/* Product Row */}
            <View style={styles.tableRow}>
              <Text style={styles.tableCol}>{product?.name}</Text>
              <Text style={styles.tableCol}>{product?.quantity}</Text>
              <Text style={styles.tableCol}>${product?.price.toFixed(2)}</Text>
              <Text style={styles.tableCol}>
                ${(product?.quantity * product?.price).toFixed(2)}
              </Text>
            </View>
          </View>
        </View>

        {/* Total Amount */}
        <Text style={styles.totalAmount}>
          Total: ${Number(totalAmount).toFixed(2)}
        </Text>

        {/* Footer */}
        <Text style={styles.footer}>
          Thank you for your business! Please contact us if you have any
          questions.
        </Text>
      </Page>
    </Document>
  );
};

export default OrderInvoicePdf;
