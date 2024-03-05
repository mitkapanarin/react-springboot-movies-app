import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IMoviesData } from "@/types/interface";
import { FC, useState } from "react";
import { Button } from "../ui/button";
import { CiStar, CiCalendar } from "react-icons/ci";
import { BiCategory } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MdModeEdit } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import EventModal from "../Modals/EventModal";
import InputField from "../Form/InputField";
import SelectField from "../Form/SelectField";
import { GenreEnum } from "@/types/enum";
import { genreOptions } from "@/types/options";

const MovieCard: FC<
  IMoviesData & {
    deleteFn: (id: string) => void;
    updateFn: (data: IMoviesData) => void;
    reviewFn: (
      id: string,
      reviewState: { review: string; rating: number },
    ) => void;
  }
> = ({
  _id,
  genre,
  image,
  rating,
  title,
  vote,
  year,
  description,
  deleteFn,
  updateFn,
  reviewFn,
}) => {
  const [data, setData] = useState<IMoviesData>({
    _id,
    genre,
    image,
    rating,
    title,
    year,
    description,
    vote,
  });

  const [reviewState, setReviewState] = useState({
    rating: 0,
    review: "",
  });

  return (
    <Card className="">
      <img src={image ? image : "/no-image-available.svg"} alt="" />
      <CardHeader className="p-4">
        <CardTitle className="flex justify-between items-center">
          <h1 className="capitalize">{title}</h1>
          <div className="flex gap-2">
            <EventModal
              dialogueTitle="Edit Movie"
              confirmButtonText="Update Movie"
              dialogueDescription="Once you're done, click on the button below to update the movie details."
              onConfirm={() =>
                updateFn({
                  ...data,
                  _id,
                }) as any
              }
              button={
                <Button size="sm" variant="secondary" className="text-sm">
                  <MdModeEdit className="w-4 h-4" />
                </Button>
              }
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
                    setData({
                      ...data,
                      title: e.target.value,
                    })
                  }
                  value={data.title}
                />
                <InputField
                  label="Publish Year"
                  name="year"
                  placeholder="Enter Publish Year"
                  type="number"
                  description="When was the movie published? Enter the year here."
                  required
                  onChange={(e) =>
                    setData({
                      ...data,
                      year: Number(e.target.value),
                    })
                  }
                  value={data.year}
                />
                <SelectField
                  label="Genre"
                  onValueChange={(e: GenreEnum) =>
                    setData({
                      ...data,
                      genre: e,
                    })
                  }
                  options={genreOptions}
                  value={data.genre}
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
                    setData({
                      ...data,
                      description: e.target.value,
                    })
                  }
                  value={data.description}
                />
              </div>
            </EventModal>
            <Button
              onClick={() => deleteFn(_id)}
              size="sm"
              variant="destructive"
              className="text-xs"
            >
              <FaRegTrashAlt className="w-4 h-4" />
            </Button>
          </div>
        </CardTitle>
        <CardDescription className="">{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 py-0 flex gap-2 flex-wrap">
        <Button variant="outline" size="sm" className="flex gap-1">
          <CiStar className="w-6 h-6" />
          <p>{rating.toFixed(1)}</p>
        </Button>
        <Button variant="outline" size="sm" className="flex gap-1">
          <CiCalendar className="w-6 h-6" />
          <p>{year}</p>
        </Button>

        <Button variant="outline" size="sm" className="flex gap-1">
          <BiCategory className="w-6 h-6" />
          <p>{genre}</p>
        </Button>
      </CardContent>
      <CardFooter className="flex justify-between p-4 gap-2">
        <EventModal
          dialogueTitle={`Vote for Movie: ${title}`}
          confirmButtonText="Vote"
          dialogueDescription="Once you're done, click on the button below to vote for the movie."
          onConfirm={() => reviewFn(_id, reviewState) as any}
          button={
            <Button size="sm" className="w-full">
              Vote
            </Button>
          }
        >
          <div className="flex flex-col gap-2 my-4">
            <InputField
              label="Your Rating"
              name="rating"
              onChange={(e) =>
                setReviewState({
                  ...reviewState,
                  rating: Number(e.target.value),
                })
              }
              type="number"
              min={0}
              max={10}
              placeholder="Enter Rating Here"
              description="Between 0 and 10, Rate the movie you want to vote for"
              required
              value={reviewState.rating}
            />
            <InputField
              label="Your Review"
              name="review"
              onChange={(e) =>
                setReviewState({ ...reviewState, review: e.target.value })
              }
              type="text"
              description="Write a short review of the movie you want to vote for."
              placeholder="Enter Review Here"
              required
              value={reviewState.review}
            />
          </div>
        </EventModal>
        <Link to={`/movies/${_id}`} className="w-full">
          <Button size="sm" className="w-full">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default MovieCard;
