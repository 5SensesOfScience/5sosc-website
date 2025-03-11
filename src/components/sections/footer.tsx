import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"
import { SiInstagram } from "react-icons/si"

function FooterSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <h2 className="mb-2 text-center md:text-right text-xl font-semibold">
        {title}
      </h2>
      <div className="text-lg md:text-xl flex flex-col md:flex-row items-center gap-2 justify-center">
        {children}
      </div>
    </div>
  )
}

export default function Footer() {
  const t = useTranslations("Footer")

  return (
    <div className="p-4 flex flex-col md:flex-row items-center justify-between">
      <Image
        src="/five-senses-of-science-logo-transparent.png"
        alt="5 Senses of Science"
        width={100}
        height={100}
      />
      <div className="flex flex-col md:items-start md:flex-row gap-2 md:gap-6">
        <FooterSection title={t("sponsors")}>
          <Image
            src="/sponsors/barcelona_logo.jpg"
            alt="Ajuntament de Barcelona logo"
            width={80}
            height={80}
          />
          <Image
            src="/sponsors/ICFO_logo.png"
            alt="ICFO logo"
            width={80}
            height={80}
          />
          <Image
            src="/sponsors/ICIQ_logo.png"
            alt="ICIQ logo"
            width={80}
            height={80}
          />
          <Image
            src="/sponsors/ICN2_logo.png"
            alt="ICN2 logo"
            width={80}
            height={80}
          />
          <Image
            src="/sponsors/IRB_logo.png"
            alt="IRB logo"
            width={80}
            height={80}
          />
        </FooterSection>
        <FooterSection title={t("social_media")}>
          <Link
            href="https://instagram.com/5sensesofscience"
            passHref
            target="_blank"
          >
            <SiInstagram />
          </Link>
        </FooterSection>
        <FooterSection title={t("contact")}>
          <Link href="mailto:info@5sensesofscience.org" className="py-2">
            info@5sensesofscience.org
          </Link>
        </FooterSection>
      </div>
    </div>
  )
}
