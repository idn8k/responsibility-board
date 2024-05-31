import { useQueryClient, useMutation } from "@tanstack/react-query";
import { createEditChild } from "../../api/childrenApi";
import toast from "react-hot-toast";

export function useCreateChild() {
  const queryClient = useQueryClient();

  const { mutate: createChild, isPending: isCreating } = useMutation({
    mutationFn: createEditChild,

    onSuccess: () => {
      toast.success("New child created!");
      queryClient.invalidateQueries({
        queryKey: ["children"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { createChild, isCreating };
}
