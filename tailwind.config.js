module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      display: ['Lato, sans-serif'],
      body: ['Lato, sans-serif'],
      mono: ['Roboto Mono'],
    },
    extend: {
      animation: {
        shake: 'shake 0.4s linear 4',
        'spin-fast': 'spin 0.5s linear infinite',
      },
      cursor: {
        help: 'help',
      },
      // each color category in a theme has a single base color with the variations acheived by adjusting lightness (dark and hover variants) and lightness and saturation for muted variants
      colors: {
        'gradient-start': '#AFD803',
        'gradient-mid': '#F2C94C',
        'gradient-end': '#E54033',
        'mango-classic-theme': {
          active: {
            DEFAULT: 'hsl(45, 86%, 62%)',
            dark: 'hsl(45, 86%, 57%)',
          },
          button: {
            DEFAULT: 'hsl(269, 23%, 48%)',
            hover: 'hsl(269, 23%, 43%)',
          },
          link: { DEFAULT: 'hsl(33, 100%, 57%)', hover: 'hsl(33, 100%, 52%)' },
          down: {
            DEFAULT: 'hsl(4, 93%, 60%)',
            dark: 'hsl(4, 93%, 55%)',
            muted: 'hsl(4, 53%, 55%)',
          },
          up: {
            DEFAULT: 'hsl(72, 97%, 41%)',
            dark: 'hsl(72, 97%, 36%)',
            muted: 'hsl(72, 57%, 36%)',
          },
          error: 'hsl(4, 93%, 60%)',
          success: 'hsl(72, 97%, 41%)',
          warning: 'hsl(33, 100%, 57%)',
          'bkg-1': 'hsl(256, 18%, 12%)',
          'bkg-2': 'hsl(256, 18%, 17%)',
          'bkg-3': 'hsl(256, 18%, 22%)',
          'bkg-4': 'hsl(256, 18%, 27%)',
          'fgd-1': 'hsl(253, 19%, 91%)',
          'fgd-2': 'hsl(253, 19%, 81%)',
          'fgd-3': 'hsl(253, 19%, 71%)',
          'fgd-4': 'hsl(253, 19%, 61%)',
        },
        'light-theme': {
          active: {
            DEFAULT: 'hsl(0, 0%, 8%)',
            dark: 'hsl(33, 100%, 52%)',
          },
          button: {
            DEFAULT: 'hsl(0, 0%, 84%)',
            hover: 'hsl(0, 0%, 74%)',
          },
          link: { DEFAULT: 'hsl(33, 100%, 57%)', hover: 'hsl(33, 100%, 52%)' },
          down: {
            DEFAULT: 'hsl(0, 39%, 58%)',
            dark: 'hsl(0, 39%, 53%)',
            muted: 'hsl(0, 19%, 53%)',
          },
          up: {
            DEFAULT: 'hsl(111, 47%, 53%)',
            dark: 'hsl(111, 47%, 48%)',
            muted: 'hsl(111, 7%, 48%)',
          },
          error: 'hsl(0, 39%, 58%)',
          success: 'hsl(111, 47%, 53%)',
          warning: 'hsl(33, 100%, 57%)',
          'bkg-1': 'hsl(0, 0%, 99%)',
          'bkg-2': 'hsl(0, 0%, 94%)',
          'bkg-3': 'hsl(0, 0%, 89%)',
          'bkg-4': 'hsl(0, 0%, 84%)',
          'fgd-1': 'hsl(0, 0%, 8%)',
          'fgd-2': 'hsl(0, 0%, 23%)',
          'fgd-3': 'hsl(0, 0%, 38%)',
          'fgd-4': 'hsl(0, 0%, 53%)',
        },
        'dark-theme': {
          active: {
            DEFAULT: 'hsl(45, 86%, 62%)',
            dark: 'hsl(45, 86%, 57%)',
          },
          button: {
            DEFAULT: 'hsl(269, 0%, 38%)',
            hover: 'hsl(269, 0%, 33%)',
          },
          link: { DEFAULT: 'hsl(45, 86%, 62%)', hover: 'hsl(45, 86%, 57%)' },
          down: {
            DEFAULT: 'hsl(0, 59%, 58%)',
            dark: 'hsl(0, 59%, 53%)',
            muted: 'hsl(0, 19%, 53%)',
          },
          up: {
            DEFAULT: 'hsl(111, 47%, 43%)',
            dark: 'hsl(111, 47%, 38%)',
            muted: 'hsl(111, 7%, 38%)',
          },
          error: 'hsl(0, 59%, 58%)',
          success: 'hsl(111, 47%, 43%)',
          warning: 'hsl(45, 86%, 62%)',
          'bkg-1': 'hsl(240, 6%, 7%)',
          'bkg-2': 'hsl(240, 6%, 12%)',
          'bkg-3': 'hsl(240, 6%, 17%)',
          'bkg-4': 'hsl(240, 6%, 22%)',
          'fgd-1': 'hsl(0, 0%, 82%)',
          'fgd-2': 'hsl(0, 0%, 72%)',
          'fgd-3': 'hsl(0, 0%, 62%)',
          'fgd-4': 'hsl(0, 0%, 52%)',
        },
        'medium-theme': {
          active: {
            DEFAULT: 'hsl(45, 86%, 62%)',
            dark: 'hsl(45, 86%, 57%)',
          },
          button: {
            DEFAULT: 'hsl(269, 0%, 43%)',
            hover: 'hsl(269, 0%, 38%)',
          },
          link: { DEFAULT: 'hsl(45, 86%, 62%)', hover: 'hsl(45, 86%, 57%)' },
          down: {
            DEFAULT: 'hsl(0, 59%, 58%)',
            dark: 'hsl(0, 59%, 53%)',
            muted: 'hsl(0, 19%, 53%)',
          },
          up: {
            DEFAULT: 'hsl(111, 47%, 43%)',
            dark: 'hsl(111, 47%, 38%)',
            muted: 'hsl(111, 7%, 38%)',
          },
          error: 'hsl(0, 59%, 58%)',
          success: 'hsl(111, 47%, 43%)',
          warning: 'hsl(45, 86%, 62%)',
          'bkg-1': 'hsl(240, 6%, 12%)',
          'bkg-2': 'hsl(240, 6%, 17%)',
          'bkg-3': 'hsl(240, 6%, 22%)',
          'bkg-4': 'hsl(240, 6%, 27%)',
          'fgd-1': 'hsl(0, 0%, 80%)',
          'fgd-2': 'hsl(0, 0%, 70%)',
          'fgd-3': 'hsl(0, 0%, 60%)',
          'fgd-4': 'hsl(0, 0%, 50%)',
        },
        'blueberry-theme': {
          active: {
            DEFAULT: 'hsl(45, 86%, 62%)',
            dark: 'hsl(45, 86%, 57%)',
          },
          button: {
            DEFAULT: 'hsl(220, 91%, 64%)',
            hover: 'hsl(220, 91%, 59%)',
          },
          link: { DEFAULT: 'hsl(45, 86%, 62%)', hover: 'hsl(45, 86%, 57%)' },
          down: {
            DEFAULT: 'hsl(3, 59%, 56%)',
            dark: 'hsl(3, 59%, 51%)',
            muted: 'hsl(3, 19%, 51%)',
          },
          up: {
            DEFAULT: 'hsl(165, 82%, 45%)',
            dark: 'hsl(165, 82%, 40%)',
            muted: 'hsl(165, 42%, 40%)',
          },
          error: 'hsl(3, 59%, 56%)',
          success: 'hsl(165, 82%, 45%)',
          warning: 'hsl(45, 86%, 62%)',
          'bkg-1': 'hsl(222, 74%, 21%)',
          'bkg-2': 'hsl(222, 74%, 26%)',
          'bkg-3': 'hsl(222, 74%, 31%)',
          'bkg-4': 'hsl(222, 74%, 36%)',
          'fgd-1': 'hsl(220, 71%, 96%)',
          'fgd-2': 'hsl(220, 71%, 86%)',
          'fgd-3': 'hsl(220, 71%, 76%)',
          'fgd-4': 'hsl(220, 71%, 66%)',
        },
        'banana-theme': {
          active: {
            DEFAULT: 'hsl(236, 95%, 68%)',
            dark: 'hsl(236, 95%, 58%)',
          },
          button: {
            DEFAULT: 'hsl(51, 95%, 72%)',
            hover: 'hsl(51, 95%, 68%)',
          },
          link: { DEFAULT: 'hsl(33, 100%, 57%)', hover: 'hsl(33, 100%, 52%)' },
          down: {
            DEFAULT: 'hsl(0, 39%, 58%)',
            dark: 'hsl(0, 39%, 53%)',
            muted: 'hsl(0, 19%, 53%)',
          },
          up: {
            DEFAULT: 'hsl(110, 23%, 59%)',
            dark: 'hsl(110, 23%, 54%)',
            muted: 'hsl(110, 3%, 54%)',
          },
          error: 'hsl(0, 39%, 58%)',
          success: 'hsl(110, 23%, 59%)',
          warning: 'hsl(33, 100%, 57%)',
          'bkg-1': 'hsl(55, 90%, 90%)',
          'bkg-2': 'hsl(55, 80%, 85%)',
          'bkg-3': 'hsl(55, 70%, 80%)',
          'bkg-4': 'hsl(55, 60%, 75%)',
          'fgd-1': 'hsl(60, 10%, 14%)',
          'fgd-2': 'hsl(60, 10%, 24%)',
          'fgd-3': 'hsl(60, 10%, 34%)',
          'fgd-4': 'hsl(60, 10%, 44%)',
        },
        'avocado-theme': {
          active: {
            DEFAULT: 'hsl(63, 74%, 67%)',
            dark: 'hsl(63, 74%, 62%)',
          },
          button: {
            DEFAULT: 'hsl(156, 55%, 26%)',
            hover: 'hsl(202, 5%, 40%)',
          },
          link: { DEFAULT: 'hsl(31, 100%, 57%)', hover: 'hsl(31, 100%, 42%)' },
          down: {
            DEFAULT: 'hsl(3, 59%, 56%)',
            dark: 'hsl(3, 59%, 51%)',
            muted: 'hsl(3, 19%, 51%)',
          },
          up: {
            DEFAULT: 'hsl(120, 50%, 53%)',
            dark: 'hsl(120, 50%, 48%)',
            muted: 'hsl(120, 10%, 48%)',
          },
          error: 'hsl(3, 59%, 56%)',
          success: 'hsl(120, 50%, 53%)',
          warning: 'hsl(37, 92%, 62%)',
          'bkg-1': 'hsl(156, 48%, 9%)',
          'bkg-2': 'hsl(156, 48%, 14%)',
          'bkg-3': 'hsl(156, 48%, 19%)',
          'bkg-4': 'hsl(156, 48%, 24%)',
          'fgd-1': 'hsl(120, 20%, 93%)',
          'fgd-2': 'hsl(120, 20%, 83%)',
          'fgd-3': 'hsl(120, 20%, 73%)',
          'fgd-4': 'hsl(120, 20%, 63%)',
        },
        'th-bkg-1': 'var(--bkg-1)',
        'th-bkg-2': 'var(--bkg-2)',
        'th-bkg-3': 'var(--bkg-3)',
        'th-bkg-4': 'var(--bkg-4)',
        'th-fgd-1': 'var(--fgd-1)',
        'th-fgd-2': 'var(--fgd-2)',
        'th-fgd-3': 'var(--fgd-3)',
        'th-fgd-4': 'var(--fgd-4)',
        'th-active': 'var(--active)',
        'th-active-dark': 'var(--active-dark)',
        'th-error': 'var(--error)',
        'th-success': 'var(--success)',
        'th-warning': 'var(--warning)',
        'th-down': 'var(--down)',
        'th-down-dark': 'var(--down-dark)',
        'th-down-muted': 'var(--down-muted)',
        'th-up': 'var(--up)',
        'th-up-dark': 'var(--up-dark)',
        'th-up-muted': 'var(--up-muted)',
        'th-link': 'var(--link)',
        'th-link-hover': 'var(--link-hover)',
        'th-button': 'var(--button)',
        'th-button-hover': 'var(--button-hover)',
        'th-warning': 'var(--warning)',
      },
      fontSize: {
        xxs: '.65rem',
      },
      keyframes: {
        shake: {
          '0%, 100%': {
            transform: 'rotate(0deg)',
          },
          '20%, 60%': {
            transform: 'rotate(6deg)',
          },
          '40%, 80%': {
            transform: 'rotate(-6deg)',
          },
        },
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      },
      backgroundImage: {
        'long-loss': "url('/share_images/bg-long-loss.png')",
        'long-profit': "url('/share_images/bg-long-profit.png')",
        'short-loss': "url('/share_images/bg-short-loss.png')",
        'short-profit': "url('/share_images/bg-short-profit.png')",
      },
      screens: {
        xl: '1600px',
      },
    },
  },
  // variants: {
  //   extend: {
  //     cursor: ['hover', 'focus', 'disabled'],
  //     opacity: ['disabled'],
  //     backgroundColor: ['disabled'],
  //     textColor: ['disabled'],
  //   },
  // },
  plugins: [],
}
