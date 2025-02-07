
import Feature from "./Feature";

const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

export const Features = () => {
  return (
    <div className="bg-black py-[72px] sm:py-24 text-white">
      <div className="container ">
        <h1 className="text-6xl font-bold text-center tracking-tighter">
          Everything you need
        </h1>
        <p className="text-xl text-white/70 leading-7 text-center mt-5 max-w-xl mx-auto">
          Enjoy customizable lists, team work tools, and smart tracking all in
          one place. Set tasks, get reminders, and see your progress simply and
          quickly.
        </p>

        {/* features */}
        <div className="mt-16 flex flex-col sm:flex-row gap-4 ">
          {features.map((item, index) => (
            <Feature
              title={item.title}
              description={item.description}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
