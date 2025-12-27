import Image from "next/image";
import Link from "next/link";

export default function SiteHeader({ section }: { section: string }) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      height: "64px",
      width: "100%",
      justifyContent: "space-between",
      paddingTop: "12px",
      paddingBottom: "12px",
      marginBottom: "12px",
      position: "relative",
      zIndex: 1000
    }}>
      <div style={{
        display: "flex",
        flexDirection: "row",
        paddingTop: "4px",
        transform: "scale(0.75)",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Link href="/" style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          whiteSpace: "nowrap",
          borderRadius: "6px",
          height: "36px",
          paddingLeft: "16px",
          paddingRight: "16px",
          paddingTop: "8px",
          paddingBottom: "8px",
          fontWeight: 600,
          fontSize: "14px",
          marginRight: "8px",
          lineHeight: "16px",
          color: "#1A1B1C",
          textDecoration: "none"
        }}>
          SKINSTRIC
        </Link>
        <Image
          alt="left-bracket"
          src="/Rectangle_2710.png"
          width={5}
          height={19}
          style={{ width: "4px", height: "17px", color: "transparent" }}
        />
        <p style={{
          color: "#1a1b1c83",
          opacity: 0.7,
          fontWeight: 600,
          fontSize: "14px",
          marginLeft: "6px",
          marginRight: "6px"
        }}>
          {section}
        </p>
        <Image
          alt="right-bracket"
          src="/Rectangle_2711.png"
          width={5}
          height={19}
          style={{ width: "4px", height: "17px", color: "transparent" }}
        />
      </div>
      <button style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        whiteSpace: "nowrap",
        fontWeight: 600,
        transitionProperty: "color, background-color, border-color",
        height: "36px",
        paddingLeft: "16px",
        paddingRight: "16px",
        marginLeft: "16px",
        marginRight: "16px",
        transform: "scale(0.8)",
        color: "#FCFCFC",
        fontSize: "10px",
        backgroundColor: "#1A1B1C",
        lineHeight: "16px",
        border: "none",
        cursor: "pointer"
      }}>
        ENTER CODE
      </button>
    </div>
  );
}

