export const getAdminMetaQuery = () => {
  return {
    url: "/api/proxy/meta/admin",
    method: "GET",
    withCredentials: true,
  };
};
