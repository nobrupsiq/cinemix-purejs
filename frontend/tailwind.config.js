/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      /* CORES */
      colors: {
        /* ── Roxos ──────────────────────────────── */
        bg: "#0d0519" /* page background */,
        deep: "#220e3a" /* cards, sections */,
        deepb: "#1f0d35",
        mid: "#2d1254" /* sidebar, modals, elevated */,
        vivid: "#6b21a8" /* badges 3D, accents */,
        light: "#9333ea" /* hover states vivid */,

        /* ── Mostarda ───────────────────────────── */
        mu: "#d4a017" /* ACCENT PRIMÁRIO */,
        mul: "#f0c040" /* hover do btn-primary */,
        mup: "#fef3c7" /* pale para backgrounds */,

        /* ── Neutros ────────────────────────────── */
        wh: "#f8f4ff" /* texto primário */,
        gr: "#a89bc2" /* texto secundário */,
        gd: "#5a4e72" /* muted / labels */,

        /* ── Semânticas ─────────────────────────── */
        green: "#22c55e" /* success, disponível */,
        red: "#dc2626" /* danger, esgotado */,
        blue: "#60a5fa" /* info */,
      },

      /* ── Tipografia ─────────────────────────── */
      fontFamily: {
        display: ["Bebas Neue", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },

      /* ── Espaçamento (escala 4px) ───────────── */
      spacing: {
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        8: "32px",
        10: "40px",
        12: "48px",
        16: "64px",
        20: "80px",
      },

      /* ── Border-radius ──────────────────────── */
      borderRadius: {
        sm2: "2px" /* sharp — padrão do sistema */,
        md2: "4px" /* modals, preview containers */,
        pill: "999px" /* pills, badges arredondados */,
      },

      /* TRANSITIONS */
      transitionDuration: {
        DEFAULT: "250ms",
        fast: "150ms" /* hover, micro */,
        slow: "400ms" /* modals, page transitions */,
      },

      transitionTimingFunction: {
        material: "cubic-bezier(.4,0,.2,1)" /* material ease */,
        spring: "cubic-bezier(.34,1.56,.64,1)",
      },

      /* LAYOUT */
      width: {
        sidebar: "260px" /* sidebar width */,
      },

      height: {
        navbar: "72px" /* topbar height */,
      },

      padding: {
        page: "clamp(24px, 5vw, 30px)" /* page padding */,
      },
    },
  },
};
