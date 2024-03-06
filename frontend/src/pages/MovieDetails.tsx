import { useParams, Link } from "react-router-dom";
import {
  useGetOneMovieByIdQuery,
  useSubmitReviewMutation,
} from "@/store/store";
import MovieCard from "@/components/Cards/MovieCard";
import LoadingUI from "@/components/Skeleton/LoadingUI";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { IMoviesData } from "@/types/interface";

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [submitReview] = useSubmitReviewMutation();
  const { data, isError, isLoading, isFetching } = useGetOneMovieByIdQuery({
    _id: id as string,
  });

  const submitReviewFn = async (
    _id: string,
    reviewState: {
      review: string;
      rating: number;
    },
  ) =>
    toast.promise(submitReview({ _id, ...reviewState }).unwrap(), {
      loading: "Submitting Review...",
      success: "Review Submitted Successfully",
      error: "Error Occured, please try again later",
    });
  console.log(data);
  if (isLoading || isFetching) {
    return <LoadingUI />;
  }
  if (isError) {
    return <div>Error occured, please try again</div>;
  }
  return (
    <div className="container max-w-8xl">
      <Link to="/">
        <Button>Go Back</Button>
      </Link>
      <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-10 justify-center">
        {/* @ts-ignore */}
        <MovieCard {...(data as IMoviesData)} reviewFn={submitReviewFn} />
        <div className="">
          <h1 className="text-2xl font-semibold mt-4 mb-8">
            Reviews From People
          </h1>
          <ul className="list-disc">
            {data?.stats?.review?.length == 0 ? (
              <div className="">
                <p>No Reviews Found, Be the first one to review this !</p>
              </div>
            ) : (
              data?.stats?.review?.map((item, index) => {
                return (
                  <li key={index} className="list-item">
                    {item}
                  </li>
                );
              })
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
