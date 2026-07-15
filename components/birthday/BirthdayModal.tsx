"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import confetti from "canvas-confetti";

import {
  Gift,
} from "lucide-react";

import BirthdayCake from "./BirthdayCake";
import BalloonField from "./BalloonField";
import Sparkles from "./Sparkles";
import HeartRain from "./HeartRain";


type Props = {
  groomBirthday: string | null;
  brideBirthday: string | null;

  groomName: string | null;
  brideName: string | null;
};


function isBirthdayToday(
  date: string | null
) {
  if (!date) return false;

  const today = new Date();
  const birthday = new Date(date);

  return (
    today.getDate() === birthday.getDate() &&
    today.getMonth() === birthday.getMonth()
  );
}


export default function BirthdayModal({
  groomBirthday,
  brideBirthday,
  groomName,
  brideName,
}: Props) {

  const [open,setOpen] =
    useState(true);


  const groom =
    isBirthdayToday(
      groomBirthday
    );

  const bride =
    isBirthdayToday(
      brideBirthday
    );


  useEffect(()=>{

    if(!groom && !bride){
      return;
    }


    confetti({
      particleCount:180,
      spread:180,
      startVelocity:45,
      origin:{
        y:0.4,
      },
      colors:[
        "#ff4d6d",
        "#ff8fab",
        "#ffd166",
        "#ffffff",
        "#c77dff",
      ],
    });


  },[
    groom,
    bride,
  ]);



  useEffect(()=>{

    function closeKeyboard(
      e:KeyboardEvent
    ){

      if(
        e.key === "Escape"
      ){
        setOpen(false);
      }

    }


    window.addEventListener(
      "keydown",
      closeKeyboard
    );


    return()=>{

      window.removeEventListener(
        "keydown",
        closeKeyboard
      );

    };


  },[]);



  if(!groom && !bride){
    return null;
  }


  if(!open){
    return null;
  }



  let title = "";


  if(
    groom &&
    bride
  ){

    title =
      `${groomName} & ${brideName}`;

  }
  else if(groom){

    title =
      groomName ?? "";

  }
  else{

    title =
      brideName ?? "";

  }



  function celebrate(){

    confetti({

      particleCount:300,

      spread:240,

      startVelocity:55,

      origin:{
        y:0.6,
      },

      colors:[
        "#ff4d6d",
        "#ff85a1",
        "#ffd166",
        "#ffffff",
        "#b5179e",
      ],

    });


    setTimeout(()=>{
      setOpen(false);
    },900);

  }



  return(

    <AnimatePresence>

      {open && (

        <motion.div

          initial={{
            opacity:0,
          }}

          animate={{
            opacity:1,
          }}

          exit={{
            opacity:0,
          }}

          className="
          fixed
          inset-0
          z-[9999]
          flex
          items-center
          justify-center
          overflow-hidden
          bg-black/70
          backdrop-blur-md
          "

        >

          <BalloonField/>
          <Sparkles/>
          <HeartRain/>


          <motion.div

            initial={{
              opacity:0,
              scale:.65,
              y:80,
            }}

            animate={{
              opacity:1,
              scale:1,
              y:0,
              rotate:[
                0,
                1,
                -1,
                0,
              ],
            }}

            exit={{
              opacity:0,
              scale:.8,
            }}

            transition={{
              duration:.8,
              type:"spring",
              stiffness:120,
              damping:12,

              rotate:{
                repeat:Infinity,
                duration:6,
              },
            }}


            className="
            relative
            w-[92%]
            max-w-2xl
            overflow-hidden
            rounded-[36px]
            border
            border-white/20
            bg-gradient-to-br
            from-rose-500
            via-pink-500
            to-fuchsia-600
            p-6
            sm:p-10
            text-center
            shadow-[0_20px_80px_rgba(0,0,0,.45)]
            "

          >


            <div
              className="
              pointer-events-none
              absolute
              -top-20
              left-1/2
              h-64
              w-64
              -translate-x-1/2
              rounded-full
              bg-white/20
              blur-[120px]
              "
            />


            <div className="relative">


              <div className="mb-6">
                <BirthdayCake/>
              </div>



              <p
                className="
                text-sm
                font-semibold
                uppercase
                tracking-[8px]
                text-white/80
                "
              >
                Today is Special
              </p>



              <h1
                className="
                mt-4
                text-4xl
                sm:text-5xl
                font-bold
                text-white
                "
              >
                Happy Birthday
              </h1>



              <h2
                className="
                mt-5
                animate-glow
                text-3xl
                sm:text-4xl
                font-extrabold
                text-yellow-200
                "
              >
                {title} ❤️
              </h2>



              <p
                className="
                mx-auto
                mt-8
                max-w-xl
                text-lg
                leading-9
                text-white/90
                "
              >
                Semoga panjang umur,
                sehat selalu,
                diberikan kebahagiaan,
                dan semua impianmu
                menjadi kenyataan.
              </p>



              <button

                onClick={celebrate}

                className="
                mt-10
                animate-heartbeat
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-white
                px-8
                py-4
                font-semibold
                text-rose-600
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-xl
                "

              >

                <Gift size={22}/>

                Celebrate 🎉

              </button>


            </div>


          </motion.div>


        </motion.div>

      )}

    </AnimatePresence>

  );
}