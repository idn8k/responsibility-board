import { useQuery } from "@tanstack/react-query";
import { getChildren } from "../../api/childrenApi";

export function useChildResponsible() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["children"],
    queryFn: getChildren,
  });

  return { data, isLoading, error };
}
