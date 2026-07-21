import Image from "next/image";

export default function Programs() {
  return (
    <section id="programs" className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto flex max-w-[980px] items-center justify-center">
        <Image
          src="/catV2.svg"
          alt="CAT section illustration"
          width={1500}
          height={900}
          className="h-auto w-full max-w-[980px]"
          priority={false}
        />
      </div>
    </section>
  );
}
