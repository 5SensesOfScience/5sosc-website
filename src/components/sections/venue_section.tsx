export default function VenueSection() {
  return (
    <section className="py-8">
      <div className="max-w-3xl mx-auto">
        <div>
          <img
            src="/venue.png"
            alt="Venue layout"
            className="max-w-full"
          />
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center text-sm">
          <p className="text-4xl font-semibold">Our venue name</p>
          <p className="text-2xl font-semibold">Our venue address, 111, postal code</p>
      </div>
    </section>
  );
}

