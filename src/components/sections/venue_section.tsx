import Image from "next/image"

export default function VenueSection() {
  return (
    <div id="venue" className="py-8">
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
      <div className="mt-4 flex justify-between items-center text-sm">
        <p className="text-4xl font-semibold">Our venue name</p>
        <p className="text-2xl font-semibold">
          Our venue address, 111, postal code
        </p>
      </div>
    </div>
  )
}
