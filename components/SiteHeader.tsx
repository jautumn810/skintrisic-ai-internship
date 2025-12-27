import Image from "next/image";

export default function SiteHeader({ section }: { section: string }) {
  return (
    <header className="site-header">
      <div className="brand">
        <div>SKINSTRIC</div>
        <Image
          alt="left-bracket"
          src="/Rectangle_2710.png"
          width={5}
          height={19}
          className="w-[4px] h-[17px]"
          style={{ color: "transparent" }}
        />
        <div className="section">[ {section} ]</div>
        <Image
          alt="right-bracket"
          src="/Rectangle_2711.png"
          width={5}
          height={19}
          className="w-[4px] h-[17px]"
          style={{ color: "transparent" }}
        />
      </div>
      <div className="enter-code">ENTER CODE</div>
    </header>
  );
}

