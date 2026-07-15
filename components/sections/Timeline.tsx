import Image from "next/image";


type TimelineItem = {
  id: string;
  title: string;
  description: string | null;
  image_url: string | null;
  event_date: string;
};


type Props = {
  data: TimelineItem[];
};



export default function Timeline({
  data,
}: Props) {


  return (

    <section
      id="timeline"
      className="
      bg-white
      py-28
      "
    >


      <div
        className="
        mx-auto
        max-w-5xl
        px-6
        "
      >



        {/* Header */}

        <div
          className="
          text-center
          "
        >


          <p
            className="
            uppercase
            tracking-[8px]
            text-rose-500
            "
          >
            Our Journey
          </p>



          <h2
            className="
            mt-4
            text-5xl
            font-bold
            text-gray-900
            "
          >
            Love Timeline
          </h2>



          <p
            className="
            mx-auto
            mt-6
            max-w-2xl
            text-gray-600
            "
          >
            Every moment has a story, every memory has a meaning.
          </p>


        </div>





        {/* Timeline */}

        <div
          className="
          relative
          mt-20
          space-y-12
          "
        >



          {/* Line */}

          <div
            className="
            absolute
            left-5
            top-0
            hidden
            h-full
            w-1
            bg-rose-200
            md:block
            "
          />




          {
            data.map((item)=>(


              <div
                key={item.id}
                className="
                relative
                md:pl-16
                "
              >



                {/* Dot */}

                <div
                  className="
                  absolute
                  left-0
                  top-8
                  hidden
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-rose-500
                  text-white
                  shadow-lg
                  md:flex
                  "
                >
                  ❤️
                </div>





                {/* Card */}

                <div
                  className="
                  rounded-3xl
                  bg-rose-50
                  p-8
                  shadow-lg
                  "
                >



                  <p
                    className="
                    text-sm
                    font-medium
                    text-rose-500
                    "
                  >

                    {
                      new Date(
                        item.event_date
                      ).toLocaleDateString(
                        "id-ID",
                        {
                          day:"numeric",
                          month:"long",
                          year:"numeric"
                        }
                      )
                    }

                  </p>





                  <h3
                    className="
                    mt-3
                    text-3xl
                    font-bold
                    text-gray-900
                    "
                  >

                    {item.title}

                  </h3>





                  {
                    item.description && (

                      <p
                        className="
                        mt-4
                        leading-8
                        text-gray-600
                        "
                      >

                        {item.description}

                      </p>

                    )
                  }





                  {
                    item.image_url && (

                      <div
                        className="
                        mt-6
                        overflow-hidden
                        rounded-3xl
                        bg-white
                        "
                      >


                        <Image
                          src={item.image_url}
                          alt={item.title}
                          width={900}
                          height={1200}
                          className="
                          h-auto
                          w-full
                          rounded-3xl
                          object-contain
                          transition
                          duration-700
                          hover:scale-105
                          "
                        />


                      </div>

                    )
                  }




                </div>



              </div>


            ))
          }



        </div>



      </div>



    </section>

  );

}