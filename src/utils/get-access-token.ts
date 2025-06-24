const getNewAccessToken = async () => {
  return await fetch(
    `${process.env.NEXT_PUBLIC_base_url_local}/auth/refresh-token`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );
};

export default getNewAccessToken;
