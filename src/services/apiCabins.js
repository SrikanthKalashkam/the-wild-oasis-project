import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("Cabins cannot be loaded");
  }

  return data;
}

export async function createEditCabin(newCabin, id) {
  console.log("createEditCabin", newCabin, id);
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replace("/", "");
  const imagePath = hasImagePath
    ? newCabin.image //image exists, edit mode
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`; //create mode

  let query = supabase.from("cabins");

  //Create a Cabin
  if (!id) {
    query = query.insert([{ ...newCabin, image: imagePath }]);
  }

  //Edit a Cabin
  if (id) {
    query = query.update({ ...newCabin, image: imagePath }).eq("id", id);
  }

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error.message);
    throw new Error("Cabin could not be created");
  }

  //upload image
  if (hasImagePath) return data;
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  //Delete cabin if there is a storage error
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(error.message);
    throw new Error(
      "Cabin image could not be uploaded and cabin was not created."
    );
  }
  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error.message);
    throw new Error("Cabin could not be deleted");
  }

  return data;
}
