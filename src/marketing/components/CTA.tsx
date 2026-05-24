import { Button } from "../../shared/ui/button";

export default function CTA() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 bg-[#D91429] text-white">
      <div className="max-w-4xl mx-auto text-center space-y-6">

        <h2 className="text-3xl font-bold">
          Built for Growth and Opportunity
        </h2>

        <p className="text-white/90">
          Whether you're looking for reliable services or ready to grow your own business, Victorious Love Pro Clean provides the structure and support to move forward with confidence.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Button className="bg-black text-white px-6 py-3 rounded-xl">
            Get Started
          </Button>

          <Button className="bg-white text-black px-6 py-3 rounded-xl">
            Become a Provider
          </Button>
        </div>

      </div>
    </section>
  );
}




