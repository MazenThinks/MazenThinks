/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                surface: {
                    deepest: '#0a0f1e',
                    DEFAULT: '#111827',
                    elevated: '#1e293b',
                },
                accent: {
                    blue: '#3b82f6',
                    cyan: '#06b6d4',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
            },
            backgroundImage: {
                'grid-faint': `linear-gradient(rgba(59, 130, 246, 0.06) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(59, 130, 246, 0.06) 1px, transparent 1px)`,
            },
            backgroundSize: {
                grid: '32px 32px',
            },
            animation: {
                'grid-drift': 'gridDrift 24s linear infinite',
                'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
                'scan-line': 'scanLine 8s ease-in-out infinite',
            },
            keyframes: {
                gridDrift: {
                    '0%': { backgroundPosition: '0 0, 0 0' },
                    '100%': { backgroundPosition: '48px 48px, 48px 48px' },
                },
                pulseSlow: {
                    '0%, 100%': { opacity: '0.4' },
                    '50%': { opacity: '0.85' },
                },
                scanLine: {
                    '0%, 100%': { transform: 'translateY(-100%)' },
                    '50%': { transform: 'translateY(100%)' },
                },
            },
        },
    },
    plugins: [],
}
