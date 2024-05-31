import { useForm } from "react-hook-form";
import HeaderMini from "../../ui/HeaderMini";
import Button from "../../ui/Button";
import { useCreateChild } from "../children/useCreateChild";
import { useEditChild } from "../children/useEditChild";

function ChildInfo({ currChild, childToEdit = {} }) {
  const { createChild, isCreating } = useCreateChild();
  const { editChild, isEditing } = useEditChild();

  const isWorking = isCreating || isEditing;

  const { id: editId, ...editValues } = childToEdit;
  const isEditSession = Boolean(editId);

  const { register, reset, handleSubmit, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const { errors } = formState;

  if (!currChild) return null;

  return (
    <>
      <HeaderMini>Child</HeaderMini>
      <form className="mx-auto flex w-3/4 flex-col items-center gap-10">
        <div className="flex w-full items-center justify-around gap-10 border-b p-10 px-10">
          <label className="w-1/4 text-xl text-pokpok-blue" htmlFor="">
            First name
          </label>
          <input
            className="h-10 w-3/4 rounded-md px-3 shadow-[inset_0_1px_2px_2px_rgba(0,0,0,0.07)]"
            type="text"
            value={currChild.first_name}
            disabled={isWorking}
            id="first_name"
            {...register("first_name", {
              required: "This field is requierd",
            })}
          />
        </div>
        <div className="flex w-full items-center justify-around gap-10 border-b p-10 px-10">
          <label className="w-1/4 text-xl text-pokpok-blue" htmlFor="">
            Last name
          </label>
          <input
            className="h-10 w-3/4 rounded-md px-3 shadow-[inset_0_1px_2px_2px_rgba(0,0,0,0.07)]"
            type="text"
            disabled={isWorking}
            id="last_name"
            {...register("last_name", {
              required: "This field is requierd",
            })}
          />
        </div>
        <div className="flex w-full items-center justify-around gap-10 border-b p-10 px-10">
          <label className="w-1/4 text-xl text-pokpok-blue" htmlFor="">
            Birth date
          </label>
          <input
            className="h-10 w-3/4 rounded-md px-3 text-gray-400 shadow-[inset_0_1px_2px_2px_rgba(0,0,0,0.07)]"
            type="date"
            disabled={isWorking}
            id="date_of_birth"
            {...register("date_of_birth", {
              required: "This field is requierd",
            })}
          />
        </div>
        <div className="flex w-full items-center gap-20 border-b p-10 px-10">
          <Button variation="full" isPending={false}>
            Child photo
          </Button>
          <p>No file chosen</p>
        </div>
      </form>
    </>
  );
}

export default ChildInfo;
