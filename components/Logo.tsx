import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        textDecoration: "none",
        color: "white",
        fontWeight: 800,
        letterSpacing: "-0.4px",
      }}
    >

      <span
        style={{
          width: 24,
          height: 24,
          borderRadius: 7,
          display: "grid",
          placeItems: "center",
          background:
            "linear-gradient(135deg,#1683ff,#7654ff)",
          boxShadow:
            "0 0 22px rgba(50,110,255,.35)",
          fontSize: 13,
        }}
      >
        R
      </span>

      <span>
        Revora
      </span>

    </Link>
  );
}
