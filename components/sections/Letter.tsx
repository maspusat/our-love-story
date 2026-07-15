type LetterItem = {
  id: string;
  title: string;
  content: string;
};


type Props = {
  data: LetterItem[];
};



export default function Letter({
  data,
}: Props) {


  return (

    <section
      id="letter"
      className="
      bg-gradient-to-b
      from-rose-50
      to-white
      py-28
      "
    >


      <div
        className="
        mx-auto
        max-w-4xl
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
            Love Letter
          </p>



          <h2
            className="
            mt-4
            text-5xl
            font-bold
            text-gray-900
            "
          >
            A Letter For You ❤️
          </h2>



          <p
            className="
            mt-6
            text-gray-600
            "
          >
            A little message from my heart to yours.
          </p>


        </div>





        {/* Letter List */}

        <div
          className="
          mt-16
          space-y-8
          "
        >



          {
            data.length === 0 && (

              <div
                className="
                rounded-3xl
                bg-white
                p-10
                text-center
                shadow-lg
                "
              >

                <p className="text-gray-500">
                  Belum ada surat cinta ❤️
                </p>

              </div>

            )
          }




          {
            data.map((item)=>(


              <div
                key={item.id}
                className="
                relative
                overflow-hidden
                rounded-[30px]
                bg-white
                p-10
                shadow-xl
                "
              >


                {/* Dekorasi */}

                <div
                  className="
                  absolute
                  right-0
                  top-0
                  h-32
                  w-32
                  rounded-full
                  bg-rose-100
                  blur-3xl
                  "
                />




                <div
                  className="
                  relative
                  "
                >



                  <h3
                    className="
                    text-3xl
                    font-bold
                    text-gray-900
                    "
                  >

                    {item.title}

                  </h3>




                  <div
                    className="
                    mt-6
                    whitespace-pre-line
                    leading-8
                    text-gray-600
                    "
                  >

                    {item.content}

                  </div>




                  <div
                    className="
                    mt-8
                    text-right
                    text-2xl
                    "
                  >
                    ❤️
                  </div>



                </div>



              </div>


            ))
          }



        </div>



      </div>



    </section>

  );

}