import { profile } from "@/data/profile";
import { calculateLoveDays } from "@/utils/date";

export default function LoveCounter() {
  const totalDays = calculateLoveDays(profile.anniversary);

  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-4xl text-center">

        <p className="uppercase tracking-[8px] text-rose-500">
          Together For
        </p>

        <h1 className="mt-8 text-7xl font-bold text-rose-600">
          {totalDays}
        </h1>

        <p className="mt-4 text-2xl text-gray-700">
          Days ❤️
        </p>

      </div>

    </section>
  );
}