export default function Header() {
  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <img
        className=""
        src="/na-logo.png"
        alt="Nettalliansen logo"
        width={200}
        height={200}
      />
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        <code className="font-mono font-bold">HUSK:</code> &nbsp; KI kan gjøre
        feil. Dobbeltsjekk alltid viktig informasjon.
      </p>
    </div>
  );
}
