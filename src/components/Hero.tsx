export function Hero() {

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/20 min-h-[70vh] md:min-h-screen">
      {/* Background video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-90"
        >
          <source src="/header.mp4" type="video/mp4" />
        </video>
      </div>

    </section>
  );
}
