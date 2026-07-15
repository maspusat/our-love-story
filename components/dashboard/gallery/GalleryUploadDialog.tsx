"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { uploadGallery } from "@/lib/actions/gallery";

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

type FormDataType = {
  title: string;
  description: string;
  image: FileList;
};

export default function GalleryUploadDialog() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
  } = useForm<FormDataType>();

  async function onSubmit(data: FormDataType) {
    try {
      setLoading(true);

      const image = data.image?.[0];

      if (!image) {
        toast.error("Pilih gambar terlebih dahulu.");
        return;
      }

      // Maksimal 5 MB
      const maxSize = 5 * 1024 * 1024;

      if (image.size > maxSize) {
        toast.error("Ukuran gambar maksimal 5 MB.");
        return;
      }

      const formData = new FormData();

      formData.append("title", data.title);
      formData.append("description", data.description ?? "");
      formData.append("image", image);

      await uploadGallery(formData);

      toast.success("Foto berhasil diupload ❤️");

      reset();
      setOpen(false);
    } catch (error) {
      console.error(error);

      toast.error(
        error instanceof Error
          ? error.message
          : "Upload gagal."
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
        render={<Button />}
      >
        Upload Foto
      </DialogTrigger>

      <DialogContent className="max-w-xl">

        <DialogHeader>

          <DialogTitle>

            Upload Foto

          </DialogTitle>

        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >

          <Input
            placeholder="Judul Foto"
            {...register("title")}
          />

          <Textarea
            placeholder="Deskripsi"
            {...register("description")}
          />

          <Input
            type="file"
            accept="image/*"
            {...register("image")}
          />

          <Button
            type="submit"
            className="w-full"
            disabled={loading}
          >
            {loading
              ? "Uploading..."
              : "Upload"}
          </Button>

        </form>

      </DialogContent>
    </Dialog>
  );
}