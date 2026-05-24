import { Button } from "../../shared/ui/button";

export default function Hero() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center space-y-6">

        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Professional Cleaning You Can Trust
        </h1>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Victorious Love Pro Clean connects customers with verified professionals while providing a structured platform designed for reliability, quality, and growth.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Button className="bg-[#D91429] text-white px-6 py-3 rounded-xl">
            Get Started
          </Button>

          <Button className="border px-6 py-3 rounded-xl">
            Become a Provider
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 pt-6 text-sm text-gray-500">
          <span>Verified professionals</span>
          <span>Reliable service standards</span>
          <span>Built for long-term growth</span>
        </div>

      </div>
    </section>
  );
}




