module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      display: ['var(--font-display)'],
      body: ['var(--font-body)'],
      mono: ['var(--font-mono)'],
      rewards: ['var(--font-rewards)'],
    },
    extend: {
      animation: {
        shake: 'shake 0.4s linear 4',
        'spin-fast': 'spin 0.5s linear infinite',
      },
      backgroundImage: {
        'share-position': "url('/images/share-image.png')",
      },
      boxShadow: {
        bottomBar: '0px -4px 8px -1px rgba(0,0,0,0.2)',
      },
      // each color category in a theme has a single base color with the variations acheived by adjusting lightness (dark and hover variants) and lightness and saturation for muted variants
      colors: {
        'mango-classic-theme': {
          active: {
            DEFAULT: 'hsl(45, 86%, 62%)',
            dark: 'hsl(45, 86%, 57%)',
          },
          button: {
            DEFAULT: 'hsl(269, 38%, 48%)',
            hover: 'hsl(269, 38%, 43%)',
          },
          input: {
            bkg: 'hsl(256, 18%, 10%)',
            border: 'hsl(253, 19%, 41%)',
            borderDark: 'hsl(253, 19%, 31%)',
          },
          link: { DEFAULT: 'hsl(33, 100%, 57%)', hover: 'hsl(33, 100%, 52%)' },
          down: {
            DEFAULT: 'hsl(4, 63%, 55%)',
            dark: 'hsl(4, 93%, 55%)',
            muted: 'hsl(4, 43%, 38%)',
          },
          up: {
            DEFAULT: 'hsl(77, 63%, 40%)',
            dark: 'hsl(85, 50%, 36%)',
            muted: 'hsl(84, 40%, 32%)',
          },
          error: 'hsl(4, 93%, 60%)',
          success: 'hsl(82, 97%, 41%)',
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
          input: {
            bkg: 'hsl(0, 0%, 97%)',
            border: 'hsl(0, 0%, 33%)',
            borderDark: 'hsl(0, 0%, 23%)',
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
          input: {
            bkg: 'hsl(240, 6%, 5%)',
            border: 'hsl(0, 0%, 32%)',
            borderDark: 'hsl(0, 0%, 22%)',
          },
          link: { DEFAULT: 'hsl(45, 86%, 62%)', hover: 'hsl(45, 86%, 57%)' },
          down: {
            DEFAULT: 'hsl(358, 55%, 50%)',
            dark: 'hsl(0, 45%, 26%)',
            muted: 'hsl(0, 45%, 30%)',
          },
          up: {
            DEFAULT: 'hsl(111, 47%, 43%)',
            dark: 'hsl(111, 47%, 38%)',
            muted: 'hsl(130, 34%, 26%)',
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
          input: {
            bkg: 'hsl(240, 6%, 10%)',
            border: 'hsl(0, 0%, 30%)',
            borderDark: 'hsl(0, 0%, 20%)',
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
        'high-contrast-theme': {
          active: {
            DEFAULT: 'hsl(62, 96%, 54%)',
            dark: 'hsl(62, 96%, 49%)',
          },
          button: {
            DEFAULT: 'hsl(62, 96%, 54%)',
            hover: 'hsl(62, 96%, 49%)',
          },
          input: {
            bkg: 'hsl(0, 0%, 0%)',
            border: 'hsl(0, 0%, 65%)',
            borderDark: 'hsl(0, 0%, 55%)',
          },
          link: { DEFAULT: 'hsl(45, 86%, 62%)', hover: 'hsl(45, 86%, 57%)' },
          down: {
            DEFAULT: 'hsl(0, 100%, 58%)',
            dark: 'hsl(0, 100%, 58%)',
            muted: 'hsl(0, 49%, 48%)',
          },
          up: {
            DEFAULT: 'hsl(111, 90%, 58%)',
            dark: 'hsl(111, 90%, 58%)',
            muted: 'hsl(111, 40%, 48%)',
          },
          error: 'hsl(0, 100%, 58%)',
          success: 'hsl(111, 90%, 58%)',
          warning: 'hsl(45, 86%, 62%)',
          'bkg-1': 'hsl(0, 0%, 0%)',
          'bkg-2': 'hsl(0, 0%, 7%)',
          'bkg-3': 'hsl(0, 0%, 14%)',
          'bkg-4': 'hsl(0, 0%, 21%)',
          'fgd-1': 'hsl(0, 0%, 100%)',
          'fgd-2': 'hsl(0, 0%, 95%)',
          'fgd-3': 'hsl(0, 0%, 90%)',
          'fgd-4': 'hsl(0, 0%, 85%)',
        },
        'blueberry-theme': {
          active: {
            DEFAULT: 'hsl(45, 86%, 62%)',
            dark: 'hsl(45, 86%, 57%)',
          },
          button: {
            DEFAULT: 'hsl(220, 91%, 44%)',
            hover: 'hsl(220, 91%, 39%)',
          },
          input: {
            bkg: 'hsl(222, 74%, 19%)',
            border: 'hsl(220, 71%, 46%)',
            borderDark: 'hsl(220, 71%, 36%)',
          },
          link: { DEFAULT: 'hsl(45, 86%, 62%)', hover: 'hsl(45, 86%, 57%)' },
          down: {
            DEFAULT: 'hsl(3, 59%, 56%)',
            dark: 'hsl(3, 59%, 51%)',
            muted: 'hsl(3, 19%, 51%)',
          },
          up: {
            DEFAULT: 'hsl(165, 82%, 37%)',
            dark: 'hsl(165, 82%, 32%)',
            muted: 'hsl(165, 42%, 32%)',
          },
          error: 'hsl(3, 59%, 56%)',
          success: 'hsl(165, 82%, 37%)',
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
          input: {
            bkg: 'hsl(55, 90%, 88%)',
            border: 'hsl(60, 10%, 24%)',
            borderDark: 'hsl(60, 10%, 14%)',
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
            hover: 'hsl(156, 55%, 21%)',
          },
          input: {
            bkg: 'hsl(156, 48%, 7%)',
            border: 'hsl(120, 20%, 43%)',
            borderDark: 'hsl(120, 20%, 33%)',
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
        'olive-theme': {
          active: {
            DEFAULT: 'hsl(53, 68%, 71%)',
            dark: 'hsl(53, 68%, 66%)',
          },
          button: {
            DEFAULT: 'hsl(51, 13%, 44%)',
            hover: 'hsl(51, 13%, 39%)',
          },
          input: {
            bkg: 'hsl(51, 16%, 17%)',
            border: 'hsl(55, 17%, 41%)',
            borderDark: 'hsl(55, 17%, 31%)',
          },
          link: { DEFAULT: 'hsl(45, 86%, 62%)', hover: 'hsl(45, 86%, 57%)' },
          down: {
            DEFAULT: 'hsl(3, 85%, 56%)',
            dark: 'hsl(3, 85%, 51%)',
            muted: 'hsl(3, 45%, 51%)',
          },
          up: {
            DEFAULT: 'hsl(102, 63%, 41%)',
            dark: 'hsl(102, 63%, 36%)',
            muted: 'hsl(102, 23%, 36%)',
          },
          error: 'hsl(3, 59%, 76%)',
          success: 'hsl(102, 63%, 41%)',
          warning: 'hsl(45, 86%, 62%)',
          'bkg-1': 'hsl(51, 16%, 19%)',
          'bkg-2': 'hsl(51, 16%, 24%)',
          'bkg-3': 'hsl(51, 16%, 29%)',
          'bkg-4': 'hsl(51, 16%, 34%)',
          'fgd-1': 'hsl(55, 47%, 91%)',
          'fgd-2': 'hsl(55, 37%, 81%)',
          'fgd-3': 'hsl(55, 27%, 71%)',
          'fgd-4': 'hsl(55, 17%, 61%)',
        },
        'lychee-theme': {
          active: {
            DEFAULT: 'hsl(236, 95%, 32%)',
            dark: 'hsl(236, 95%, 27%)',
          },
          button: {
            DEFAULT: 'hsl(356, 61%, 80%)',
            hover: 'hsl(356, 61%, 75%)',
          },
          input: {
            bkg: 'hsl(356, 58%, 93%)',
            border: 'hsl(357, 41%, 31%)',
            borderDark: 'hsl(357, 41%, 21%)',
          },
          link: { DEFAULT: 'hsl(33, 100%, 57%)', hover: 'hsl(33, 100%, 52%)' },
          down: {
            DEFAULT: 'hsl(356, 61%, 48%)',
            dark: 'hsl(356, 61%, 43%)',
            muted: 'hsl(356, 21%, 43%)',
          },
          up: {
            DEFAULT: 'hsl(155, 48%, 34%)',
            dark: 'hsl(155, 48%, 29%)',
            muted: 'hsl(155, 8%, 29%)',
          },
          error: 'hsl(356, 61%, 48%)',
          success: 'hsl(155, 48%, 34%)',
          warning: 'hsl(33, 100%, 44%)',
          'bkg-1': 'hsl(356, 58%, 95%)',
          'bkg-2': 'hsl(356, 58%, 90%)',
          'bkg-3': 'hsl(356, 58%, 85%)',
          'bkg-4': 'hsl(356, 58%, 80%)',
          'fgd-1': 'hsl(357, 56%, 21%)',
          'fgd-2': 'hsl(357, 51%, 31%)',
          'fgd-3': 'hsl(357, 46%, 41%)',
          'fgd-4': 'hsl(357, 41%, 51%)',
        },
        'bonk-theme': {
          active: {
            DEFAULT: '#000',
            dark: '#000',
          },
          button: {
            DEFAULT: 'hsl(12, 50%, 45%)',
            hover: 'hsl(12, 50%, 40%)',
          },
          input: {
            bkg: 'hsl(30, 84%, 47%)',
            border: 'hsl(30, 84%, 33%)',
            borderDark: 'hsl(30, 84%, 28%)',
          },
          link: { DEFAULT: 'hsl(45, 86%, 62%)', hover: 'hsl(45, 86%, 57%)' },
          down: {
            DEFAULT: 'hsl(359, 62%, 47%)',
            dark: 'hsl(359, 62%, 42%)',
            muted: 'hsl(359, 22%, 42%)',
          },
          up: {
            DEFAULT: 'hsl(52, 95%, 64%)',
            dark: 'hsl(52, 95%, 44%)',
            muted: 'hsl(52, 55%, 54%)',
          },
          error: 'hsl(359, 62%, 47%)',
          success: 'hsl(52, 95%, 64%)',
          warning: 'hsl(24, 100%, 43%)',
          'bkg-1': 'hsl(24, 85%, 56%)',
          'bkg-2': 'hsl(30, 84%, 47%)',
          'bkg-3': 'hsl(39, 72%, 63%)',
          'bkg-4': 'hsl(39, 72%, 68%)',
          'fgd-1': 'hsl(52, 93%, 99%)',
          'fgd-2': 'hsl(52, 85%, 93%)',
          'fgd-3': 'hsl(52, 80%, 87%)',
          'fgd-4': 'hsl(52, 75%, 81%)',
        },
        'pepe-theme': {
          active: {
            DEFAULT: 'hsl(52, 95%, 64%)',
            dark: 'hsl(52, 95%, 54%)',
          },
          button: {
            DEFAULT: 'hsl(104, 72%, 30%)',
            hover: 'hsl(104, 72%, 24%)',
          },
          input: {
            bkg: 'hsl(104, 31%, 15%)',
            border: 'hsl(104, 41%, 60%)',
            borderDark: 'hsl(104, 41%, 50%)',
          },
          link: { DEFAULT: 'hsl(45, 86%, 62%)', hover: 'hsl(45, 86%, 57%)' },
          down: {
            DEFAULT: 'hsl(12, 70%, 56%)',
            dark: 'hsl(12, 70%, 46%)',
            muted: 'hsl(12, 40%, 46%)',
          },
          up: {
            DEFAULT: 'hsl(102, 72%, 44%)',
            dark: 'hsl(102, 72%, 34%)',
            muted: 'hsl(102, 32%, 34%)',
          },
          error: 'hsl(12, 70%, 56%)',
          success: 'hsl(102, 72%, 44%)',
          warning: 'hsl(24, 100%, 43%)',
          'bkg-1': 'hsl(104, 35%, 20%)',
          'bkg-2': 'hsl(104, 35%, 26%)',
          'bkg-3': 'hsl(104, 35%, 32%)',
          'bkg-4': 'hsl(104, 35%, 38%)',
          'fgd-1': 'hsl(104, 35%, 90%)',
          'fgd-2': 'hsl(104, 35%, 80%)',
          'fgd-3': 'hsl(104, 35%, 70%)',
          'fgd-4': 'hsl(104, 35%, 60%)',
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
        'th-input-bkg': 'var(--input-bkg)',
        'th-input-border': 'var(--input-border)',
        'th-input-border-hover': 'var(--input-border-hover)',
      },
      cursor: {
        help: 'help',
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
