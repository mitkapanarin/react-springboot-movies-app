import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IMoviesData } from "@/types/interface";
import { FC } from "react";
import { Button } from "../ui/button";
import { CiStar, CiCalendar } from "react-icons/ci";
import { BiCategory } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MdModeEdit } from "react-icons/md";

const MovieCard: FC<IMoviesData> = ({
  _id,
  genre,
  image,
  rating,
  title,
  // vote,
  year,
  description,
}) => {
  return (
    <Card className="">
      <img src={image ? image : "/no-image-available.svg"} alt="" />
      <CardHeader className="p-4">
        <CardTitle className="flex justify-between items-center">
          <h1 className="capitalize">{title}</h1>
          <Button size="sm" variant="secondary" className="text-sm">
            <MdModeEdit className="w-4 h-4" />
          </Button>
        </CardTitle>
        <CardDescription className="">{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 py-0 flex gap-2 flex-wrap">
        <Button variant="outline" size="sm" className="flex gap-1">
          <CiStar className="w-6 h-6" />
          <p>{rating}</p>
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
        <Button size="sm" className="w-full">
          Vote
        </Button>
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
