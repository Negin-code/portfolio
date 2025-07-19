/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '23.4375rem', // 375px
        'sm': '26.875rem', // 430px
        'md': '48rem',     // 768px
        'lg': '64rem',     // 1375
        'xl': '80rem',     // 1280px
        '2xl': '100rem',   // 1600px
        '3xl': '120rem',   // 1920px
      },
      fontSize: {
        // Responsive Typography Scale
        'responsive-xs': ['0.75rem', { lineHeight: '1rem' }],       // 12px
        'responsive-sm': ['0.875rem', { lineHeight: '1.25rem' }],   // 14px
        'responsive-base': ['1rem', { lineHeight: '1.5rem' }],      // 16px
        'responsive-lg': ['1.125rem', { lineHeight: '1.75rem' }],   // 18px
        'responsive-xl': ['1.25rem', { lineHeight: '1.75rem' }],    // 20px
        'responsive-2xl': ['1.5rem', { lineHeight: '2rem' }],       // 24px
        'responsive-3xl': ['1.875rem', { lineHeight: '2.25rem' }],  // 30px
        'responsive-4xl': ['2.25rem', { lineHeight: '2.5rem' }],    // 36px
        'responsive-5xl': ['3rem', { lineHeight: '1' }],            // 48px
        'responsive-6xl': ['3.75rem', { lineHeight: '1' }],         // 60px
        'responsive-7xl': ['4.5rem', { lineHeight: '1' }],          // 72px
      },
      animation: {
        'scroll': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        // Heading Typography Utilities
        '.text-heading-hero': {
          fontSize: '2rem',
          lineHeight: '2.25rem',
          '@screen sm': {
            fontSize: '3rem',
            lineHeight: '3.25rem',
          },
          '@screen md': {
            fontSize: '4rem',
            lineHeight: '4.25rem',
          },
          '@screen lg': {
            fontSize: '6rem',
            lineHeight: '6rem',
          },
          '@screen xl': {
            fontSize: '7rem',
            lineHeight: '7rem',
          },
        },
        '.text-heading-1': {
          fontSize: '1.875rem',
          lineHeight: '2.25rem',
          '@screen sm': {
            fontSize: '2.25rem',
            lineHeight: '2.5rem',
          },
          '@screen md': {
            fontSize: '3rem',
            lineHeight: '3.25rem',
          },
          '@screen lg': {
            fontSize: '3.75rem',
            lineHeight: '4rem',
          },
          '@screen xl': {
            fontSize: '4.5rem',
            lineHeight: '4.5rem',
          },
        },
        '.text-heading-2': {
          fontSize: '1.5rem',
          lineHeight: '2rem',
          '@screen sm': {
            fontSize: '1.875rem',
            lineHeight: '2.25rem',
          },
          '@screen md': {
            fontSize: '2.25rem',
            lineHeight: '2.5rem',
          },
          '@screen lg': {
            fontSize: '3rem',
            lineHeight: '3.25rem',
          },
        },
        '.text-heading-3': {
          fontSize: '1.25rem',
          lineHeight: '1.75rem',
          '@screen sm': {
            fontSize: '1.5rem',
            lineHeight: '2rem',
          },
          '@screen md': {
            fontSize: '1.875rem',
            lineHeight: '2.25rem',
          },
          '@screen lg': {
            fontSize: '2.25rem',
            lineHeight: '2.5rem',
          },
        },
        '.text-heading-4': {
          fontSize: '1.125rem',
          lineHeight: '1.75rem',
          '@screen sm': {
            fontSize: '1.25rem',
            lineHeight: '1.75rem',
          },
          '@screen md': {
            fontSize: '1.5rem',
            lineHeight: '2rem',
          },
        },
        '.text-heading-5': {
          fontSize: '1rem',
          lineHeight: '1.5rem',
          '@screen sm': {
            fontSize: '1.125rem',
            lineHeight: '1.75rem',
          },
          '@screen md': {
            fontSize: '1.25rem',
            lineHeight: '1.75rem',
          },
        },
        // Body Text Utilities
        '.text-body-large': {
          fontSize: '1.125rem',
          lineHeight: '1.75rem',
          '@screen sm': {
            fontSize: '1.25rem',
            lineHeight: '1.75rem',
          },
          '@screen md': {
            fontSize: '1.5rem',
            lineHeight: '2rem',
          },
        },
        '.text-body-medium': {
          fontSize: '1rem',
          lineHeight: '1.5rem',
          '@screen sm': {
            fontSize: '1.125rem',
            lineHeight: '1.75rem',
          },
          '@screen md': {
            fontSize: '1.25rem',
            lineHeight: '1.75rem',
          },
        },
        '.text-body-regular': {
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
          '@screen sm': {
            fontSize: '1rem',
            lineHeight: '1.5rem',
          },
          '@screen md': {
            fontSize: '1.125rem',
            lineHeight: '1.75rem',
          },
        },
        '.text-body-small': {
          fontSize: '0.75rem',
          lineHeight: '1rem',
          '@screen sm': {
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
          },
          '@screen md': {
            fontSize: '1rem',
            lineHeight: '1.5rem',
          },
        },
        // Caption and Metadata Text
        '.text-caption': {
          fontSize: '0.75rem',
          lineHeight: '1rem',
          '@screen sm': {
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
          },
        },
        '.text-metadata': {
          fontSize: '0.625rem',
          lineHeight: '0.875rem',
          '@screen sm': {
            fontSize: '0.75rem',
            lineHeight: '1rem',
          },
        },
      }
      addUtilities(newUtilities)
    }
  ],
} 