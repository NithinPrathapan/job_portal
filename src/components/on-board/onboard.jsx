"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import CommonForm from "../common-form/commonform";
import {
  initialRecruiterFormData,
  recruiterOnboardFormControls,
} from "@/utils";
import { createProfileAction } from "@/actions";
const OnBoard = () => {
  const [currentTab, setCurrentTab] = useState("candidate");
  const [recruiterFormData, setRecruiterFormData] = useState(
    initialRecruiterFormData
  );
  const [candidateFormData, setCandidateFormData] = useState({});
  console.log(currentTab, "currentTab");
  const handleTabChange = (value) => {
    setCurrentTab(value);
  };
  const handleOnboard = async (formData) => {
    console.log(formData, "formData");
  };

  const validateRecruiterForm = () => {
    return (
      recruiterFormData &&
      recruiterFormData.name.trim() !== "" &&
      recruiterFormData.companyRole.trim() !== "" &&
      recruiterFormData.companyName.trim() !== ""
    );
  };

  // creating profile using the type of the user logged in
  const createProfile = async () => {
    const data =
      currentTab === "candidate"
        ? {
            candidateInfo: candidateFormData,
            role: "candidate",
            isPremiumUser: false,
            userId: user._id,
            email: user?.primaryEmailAddress?.emailAddress,
          }
        : {
            recruiterInfo: recruiterFormData,
            role: "recruiter",
            isPremiumUser: false,
            userId: user._id,
            email: user?.primaryEmailAddress?.emailAddress,
          };

          await createProfileAction(data,'/onboard')
  };

  return (
    <div className="bg-white ">
      <Tabs value={currentTab} onValueChange={handleTabChange}>
        <div className="w-full">
          <div className="flex items-baseline justify-between border-b pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Welcome to the onboarding page
            </h1>
            <TabsList className=" bg-gray-100 text-gray-500">
              <TabsTrigger value="candidate">Candidate</TabsTrigger>
              <TabsTrigger value="recruiter">Recruiter</TabsTrigger>
            </TabsList>
          </div>
        </div>
        <TabsContent value="candidate">candidate</TabsContent>
        <TabsContent value="recruiter">
          <CommonForm
            formControls={recruiterOnboardFormControls}
            buttonText={"onboard as recruiter"}
            action={createProfileAction}
            setFormData={setRecruiterFormData}
            formData={recruiterFormData}
            isButtonDisabled={!validateRecruiterForm()}


          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OnBoard;
