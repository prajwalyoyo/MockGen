import { Button } from "@/components/ui/button";

const Hero = () => {
//   const codeExample = `{
//   "users": [
//     {
//       "id": "u-123",
//       "name": "John Smith",
//       "email": "john@example.com"
//     }
//   ]
// }`;

  return (
    <div className="container pt-32 pb-20">
      <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Generate Mock Data{" "}
          <span className="text-primary">Effortlessly!</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-[42rem] leading-normal">
          Create realistic, customizable data for testing and development in seconds.
          Perfect for developers, testers, and data scientists.
        </p>
        {/* <div className="flex gap-4 mt-4">
          <Button size="lg">Get Started</Button>
          <Button size="lg" variant="outline">
            Try Demo
          </Button>
        </div> */}
        {/* <div className="w-full max-w-2xl mt-8 rounded-lg bg-accent p-4">
          <pre className="font-mono text-sm text-left overflow-x-auto whitespace-pre">
            <code>{codeExample}</code>
          </pre>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;