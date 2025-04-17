export default function ReelComponent() {
  return (
    <section className="w-full">
      <div className="mx-auto">
        <div className="w-full mx-auto flex flex-col md:flex-row items-start justify-start md:items-start lg:gap-8 gap-4">
          <div className="w-full md:w-1/2">
            <iframe
              className="rounded-xl aspect-video"
              width="100%"
              src="https://www.youtube.com/embed/k76BgIb89-s"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-start justify-start text-left">
            <p className="text-sm font-semibold uppercase mb-2">
              Featured Video
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              SUPERMAN – SNEAK PEEK
            </h2>
            <p className="text-gray-400">
              Krypto, take us home. <em>Superman</em> – Only in Theaters July
              11.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
