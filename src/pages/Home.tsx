import LoadingUI from "@/components/Skeleton/LoadingUI";
import { useGetAllMoviesQuery } from "@/store/store";

const Home = () => {
  const { data, isLoading, isFetching, isError } = useGetAllMoviesQuery();

  console.log(data);

  if (isLoading || isFetching) {
    return <LoadingUI />;
  }

  if (isError) {
    return <div className="">Error Occured, please try again later</div>;
  }

  return <div className="container max-w-7xl">Home</div>;
};

export default Home;
