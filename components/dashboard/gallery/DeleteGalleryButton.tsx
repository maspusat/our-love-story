"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

import { deleteGallery } from "@/lib/actions/delete-gallery";

import ConfirmDialog from "@/components/ui/confirm-dialog";
import { Button } from "@/components/ui/button";

type Props = {
  id: string;
  storagePath: string;
};

export default function DeleteGalleryButton({
  id,
  storagePath,
}: Props) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    try {
      setLoading(true);

      await deleteGallery(id, storagePath);

      toast.success("Foto berhasil dihapus ❤️");

      setOpen(false);
    } catch {
      toast.error("Gagal menghapus foto.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Button
        variant="destructive"
        size="icon"
        onClick={() => setOpen(true)}
      >
        <Trash2 size={18} />
      </Button>

      <ConfirmDialog
        open={open}
        loading={loading}
        title="Hapus Foto?"
        description="Foto akan dihapus permanen dari Gallery. Tindakan ini tidak dapat dibatalkan."
        confirmText="Hapus Permanen"
        cancelText="Batal"
        onClose={() => setOpen(false)}
        onConfirm={handleDelete}
      />
    </>
  );
}