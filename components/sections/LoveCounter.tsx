import { differenceInDays } from "date-fns";
import { profile } from "@/data/profile";

export default function LoveCounter() {
  const today = new Date();

  const totalDays = differenceInDays(
    today,
    profile.anniversary
  );

  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-4xl text-center">

        <p className="uppercase tracking-[5px] text-rose-500">
          Together Since
        </p>

        <h2 className="mt-4 text-3xl font-bold text-gray-900">
          {profile.anniversary.toLocaleDateString()}
        </h2>

        <p className="mt-10 text-6xl">
          ❤️
        </p>

        <h1 className="mt-8 text-5xl font-bold text-rose-600">
          {totalDays}
        </h1>

        <p className="mt-4 text-xl text-gray-600">
          Days Together
        </p>

      </div>

    </section>
  );
}