"use client";

import { useState } from "react";
import { toast } from "sonner";

import { addLoveLetter } from "@/lib/actions/love-letter";

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

export default function LoveLetterForm() {
  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  async function submit(
    e: React.FormEvent<HTMLFormElement>
    ) {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = new FormData(form);

    try {
        setLoading(true);

        await addLoveLetter(formData);

        toast.success(
        "Surat berhasil dibuat ❤️"
        );

        form.reset();

        setOpen(false);
    } catch (error) {
        console.error(error);

        if (error instanceof Error) {
        toast.error(error.message);
        } else {
        toast.error(
            "Terjadi kesalahan."
        );
        }
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
        Tambah Surat
      </DialogTrigger>

      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>
            Tambah Love Letter
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={submit}
          className="space-y-4"
        >
          <Input
            name="title"
            placeholder="Judul surat"
            required
          />

          <Textarea
            name="content"
            placeholder="Isi surat cinta..."
            rows={8}
            required
          />

          <Button
            type="submit"
            className="w-full"
            disabled={loading}
          >
            {loading
              ? "Menyimpan..."
              : "Simpan"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}