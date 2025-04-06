const navbarUserMenu = (role: string) => {
  return [
    { link: "/dashboard/", text: "Profile" },
    { link: `/dashboard/${role}`, text: "Dashboard" },
  ];
};

export default navbarUserMenu;
