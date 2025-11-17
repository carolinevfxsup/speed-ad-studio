export function Hero() {

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/20 py-20 md:py-32">
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
