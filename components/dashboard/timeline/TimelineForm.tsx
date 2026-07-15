"use client";


import { useState } from "react";
import { toast } from "sonner";


import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";


import { addTimeline } from "@/lib/actions/timeline";



export default function TimelineForm() {


  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);



  async function submit(
    e: React.FormEvent<HTMLFormElement>
  ) {


    e.preventDefault();



    const formElement = e.currentTarget;


    const formData =
      new FormData(formElement);



    try {


      setLoading(true);



      await addTimeline(formData);



      toast.success(
        "Timeline berhasil ditambahkan ❤️"
      );



      formElement.reset();



      setOpen(false);



    } catch (error) {


      console.error(
        "TIMELINE ERROR:",
        error
      );



      toast.error(
        "Gagal menambah timeline"
      );



    } finally {


      setLoading(false);


    }


  }




  return (

    <Dialog
      open={open}
      onOpenChange={setOpen}
    >


      <DialogTrigger
        render={
          <Button>
            Tambah Timeline
          </Button>
        }
      />



      <DialogContent
        className="max-w-lg"
      >


        <DialogHeader>

          <DialogTitle>
            Tambah Timeline
          </DialogTitle>

        </DialogHeader>




        <form
          onSubmit={submit}
          className="space-y-3"
        >


          <Input
            name="title"
            placeholder="Judul timeline"
            required
          />



          <Textarea
            name="description"
            placeholder="Cerita"
            rows={3}
          />



          <Input
            name="event_date"
            type="date"
            required
          />



          <Input
            name="image"
            type="file"
            accept="image/*"
          />



          <Button
            type="submit"
            className="w-full"
            disabled={loading}
          >

            {
              loading
              ? "Menyimpan..."
              : "Simpan"
            }


          </Button>



        </form>


      </DialogContent>


    </Dialog>

  );

}