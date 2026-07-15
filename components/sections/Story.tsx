type Props = {
  data: {
    story_title: string | null;
    story_description: string | null;
  } | null;
};

export default function Story({
  data,
}: Props) {
  return (
    <section
      id="story"
      className="bg-white py-28"
    >
      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">

          <p className="uppercase tracking-[8px] text-rose-500">
            Our Story
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900">
            {data?.story_title ??
              "Every Love Has A Beautiful Story"}
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              whitespace-pre-line
              text-lg
              leading-9
              text-gray-600
            "
          >
            {data?.story_description ??
              "Our story will appear here."}
          </p>

        </div>

      </div>
    </section>
  );
}