"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

import { deleteLoveLetter } from "@/lib/actions/delete-love-letter";

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

export default function DeleteLoveLetterButton({
  id,
}: Props) {
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    try {
      setLoading(true);

      await deleteLoveLetter(id);

      toast.success("Love Letter berhasil dihapus ❤️");
    } catch {
      toast.error("Gagal menghapus Love Letter.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button
            variant="destructive"
            size="icon"
          />
        }
      >
        <Trash2 size={18} />
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Hapus Love Letter
          </DialogTitle>

          <DialogDescription>
            Love Letter akan dihapus permanen.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button
            variant="destructive"
            disabled={loading}
            onClick={handleDelete}
          >
            {loading ? "Menghapus..." : "Hapus"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}