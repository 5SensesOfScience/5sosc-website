import { useTranslations } from "next-intl"
import Image from "next/image"

interface Member {
  image: string
  name: string
  role: string
}

export default function TeamSection() {
  const t = useTranslations("Team")

  const teamMembers: Array<Member> = [
    {
      image: "/example.jpg",
      name: "Alba",
      role: t("Alba_role"),
    },
    {
      image: "/example.jpg",
      name: "Albert",
      role: t("Albert_role"),
    },
    {
      image: "/example.jpg",
      name: "Anastasia",
      role: t("Anastasia_role"),
    },
    {
      image: "/example.jpg",
      name: "Emilio",
      role: t("Emilio_role"),
    },
    {
      image: "/example.jpg",
      name: "Felipe",
      role: t("Felipe_role"),
    },
    {
      image: "/team_photos/igor.png",
      name: "Igor",
      role: t("Igor_role"),
    },
    {
      image: "/example.jpg",
      name: "Josep",
      role: t("Josep_role"),
    },
    {
      image: "/example.jpg",
      name: "Judit",
      role: t("Judit_role"),
    },
    {
      image: "/example.jpg",
      name: "Juliette",
      role: t("Juliette_role"),
    },
    {
      image: "/example.jpg",
      name: "Pablo",
      role: t("Pablo_role"),
    },
    {
      image: "/example.jpg",
      name: "Tamara",
      role: t("Tamara_role"),
    },
    {
      image: "/example.jpg",
      name: "Valentina",
      role: t("Valentina_role"),
    },
  ]

  return (
    <div id="team" className="flex flex-col">
      <h2 className="text-4xl font-fancy mb-12 text-center md:text-left">
        {t("heading")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-40 mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="relative w-24 h-24">
              <Image
                src={member.image}
                alt={member.name}
                fill={true}
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">{member.name}</h3>
              <p className="text-xl text-gray-400">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
