import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Define Your Data Structure",
    description: "Specify your schema using our intuitive interface or JSON format.",
  },
  {
    number: "02",
    title: "Set Parameters",
    description: "Choose the number of records and configure data generation rules.",
  },
  {
    number: "03",
    title: "Download & Use",
    description: "Get your generated data instantly in your preferred format.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative flex flex-col items-center text-center p-6"
            >
              <div className="text-4xl font-bold text-primary mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-primary" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;