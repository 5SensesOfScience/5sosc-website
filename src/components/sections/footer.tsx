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
      <h2 className="mb-2 text-center md:text-right text-xl md:text-2xl">
        {title}
      </h2>
      <div className="text-lg md:text-xl flex items-center md:items-start justify-center">
        {children}
      </div>
    </div>
  )
}

export default function Footer() {
  return (
    <div className="p-4 flex flex-col md:flex-row items-center justify-between">
      <Image
        src="/five-senses-of-science-logo-transparent.png"
        alt="5 Senses of Science"
        width={100}
        height={100}
      />
      <div className="flex flex-col md:items-start md:flex-row gap-2 md:gap-6">
        <FooterSection title="Sponsors">TBD</FooterSection>
        <FooterSection title="Social Media">
          <Link
            href="https://instagram.com/5sensesofscience"
            passHref
            target="_blank"
          >
            <SiInstagram />
          </Link>
        </FooterSection>
        <FooterSection title="Contact">
          <Link href="mailto:5sensesofscience@gmail.com" className="py-2">
            5sensesofscience@gmail.com
          </Link>
        </FooterSection>
      </div>
    </div>
  )
}
