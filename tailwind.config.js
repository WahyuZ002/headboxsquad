module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    theme: {
        extend: {
            keyframes: {
                wiggle: {
                    '0%, 100%': {
                        transform: 'rotate(-3deg)',
                    },
                    '50%': {
                        transform: 'rotate(3deg)',
                    },
                },
            },

            animation: {
                wiggle: 'wiggle 1s ease-in-out infinite',
            },

            colors: {
                primary: '#7637EF',
                secondary: '#FF39DA',
                dark: '#302C2C',
                'semi-dark': '#111019',
                'extra-dark': '#0C0B12',
                'off-extra-dark': '#15131E',
                'off-white': '#F3F3FD',
            },
            fontFamily: {
                'open-sans': 'Open Sans',
            },
        },
    },
    plugins: [],
}
