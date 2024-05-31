import { useQuery } from "@tanstack/react-query";
import { getChildren } from "../../api/childrenApi";
import { useJoin, useUser } from "../users/useUser";

export function useAllChildren() {
  const {
    data: children,
    isPending,
    error,
  } = useQuery({
    queryKey: ["children"],
    queryFn: getChildren,
  });

  return { children, isPending, error };
}

export function useCurrentChildren() {
  const { children, isPending } = useAllChildren();
  const { user, isPending: isLoadingUser } = useUser();
  const { join, isPending: isLoadingJoin } = useJoin();

  if (isPending || isLoadingUser || isLoadingJoin) return;

  const userId = user.id;
  const userToChildren = join.filter((item) => item.user_id === userId);
  const myChildrenIds = userToChildren.map((item) => item.child_id);
  const currentChildren = children.filter((child) =>
    myChildrenIds.includes(child.id),
  );

  return { currentChildren, isPending };
}
