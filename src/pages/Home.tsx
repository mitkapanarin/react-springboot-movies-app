import MovieCard from "@/components/Cards/MovieCard";
import PaginationComponent from "@/components/Pagination/PaginationComponent";
import LoadingUI from "@/components/Skeleton/LoadingUI";
import { Button } from "@/components/ui/button";
import { useGetAllMoviesQuery } from "@/store/store";
import { IMoviesData } from "@/types/interface";

const Home = () => {
  const { data, isLoading, isFetching, isError } = useGetAllMoviesQuery();

  console.log(data);

  if (isLoading || isFetching) {
    return <LoadingUI />;
  }

  if (isError) {
    return <div className="">Error Occured, please try again later</div>;
  }

  return (
    <div className="container max-w-9xl mx-auto">
      <div className="flex justify-center mt-6">
        <Button className="">Add Movie</Button>
      </div>
      <PaginationComponent />
      <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-3 justify-center">
        {data?.map((item: IMoviesData) => (
          <MovieCard key={item?._id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
