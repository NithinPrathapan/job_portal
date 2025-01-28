import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="min-h-[630px] flex items-center  justify-center text-center   h-full w-full bg-zinc-500 mt-5" >
        <h1 className='text-4xl font-bold text-white text-center flex justify-center items-center h-full my-auto'>Loading...</h1>
      </Skeleton>
    </div>
  );
};

export default Loading;
