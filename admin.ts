type User = {
  role?: string;
};

export const isAdmin = (user: User) => {
  return user?.role === "admin";
};