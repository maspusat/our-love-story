import Image from "next/image";

import { createServerSupabase } from "@/lib/supabase/server";

import TimelineForm from "@/components/dashboard/timeline/TimelineForm";
import DeleteTimelineButton from "@/components/dashboard/timeline/DeleteTimelineButton";


export default async function TimelinePage() {


  const supabase =
    await createServerSupabase();



  const { data, error } =
        
    await supabase
      .from("timeline")
      .select("*")
      .order(
        "event_date",
        {
          ascending:true
        }

      );

        console.log(data);
        console.log(error);



  return (

    <div className="space-y-8">


      <div className="flex justify-between items-center">


        <div>

          <h1 className="text-3xl font-bold">
            Timeline
          </h1>


          <p className="text-gray-500">
            Kelola perjalanan cinta.
          </p>


        </div>



        <TimelineForm />


      </div>





      <div className="grid gap-6">


        {data?.map((item)=>(


          <div
            key={item.id}
            className="
            rounded-3xl
            bg-white
            p-6
            shadow
            "
          >



            <div className="flex justify-between">


              <div>


                <h2 className="text-2xl font-bold">

                  {item.title}

                </h2>


                <p className="text-sm text-rose-500">

                  {item.event_date}

                </p>


              </div>



              <DeleteTimelineButton
                id={item.id}
              />


            </div>





            <p className="mt-4 text-gray-600">

              {item.description}

            </p>




            {
              item.image_url &&
              <Image
                src={item.image_url}
                alt={item.title}
                width={500}
                height={300}
                className="
                mt-5
                rounded-xl
                object-cover
                "
              />
            }



          </div>


        ))}



      </div>


    </div>

  );
}