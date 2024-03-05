import { HTMLInputTypeAttribute } from "react";
import { IHTMLInputTypeChange } from "./types";

export interface IMoviesData {
  _id: string;
  title: string;
  image: string;
  description: string;
  rating: number;
  vote: number;
  genre: string;
  year: number;
  stats?: {
    rating: number[];
    review: string[];
  };
}

export interface iInputFieldPros {
  id?: string;
  name: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  label: string;
  value?: string | number;
  onChange: (e: IHTMLInputTypeChange) => void;
  required?: boolean;
  disabled?: boolean;
  description?: string;
  accept?: string;
  min?: number;
  max?: number;
}

export interface IDropdownOptions {
  value: string;
  label: string;
}
