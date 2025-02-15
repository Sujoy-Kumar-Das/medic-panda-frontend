import Header from "../header/Header";
import { IMainHeaderOptions } from "./dashboard.header.type";

function DashboardMainHeader({
  title,
  subtitle,
  children,
}: IMainHeaderOptions) {
  return (
    <Header title={title} subtitle={subtitle}>
      {children}
    </Header>
  );
}

export default DashboardMainHeader;
