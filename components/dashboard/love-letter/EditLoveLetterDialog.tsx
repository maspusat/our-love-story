"use client";

import { useState } from "react";
import { Pencil } from "lucide-react";
import { toast } from "sonner";

import { updateLoveLetter } from "@/lib/actions/update-love-letter";

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

type Props = {
  id: string;
  title: string;
  content: string;
};

export default function EditLoveLetterDialog({
  id,
  title,
  content,
}: Props) {
  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  async function submit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    formData.append("id", id);

    try {
      setLoading(true);

      await updateLoveLetter(formData);

      toast.success(
        "Love Letter berhasil diperbarui ❤️"
      );

      setOpen(false);
    } catch {
      toast.error(
        "Gagal memperbarui Love Letter."
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
            size="icon"
            variant="outline"
          />
        }
      >
        <Pencil size={18} />
      </DialogTrigger>

      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>
            Edit Love Letter
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={submit}
          className="space-y-4"
        >
          <Input
            name="title"
            defaultValue={title}
            required
          />

          <Textarea
            name="content"
            defaultValue={content}
            rows={8}
            required
          />

          <Button
            type="submit"
            disabled={loading}
            className="w-full"
          >
            {loading
              ? "Menyimpan..."
              : "Simpan Perubahan"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}