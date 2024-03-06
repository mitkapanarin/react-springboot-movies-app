import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="container max-w-8xl flex justify-between my-6 items-center">
      <h1 className="text-xl font-semibold">Movies Database</h1>
      <a
         href="https://www.postman.com/speeding-resonance-761807/workspace/react-springboot-movies-app/collection/27719286-b864e46d-b94d-4288-a398-f57744cbdebc"
        target="_blank"
      >
        <Button size="sm">Postman API Docs</Button>
      </a>
    </div>
  );
};

export default Navbar;
