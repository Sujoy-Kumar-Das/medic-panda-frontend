import { USER_ROLE } from "@/constants/user.role";
import { IDashboardRoute } from "@/types";
import AddIcon from "@mui/icons-material/Add";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import BlockOutlinedIcon from "@mui/icons-material/BlockOutlined";
import BorderAllOutlinedIcon from "@mui/icons-material/BorderAllOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PaidIcon from "@mui/icons-material/Paid";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SecurityIcon from "@mui/icons-material/Security";
const dashboardRoutes: IDashboardRoute[] = [
  {
    text: "Dashboard",
    link: "/dashboard/user",
    icon: <DashboardIcon />,
    access: [USER_ROLE.user],
  },
  {
    text: "Dashboard",
    link: "/dashboard/admin",
    icon: <DashboardIcon />,
    access: [USER_ROLE.admin, USER_ROLE.superAdmin],
  },
  {
    text: "Manage Account",
    link: "/dashboard",
    icon: <ManageAccountsIcon />,
    access: [USER_ROLE.user, USER_ROLE.admin, USER_ROLE.superAdmin],
  },
  {
    text: "Payment & Instalment",
    link: "/dashboard/user/payments",
    icon: <PaidIcon />,
    access: [USER_ROLE.user],
  },
  {
    text: "Orders",
    link: "/dashboard/user/orders",
    icon: <LocalMallOutlinedIcon />,
    access: [USER_ROLE.user],
  },
  {
    text: "Wish List",
    link: "/dashboard/user/wish-list",
    icon: <FavoriteIcon />,
    access: [USER_ROLE.user],
  },
  {
    text: "Security & Access",
    link: "/dashboard/user/security",
    icon: <SecurityIcon />,
    access: [USER_ROLE.user],
  },
  {
    text: "Notification",
    link: "/dashboard/user/notification",
    icon: <NotificationsIcon />,
    access: [USER_ROLE.user],
  },
  {
    text: "Users",
    link: "/dashboard/admin/all-users",
    icon: <PeopleAltOutlinedIcon />,
    access: [USER_ROLE.admin, USER_ROLE.superAdmin],
  },
  {
    text: "Blocked Users",
    link: "/dashboard/admin/block-users",
    icon: <BlockOutlinedIcon />,
    access: [USER_ROLE.admin, USER_ROLE.superAdmin],
  },
  {
    text: "Products",
    link: "/dashboard/admin/all-products",
    icon: <Inventory2Icon />,
    access: [USER_ROLE.admin, USER_ROLE.superAdmin],
  },
  {
    text: "Create Product",
    link: "/dashboard/admin/create-product",
    icon: <AddIcon />,
    access: [USER_ROLE.admin, USER_ROLE.superAdmin],
  },
  {
    text: "Orders",
    link: "/dashboard/admin/all-orders",
    icon: <BorderAllOutlinedIcon />,
    access: [USER_ROLE.admin, USER_ROLE.superAdmin],
  },
  {
    text: "Completed Orders",
    link: "/dashboard/admin/completed-orders",
    icon: <AddTaskOutlinedIcon />,
    access: [USER_ROLE.admin, USER_ROLE.superAdmin],
  },
  {
    text: "Cancel Orders",
    link: "/dashboard/admin/cancel-orders",
    icon: <CancelOutlinedIcon />,
    access: [USER_ROLE.admin, USER_ROLE.superAdmin],
  },
];

export default dashboardRoutes;