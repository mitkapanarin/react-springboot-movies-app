import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="container max-w-8xl flex justify-between my-6 items-center">
      <h1 className="text-xl font-semibold">Movies Database</h1>
      <a
        href="https://speeding-resonance-761807.postman.co/workspace/springboot-movies-database~cd732020-c88a-4bad-bc4f-7f76b67aa84f/collection/18531452-ac9a4d97-0917-4b61-a303-edd8661fd1ff"
        target="_blank"
      >
        <Button size="sm">Postman API Docs</Button>
      </a>
    </div>
  );
};

export default Navbar;
