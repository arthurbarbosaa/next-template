export default function Demo() {
  return (
    <section id="demo" className="py-24 bg-default-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Veja nossa demonstração</h2>
          <p className="text-lg text-default-600">
            Confira como nossa plataforma funciona na prática
          </p>
        </div>
        <div className="flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/E2sSvVCRI4s?si=vMqBYEzlLJfI3UJc"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-xl shadow-2xl"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
