import { useQuery } from "@tanstack/react-query";
import { getCurrentUser, getJoin } from "../../api/authenticationApi";

export function useUser() {
  const { data: user, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return { user, isPending, isAuthenticated: user?.role === "authenticated" };
}

export function useJoin() {
  const { data: join, isPending } = useQuery({
    queryKey: ["join"],
    queryFn: getJoin,
  });

  return { join, isPending };
}
