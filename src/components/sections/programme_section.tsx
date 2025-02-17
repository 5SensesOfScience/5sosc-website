import { Link } from "@/i18n/routing"
import { DateTimeFormatOptions, useFormatter, useTranslations } from "next-intl"
import { Button } from "../ui/button"

export default function ProgrammeSection() {
  const t = useTranslations("Programme")
  const senses = [
    { title: t("see"), items: [t("see_t1"), t("see_t2")], color: "text-sight" },
    {
      title: t("hear"),
      items: [t("hear_t1"), t("hear_t2")],
      color: "text-hearing",
    },
    {
      title: t("touch"),
      items: [t("touch_t1"), t("touch_t2"), t("touch_t3")],
      color: "text-touch",
    },
    {
      title: t("smell"),
      items: [t("smell_t1")],
      color: "text-smell",
    },
    {
      title: t("taste"),
      items: [t("taste_t1")],
      color: "text-taste",
    },
  ]
  const formatter = useFormatter()
  const dayFormat: DateTimeFormatOptions = { dateStyle: "medium" }
  const timeFormat: DateTimeFormatOptions = { timeStyle: "short" }
  const day1 = new Date("2025-03-07")
  const day2 = new Date("2025-03-08")
  const Time = function (h: number, m: number) {
    return new Date().setHours(h, m)
  }

  return (
    <div id="program" className="py-12 px-6">
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
            <h3 className={`${sense.color} text-2xl font-fancy mb-4`}>
              {sense.title}
            </h3>
            <ul className="text-xl space-y-2">
              {sense.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-center text-2xl font-semibold">
        <p>{formatter.dateTime(day1, dayFormat)}</p>
        <p>
          {formatter.dateTimeRange(Time(12, 30), Time(13, 30), timeFormat)}
          <br />
          {formatter.dateTimeRange(Time(15, 30), Time(16, 30), timeFormat)}
          <br />
          {formatter.dateTimeRange(Time(17, 0), Time(18, 0), timeFormat)}
          <br />
          {formatter.dateTimeRange(Time(18, 30), Time(19, 30), timeFormat)}
        </p>
        <p>{formatter.dateTime(day2, dayFormat)}</p>
        <p>
          {formatter.dateTimeRange(Time(10, 30), Time(11, 30), timeFormat)}
          <br />
          {formatter.dateTimeRange(Time(11, 45), Time(12, 45), timeFormat)}
        </p>
      </div>

      <div className="w-fit h-fit mx-auto pt-4">
        <Link
          href="https://www.eventbrite.com/e/entradas-exposicio-5-sentits-de-la-ciencia-1245798499849?aff=oddtdtcreator"
          target="_blank"
          className="w-fit mx-auto"
        >
          <Button variant="outline" size="lg" className="mx-auto">
            Register now
          </Button>
        </Link>
      </div>
    </div>
  )
}
