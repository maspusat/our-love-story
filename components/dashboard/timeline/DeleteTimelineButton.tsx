"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

import { deleteTimeline } from "@/lib/actions/delete-timeline";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";


type Props = {
  id: string;
};



export default function DeleteTimelineButton({
  id,
}: Props) {


  const [loading, setLoading] = useState(false);



  async function handleDelete() {

    try {

      setLoading(true);


      await deleteTimeline(id);


      toast.success(
        "Timeline berhasil dihapus ❤️"
      );


    } catch (error) {


      console.error(error);


      toast.error(
        "Gagal menghapus timeline"
      );


    } finally {


      setLoading(false);


    }

  }




  return (

    <Dialog>


      <DialogTrigger
        render={
          <Button
            size="icon"
            variant="destructive"
          />
        }
      >

        <Trash2 size={18}/>

      </DialogTrigger>



      <DialogContent>


        <DialogHeader>

          <DialogTitle>
            Hapus Timeline?
          </DialogTitle>


          <DialogDescription>

            Data timeline akan dihapus permanen.

          </DialogDescription>


        </DialogHeader>



        <DialogFooter>


          <DialogTrigger
            render={
              <Button
                variant="outline"
              />
            }
          >
            Batal
          </DialogTrigger>



          <Button
            variant="destructive"
            disabled={loading}
            onClick={handleDelete}
          >

            {
              loading
              ?
              "Menghapus..."
              :
              "Hapus"
            }


          </Button>


        </DialogFooter>


      </DialogContent>


    </Dialog>

  );

}