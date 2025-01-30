import { fetchProfileAction } from "@/actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const user = await currentUser();
  // console.log(user,'current user form the home page')
  const profileInfo = await fetchProfileAction(user.id);
  // console.log(profileInfo,'from the hom page')

  if (user && !profileInfo?._id) redirect("/onboard");

  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
    </section>
  );
};

export default page;
