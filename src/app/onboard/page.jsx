import React from "react";
import OnBoard from "@/components/on-board/onboard";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { fetchProfileAction } from "@/actions";
const page = async () => {
  const user = await currentUser();
  // console.log("the user", user.id);
  const profileInfo = await fetchProfileAction(user.id);
  // console.log('this is profile info',profileInfo)

  if (profileInfo?.userId) {
    if (profileInfo?.role === "recruiter" && !profileInfo.isPremiumUser)
      redirect("/membership");
    else redirect("/");
  } else {
    return <OnBoard />;
  }
};

export default page;