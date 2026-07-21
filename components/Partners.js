export default function Partners() {
  const clients = [
    { name: "Reliance", subtext: "Industries Limited", className: "text-[#2c241f]" },
    { name: "HCL", className: "text-[#1775c7]" },
    { name: "IBM", className: "text-[#2172d6] tracking-[0.16em]" },
    { name: "CRIF", className: "text-[#114a9b] italic" },
    { name: "ADP", className: "text-[#d92c1f]" },
    { name: "BAYER", className: "text-[#123a57]" },
  ];

  return (
    <section id="partners" className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-[3rem]">
            Our Proven <span className="text-[#2673e8]">Partnerships</span>
          </h2>
          <p className="mt-4 text-lg text-slate-700 sm:text-xl">
            Successful Collaborations With the <span className="text-[#2673e8]">Industry’s Best</span>
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-6 lg:gap-y-0">
          {clients.map((client) => (
            <div key={client.name} className="flex min-h-[110px] items-center justify-center px-3 text-center">
              {client.name === "Reliance" ? (
                <div className="leading-none">
                  <div className={`text-[1.95rem] font-serif ${client.className}`}>Reliance</div>
                  <div className="mt-1 text-[0.95rem] font-medium tracking-[0.08em] text-[#3d3129]">Industries Limited</div>
                </div>
              ) : client.name === "BAYER" ? (
                <div className="flex h-28 w-28 items-center justify-center rounded-full border-[6px] border-[#97d92a] text-center shadow-[0_0_0_3px_rgba(38,115,232,0.12)]">
                  <div className="text-[0.9rem] font-extrabold leading-[0.95] tracking-[0.28em] text-[#173c59]">
                    B
                    <br />
                    A
                    <br />
                    Y
                    <br />
                    E
                    <br />
                    R
                  </div>
                </div>
              ) : client.name === "CRIF" ? (
                <div className="text-center">
                  <div className={`text-[2.4rem] font-extrabold leading-none ${client.className}`}>CRIF</div>
                  <div className="mt-1 text-[0.7rem] font-medium italic text-[#114a9b]">Together to the next level</div>
                </div>
              ) : client.name === "IBM" ? (
                <div className={`text-[2.4rem] font-extrabold leading-none ${client.className}`}>IBM</div>
              ) : client.name === "ADP" ? (
                <div className={`text-[2.75rem] font-extrabold leading-none tracking-[-0.06em] ${client.className}`}>ADP</div>
              ) : (
                <div className={`text-[2.35rem] font-black leading-none ${client.className}`}>{client.name}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
