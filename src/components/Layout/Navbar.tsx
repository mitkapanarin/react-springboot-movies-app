import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="container max-w-8xl flex justify-between my-6 items-center">
      <h1 className="text-xl font-semibold">Movies Database</h1>
      <Button size="sm">Postman API Docs</Button>
    </div>
  );
};

export default Navbar;
