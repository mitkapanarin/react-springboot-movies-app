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
}

export interface iInputFieldPros {
  id?: string;
  name: string;
  type: string;
  placeholder: string;
  label: string;
  value?: string | number;
  onChange: (e: IHTMLInputTypeChange) => void;
  required?: boolean;
  disabled?: boolean;
  description?: string;
  accept?: string;
}

export interface IDropdownOptions {
  value: string;
  label: string;
}
