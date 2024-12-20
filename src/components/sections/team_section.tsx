import { useTranslations } from "next-intl"
const teamMembers = [
  {
    image: "/example.jpg",
    name: "Example name",
    role: "Example role",
  },
  {
    image: "/example.jpg",
    name: "Example name",
    role: "Example role",
  },
  {
    image: "/example.jpg",
    name: "Example name",
    role: "Example role",
  },
  {
    image: "/example.jpg",
    name: "Example name",
    role: "Example role",
  },
  {
    image: "/example.jpg",
    name: "Example name",
    role: "Example role",
  },
  {
    image: "/example.jpg",
    name: "Example name",
    role: "Example role",
  },
  {
    image: "/example.jpg",
    name: "Example name",
    role: "Example role",
  },
  {
    image: "/example.jpg",
    name: "Example name",
    role: "Example role",
  },
  {
    image: "/example.jpg",
    name: "Example name",
    role: "Example role",
  },
  {
    image: "/example.jpg",
    name: "Example name",
    role: "Example role",
  },
];

export default function TeamSection() {
  

  const t = useTranslations("Highlights")

  return (
    <section className="flex flex-col">
      <h2 className="text-2xl font-fancy mb-12 text-center md:text-left">Five Senses Of Science Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-40 mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex items-center space-x-4">
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 object-cover"
            />
            <div>
              <h3 className="text-2xl font-semibold">{member.name}</h3>
              <p className="text-xl text-gray-400">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
