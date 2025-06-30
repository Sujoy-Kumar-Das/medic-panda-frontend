const getNewAccessToken = async () => {
  return await fetch(`/api/proxy/auth/refresh-token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
};

export default getNewAccessToken;
