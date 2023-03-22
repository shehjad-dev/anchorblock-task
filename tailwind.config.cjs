/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#4E5D78",
                primary2: "#F0F5FA",
                primary3: "#B0B7C3",
                primary4: "#323B4B",
                primary5: "#8A94A6",
                primary6: "#EDEFF1",
                primary7: "#A7AFBC",
                secondary: "#377DFF",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
