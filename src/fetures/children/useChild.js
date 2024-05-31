import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getChild } from "../../api/childrenApi";

export function useChild() {
  const { childId } = useParams();

  const {
    data: child,
    isPending,
    error,
  } = useQuery({
    queryKey: ["child", childId],
    queryFn: () => getChild(childId),
    retry: false,
  });

  return { child, isPending, error };
}
