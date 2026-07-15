"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

type Props = {
  open: boolean;
  loading?: boolean;
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  onClose: () => void;
  onConfirm: () => void;
};

export default function ConfirmDialog({
  open,
  loading,
  title,
  description,
  confirmText = "Hapus Permanen",
  cancelText = "Batal",
  onClose,
  onConfirm,
}: Props) {
  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        if (!value) onClose();
      }}
    >
      <DialogContent className="max-w-md rounded-3xl">
        <div className="flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
            <AlertTriangle
              size={42}
              className="text-red-600"
            />
          </div>
        </div>

        <DialogHeader className="mt-5 text-center">
          <DialogTitle className="text-2xl">
            {title}
          </DialogTitle>

          <DialogDescription className="mt-3 text-base leading-7">
            {description}
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="mt-8 flex gap-3">
          <Button
            variant="outline"
            className="flex-1"
            onClick={onClose}
          >
            {cancelText}
          </Button>

          <Button
            variant="destructive"
            className="flex-1"
            disabled={loading}
            onClick={onConfirm}
          >
            {loading
              ? "Menghapus..."
              : confirmText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}