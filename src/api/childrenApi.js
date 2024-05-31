import supabase from "../api/supabase";

export async function getChildren() {
  const { data: children, error } = await supabase.from("children").select("*");

  if (error) {
    console.log("Error", error.message);
    throw new Error("Child/Children could not be loaded");
  }

  return children;
}

export async function createEditChild(newChild, id) {
  //todo: Handle IMG editing

  let query = supabase.from("children");

  // ----------------------- //
  if (!id) query = query.insert([{ ...newChild }]);
  // ----------------------- //
  if (id) query = query.update({ ...newChild }).eq("id", id);
  // ----------------------- //
  const { data, error } = await query.select().single();
  // ----------------------- //

  if (error) {
    console.log("Error");
    throw new error("Child could not be created");
  }
  //todo: Upload IMG

  return data;
}
