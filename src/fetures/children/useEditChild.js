import { useQueryClient, useMutation } from "@tanstack/react-query";
import { createEditChild } from "../../api/childrenApi";
import toast from "react-hot-toast";

export function useEditChild() {
  const queryClient = useQueryClient();

  const { mutate: editChild, isPending: isEditing } = useMutation({
    mutationFn: ({ newChildData, id }) => createEditChild(newChildData, id),

    onSuccess: () => {
      toast.success("Child edited!");
      queryClient.invalidateQueries({
        queryKey: ["children"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { editChild, isEditing };
}
