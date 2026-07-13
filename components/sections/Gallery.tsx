export default function Gallery() {
  return (
    <section id="gallery"className="bg-rose-50 py-24">
      <div className="mx-auto max-w-6xl px-6">

        <h2 className="text-center text-4xl font-bold text-rose-600">
          Gallery
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {[1,2,3,4,5,6].map((item) => (
            <div
              key={item}
              className="aspect-square rounded-2xl bg-pink-200"
            />
          ))}
        </div>

      </div>
    </section>
  );
}