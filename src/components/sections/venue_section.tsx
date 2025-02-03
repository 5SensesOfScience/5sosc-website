import { useTranslations } from "next-intl"
import Image from "next/image"

export default function VenueSection() {
  const t = useTranslations("Venue")
  return (
    <div id="venue" className="py-8">
      <h2 className="text-4xl font-fancy text-center mb-20">{t("heading")}</h2>
      <div className="w-full max-w-3xl mx-auto">
        <div className="w-full h-full">
          <Image
            src="/venue.png"
            alt="Venue layout"
            width={1000}
            height={500}
            className="max-w-full"
          />
        </div>
      </div>
      <div className="mt-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="text-4xl font-semibold text-center">
          Centre Cívic Vil·la Urània
        </p>
        <p className="text-2xl font-semibold text-center">
          Carrer de Saragossa 29, 08006 Barcelona
        </p>
      </div>
      <table className="w-fit mx-auto my-4 text-xl [&_td]:px-2">
        <tr>
          <td className="font-semibold">Metro</td>
          <td>L3 Fontana</td>
        </tr>
        <tr>
          <td className="font-semibold">FGC</td>
          <td>Gràcia / Pl. Molina / Sant Gervasi</td>
        </tr>
        <tr>
          <td className="font-semibold">Bus</td>
          <td>V15, V17, D40, 27, 24, 114</td>
        </tr>
      </table>
    </div>
  )
}
