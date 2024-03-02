import { Loader2 } from "lucide-react";

const LoadingUI = () => {
  return (
    <div className="flex justify-center items-center h-[95vh] flex-col gap-1">
      <Loader2 className="h-[45px] w-[45px] animate-spin text-primary" />
      <h1 className="text-xl">Loading, please wait....</h1>
    </div>
  );
};

export default LoadingUI;
