export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        bg: "var(--dark-bg)",

        purple: {
          deep: "var(--purple-deep)",
          mid: "var(--purple-mid)",
          vivid: "var(--purple-vivid)",
          light: "var(--purple-light)",
        },

        mustard: {
          DEFAULT: "var(--mustard)",
          light: "var(--mustard-light)",
          pale: "var(--mustard-pale)",
        },

        white: "var(--white)",

        gray: {
          DEFAULT: "var(--gray)",
          dark: "var(--gray-dark)",
        },

        success: "var(--green)",
        danger: "var(--red)",
      },

      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },

      borderRadius: {
        DEFAULT: "var(--radius)",
        lg: "var(--radius-lg)",
      },

      spacing: {
        sidebar: "var(--sidebar-w)",
        nav: "var(--nav-h)",
      },
    },
  },
};
