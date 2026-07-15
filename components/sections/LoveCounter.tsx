"use client";

import { useEffect, useState } from "react";


type Props = {
  data: {
    anniversary: string | null;
  } | null;
};


export default function LoveCounter({
  data,
}: Props) {

  const [days, setDays] = useState(0);


  useEffect(() => {

    if (!data?.anniversary) return;


    const startDate = new Date(data.anniversary);


    const calculateDays = () => {

      const today = new Date();

      const difference =
        today.getTime() - startDate.getTime();


      setDays(
        Math.floor(
          difference / (1000 * 60 * 60 * 24)
        )
      );

    };


    calculateDays();


    const interval = setInterval(
      calculateDays,
      1000
    );


    return () => clearInterval(interval);


  }, [data]);


  return (

    <section
      className="
        bg-white
        py-20
        text-center
      "
    >

      <div className="mx-auto max-w-4xl px-6">


        <h2
          className="
            text-6xl
            font-bold
            text-rose-500
          "
        >
          {days}
        </h2>


        <p
          className="
            mt-4
            text-lg
            text-gray-600
          "
        >
          Hari perjalanan cinta kita ❤️
        </p>


      </div>


    </section>

  );
}