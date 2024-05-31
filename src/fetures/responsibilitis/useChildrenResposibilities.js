import { useQuery } from "@tanstack/react-query";
import {
  getChildrenResponsibilities,
  getResponsibilitiesPool,
} from "../../api/responsibilityApi";

export function useChildrenResposibilities() {
  const { data, isPending, error } = useQuery({
    queryKey: ["responsibilities"],
    queryFn: getChildrenResponsibilities,
  });

  return { data, isPending, error };
}

export function useResponsibilitiesPool() {
  const { data, isPending, error } = useQuery({
    queryKey: ["responsibilikties_pool"],
    queryFn: getResponsibilitiesPool,
  });

  return { data, isPending, error };
}
