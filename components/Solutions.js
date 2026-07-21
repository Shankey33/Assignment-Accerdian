import Image from "next/image";

export default function Solutions() {
  return (
    <section id="solutions" className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-[1500px]">
        <div className="relative mx-auto flex min-h-[420px] items-center justify-center lg:min-h-[620px]">
          <Image
            src="/accredian-edge-usp-v3.svg"
            alt="Accredian edge illustration"
            width={1500}
            height={620}
            className="h-auto w-full max-w-[1500px]"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
