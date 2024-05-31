import supabase from "./supabase";

export async function getChildrenResponsibilities() {
  const { data, error } = await supabase
    .from("childrenResponsibilities")
    .select("*");

  if (error) {
    console.log("Error", error.message);
    throw new Error("Responsibilities could not be loaded");
  }

  return data;
}

export async function getResponsibilitiesPool() {
  const { data, error } = await supabase
    .from("responsibilities_pool")
    .select("*");

  if (error) {
    console.log("Error", error.message);
    throw new Error("Responsibilities_pool could not be loaded");
  }

  return data;
}
