import { useTranslations } from "next-intl";

export default function ProgrammeSection() {
  const t = useTranslations("Programme");
  const senses = [
    { title: t("see"), items: [t("see_t1"), t("see_t2"), t("see_t3"), t("see_t4")], color: "text-sight" },
    { title: t("hear"), items: [t("hear_t1"), t("hear_t2"), t("hear_t3"), t("hear_t4")], color: "text-hearing" },
    { title: t("touch"), items: [t("touch_t1"), t("touch_t2"), t("touch_t3"), t("touch_t4")], color: "text-touch" },
    { title: t("smell"), items: [t("smell_t1"), t("smell_t2"), t("smell_t3"), t("smell_t4")], color: "text-smell" },
    { title: t("taste"), items: [t("taste_t1"), t("taste_t2"), t("taste_t3"), t("taste_t4")], color: "text-taste" },
  ];

  return (
    <div id = "program" className="py-12 px-6">
      <h2 className="text-4xl font-fancy text-center mb-20">
        {t("heading_programme")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
        {senses.map((sense, index) => (
          <div
            key={index}
            className={`flex flex-col items-center ${
              index % 2 !== 0 ? "md:mt-12" : "mt-0"
            }`}
          >
            <h3 className={`${sense.color} text-2xl font-fancy mb-4`}>{sense.title}</h3>
            <ul className="text-xl space-y-2">
              {sense.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-12 text-sm">
        <p className="text-3xl font-bold">08 Mar 2024 - 11 Mar 2024</p>
        <p className="text-3xl font-bold">14:00 - 16:00</p>
      </div>
    </div>
  );
}
