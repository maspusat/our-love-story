"use client";

import { useState } from "react";
import Image from "next/image";
import { toast } from "sonner";

import { Gallery } from "@/types/gallery";
import { updateGallery } from "@/lib/actions/update-gallery";

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
import { Switch } from "@/components/ui/switch";

type Props = {
  gallery: Gallery;
};

export default function EditGalleryDialog({
  gallery,
}: Props) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState(
    gallery.title
  );

  const [description, setDescription] = useState(
    gallery.description ?? ""
  );

  const [favorite, setFavorite] = useState(
    gallery.is_favorite
  );

  const [published, setPublished] = useState(
    gallery.is_published
  );

  const [order, setOrder] = useState(
    gallery.display_order
  );


  async function save() {
    try {
      setLoading(true);

      const formData = new FormData();

      formData.append(
        "id",
        gallery.id
      );

      formData.append(
        "title",
        title
      );

      formData.append(
        "description",
        description
      );

      formData.append(
        "displayOrder",
        order.toString()
      );

      formData.append(
        "isFavorite",
        favorite.toString()
      );

      formData.append(
        "isPublished",
        published.toString()
      );

      await updateGallery(formData);

      toast.success(
        "Gallery berhasil diperbarui ❤️"
      );

      setOpen(false);

    } catch (error) {

      console.error(error);

      toast.error(
        "Gagal memperbarui gallery."
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
          <Button
            variant="secondary"
          />
        }
      >
        Edit
      </DialogTrigger>



      <DialogContent
        className="max-w-xl"
      >


        <DialogHeader>

          <DialogTitle>
            Edit Gallery
          </DialogTitle>

        </DialogHeader>



        <div className="space-y-5">


          <Image
            src={gallery.image_url}
            alt={gallery.title}
            width={600}
            height={400}
            className="h-64 w-full rounded-xl object-cover"
          />



          <Input

            value={title}

            onChange={(e)=>
              setTitle(e.target.value)
            }

            placeholder="Judul Foto"

          />



          <Textarea

            value={description}

            onChange={(e)=>
              setDescription(e.target.value)
            }

            placeholder="Deskripsi Foto"

            rows={5}

          />



          <div>

            <label className="mb-2 block text-sm font-medium">

              Urutan Tampilan

            </label>


            <Input

              type="number"

              value={order}

              onChange={(e)=>
                setOrder(
                  Number(e.target.value)
                )
              }

            />

          </div>

          <div className="flex items-center justify-between rounded-lg border p-4">
            <div>
              <p className="font-medium">
                Favorite
              </p>
              <p className="text-sm text-gray-500">
                Tampilkan sebagai foto favorit
              </p>
            </div>
            <Switch
              checked={favorite}
              onCheckedChange={
                setFavorite
              }
            />
          </div>

          <div className="flex items-center justify-between rounded-lg border p-4">
            <div>

              <p className="font-medium">
                Published
              </p>

              <p className="text-sm text-gray-500">
                Tampilkan di halaman utama
              </p>

            </div>


            <Switch

              checked={published}

              onCheckedChange={
                setPublished
              }

            />


          </div>






          <Button

            className="w-full"

            disabled={loading}

            onClick={save}

          >

            {
              loading
              ? "Menyimpan..."
              : "Simpan Perubahan"
            }


          </Button>



        </div>



      </DialogContent>


    </Dialog>

  );
}