import MovieCard from "@/components/Cards/MovieCard";
import InputField from "@/components/Form/InputField";
import SelectField from "@/components/Form/SelectField";
import EventModal from "@/components/Modals/EventModal";
import PaginationComponent from "@/components/Pagination/PaginationComponent";
import LoadingUI from "@/components/Skeleton/LoadingUI";
import { Button } from "@/components/ui/button";
import {
  useGetAllMoviesQuery,
  usePostOneMovieMutation,
  useDeleteOneMovieMutation,
  useUpdateOneMovieMutation,
} from "@/store/store";
import { GenreEnum } from "@/types/enum";
import { IMoviesData } from "@/types/interface";
import { genreOptions } from "@/types/options";
import { useState } from "react";
import { toast } from "sonner";

const Home = () => {
  const { data, isLoading, isFetching, isError } = useGetAllMoviesQuery();
  const [postOneMovie] = usePostOneMovieMutation();
  const [deleteOneMovie] = useDeleteOneMovieMutation();
  const [updateOneMovie] = useUpdateOneMovieMutation();

  const initialState: IMoviesData = {
    description: "",
    genre: genreOptions[0].value,
    image: "",
    rating: 0,
    title: "",
    vote: 0,
    year: 0,
  } as IMoviesData;

  const [newMovie, setNewMovie] = useState<IMoviesData>(
    initialState as IMoviesData,
  );

  const handleUpdate = async (data: IMoviesData) =>
    toast.promise(updateOneMovie(data).unwrap(), {
      loading: "Updating Movie...",
      success: "Movie Updated Successfully",
      error: "Error Occured, please try again later",
    });

  const handleDelete = async (_id: string) =>
    toast.promise(deleteOneMovie({ _id }).unwrap(), {
      loading: "Deleting Movie...",
      success: "Movie Deleted Successfully",
      error: "Error Occured, please try again later",
    });

  const handleSubmit = async () =>
    toast.promise(
      postOneMovie(newMovie)
        .unwrap()
        .then(() => setNewMovie(initialState)),
      {
        loading: "Adding Movie...",
        success: "Movie Added Successfully",
        error: "Error Occured, please try again later",
      },
    );

  if (isLoading || isFetching) {
    return <LoadingUI />;
  }

  if (isError) {
    return <div className="">Error Occured, please try again later</div>;
  }

  return (
    <div className="container max-w-9xl mx-auto">
      <div className="flex justify-center mt-6">
        <EventModal
          confirmButtonText="Create Movie"
          dialogueDescription="Once you're done, click on the button below to add the movie to the list."
          dialogueTitle="Add Movie Details"
          onConfirm={handleSubmit}
          button={<Button className="">Add Movie</Button>}
        >
          <div className="flex flex-col gap-2 my-4">
            <InputField
              label="Movie Title"
              name="title"
              placeholder="Enter Movie Title"
              type="text"
              description="Enter the title of the movie you want to add."
              required
              onChange={(e) =>
                setNewMovie({
                  ...newMovie,
                  title: e.target.value,
                })
              }
              value={newMovie.title}
            />
            <InputField
              label="Publish Year"
              name="year"
              placeholder="Enter Publish Year"
              type="number"
              description="When was the movie published? Enter the year here."
              required
              onChange={(e) =>
                setNewMovie({
                  ...newMovie,
                  year: Number(e.target.value),
                })
              }
              value={newMovie.year}
            />
            <SelectField
              label="Genre"
              onValueChange={(e: GenreEnum) =>
                setNewMovie({
                  ...newMovie,
                  genre: e,
                })
              }
              options={genreOptions}
              value={newMovie.genre}
              required
            />
            <InputField
              label="Description"
              name="description"
              placeholder="Enter Description"
              type="text"
              description="Write a short description of the movie you want to add."
              required
              onChange={(e) =>
                setNewMovie({
                  ...newMovie,
                  description: e.target.value,
                })
              }
              value={newMovie.description}
            />
          </div>
        </EventModal>
      </div>
      <PaginationComponent />
      <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-3 justify-center">
        {data?.map((item: IMoviesData) => (
          <MovieCard
            key={item?._id}
            {...item}
            deleteFn={handleDelete}
            updateFn={handleUpdate}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
