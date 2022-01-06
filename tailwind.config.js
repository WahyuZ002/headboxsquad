module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    theme: {
        extend: {
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
