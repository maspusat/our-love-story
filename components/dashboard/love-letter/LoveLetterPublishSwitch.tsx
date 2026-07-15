"use client";

import { useTransition } from "react";
import { toast } from "sonner";

import { Switch } from "@/components/ui/switch";

import { toggleLoveLetter } from "@/lib/actions/toggle-love-letter";

type Props = {
  id: string;
  checked: boolean;
};

export default function LoveLetterPublishSwitch({
  id,
  checked,
}: Props) {
  const [pending, startTransition] = useTransition();

  return (
    <Switch
      checked={checked}
      disabled={pending}
      onCheckedChange={(value) => {
        startTransition(async () => {
          try {
            await toggleLoveLetter(id, value);

            toast.success(
              value
                ? "Love Letter dipublish ❤️"
                : "Love Letter disembunyikan"
            );
          } catch {
            toast.error("Terjadi kesalahan.");
          }
        });
      }}
    />
  );
}