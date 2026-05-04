type User = {
  projectId?: string;
  role?: string;
};

export const canAccessProject = (user: User, projectId: string) => {
  if (!user) return false;

  return user.projectId === projectId;
};

export const isAdmin = (user: User) => {
  return user?.role === "admin";
};