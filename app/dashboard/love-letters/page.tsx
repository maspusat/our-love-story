import { createServerSupabase } from "@/lib/supabase/server";

import LoveLetterForm from "@/components/dashboard/love-letter/LoveLetterForm";
import DeleteLoveLetterButton from "@/components/dashboard/love-letter/DeleteLoveLetterButton";
import LoveLetterPublishSwitch from "@/components/dashboard/love-letter/LoveLetterPublishSwitch";
import EditLoveLetterDialog from "@/components/dashboard/love-letter/EditLoveLetterDialog";

export default async function LoveLettersPage() {
  const supabase = await createServerSupabase();

  const { data } = await supabase
    .from("love_letters")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Love Letter
          </h1>

          <p className="text-gray-500">
            Kelola seluruh surat cinta.
          </p>
        </div>

        <LoveLetterForm />
      </div>

      <div className="grid gap-6">
        {data?.map((item) => (
          <div
            key={item.id}
            className="rounded-3xl bg-white p-6 shadow transition hover:shadow-lg"
          >
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <h2 className="text-2xl font-bold">
                  {item.title}
                </h2>

                <p className="mt-4 whitespace-pre-line leading-relaxed text-gray-600">
                  {item.content}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <LoveLetterPublishSwitch
                  id={item.id}
                  checked={item.is_published}
                />

                <EditLoveLetterDialog
                  id={item.id}
                  title={item.title}
                  content={item.content}
                />

                <DeleteLoveLetterButton
                  id={item.id}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}