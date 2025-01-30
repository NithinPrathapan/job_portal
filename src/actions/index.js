'use server'

import connectDB from "@/database/index.js"


export const createProfileAction = async (formData,path) => {
    try {
        await connectDB()
        await Profile.create(formData)
        revalidatePath(path)
        
        return {
            success: true,
            message: "Profile created successfully"
        }
    } catch (error) {
        return {
            error: error.message
        }
    }
}