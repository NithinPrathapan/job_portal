"use server";
import connectDB from "@/database/index.js";
import { revalidatePath } from "next/cache";
import Profile from "@/models/profileSchema";

export const createProfileAction = async (formData, path) => {
  console.log('fn call');
  try {
    await connectDB();
    
    const newProfile = await Profile.create(formData);
    console.log(newProfile, "created");
    
    revalidatePath(path);
    
    return {
      success: true,
      message: "Profile created successfully",
    };
  } catch (error) {
    console.error('Error creating profile:', error); // Add error logging
    return {
      success: false,  // Add success flag
      error: error.message,
    };
  }
};

export const fetchProfileAction = async (id) => {
  await connectDB();
  const result = await Profile.findOne({ userId: id });

  return JSON.parse(JSON.stringify(result));
};