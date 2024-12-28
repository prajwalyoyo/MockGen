import { Database, FileJson, Globe, Shuffle } from "lucide-react";

const features = [
  {
    icon: Shuffle,
    title: "Randomized Data Generation",
    description: "Generate diverse, realistic data sets with our advanced randomization algorithms.",
  },
  {
    icon: Database,
    title: "Custom Schema Support",
    description: "Define your own data structures and relationships with flexible schema options.",
  },
  {
    icon: FileJson,
    title: "Multiple Export Formats",
    description: "Export your generated data in JSON, CSV, or XML formats with a single click.",
  },
  {
    icon: Globe,
    title: "Localization Options",
    description: "Generate region-specific data with support for multiple languages and formats.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-accent">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">
          Powerful Features for Your Data Needs
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-background/5 hover:bg-background/10 transition-colors"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;