import './globals.css'
import { Poppins, Permanent_Marker, Roboto } from 'next/font/google'

const poppins = Poppins({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-poppins',
    display: 'swap',
})

const permanentMarker = Permanent_Marker({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-marker',
    display: 'swap',
})

const roboto = Roboto({
    weight: '700',
    subsets: ['latin'],
    variable: '--font-roboto',
    display: 'swap',
})

export const metadata = {
    title: 'Dhruv Panchal | UI/UX Designer',
    description: "Welcome to my portfolio! I'm Dhruv Panchal, a UI/UX Designer passionate about crafting intuitive and beautiful digital experiences. Take a look at my work.",
    openGraph: {
        type: 'website',
        url: 'https://dhruv-panchal-site.vercel.app/',
        title: 'Dhruv Panchal | UI/UX Designer',
        description: "Welcome to my portfolio! I'm Dhruv Panchal, a UI/UX Designer passionate about crafting intuitive and beautiful digital experiences. Take a look at my work.",
        images: [{ url: '/images/home/Dhruv-image.png' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Dhruv Panchal | UI/UX Designer',
        description: "Welcome to my portfolio! I'm Dhruv Panchal, a UI/UX Designer passionate about crafting intuitive and beautiful digital experiences. Take a look at my work.",
        images: ['/images/home/Dhruv-image.png'],
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${poppins.variable} ${permanentMarker.variable} ${roboto.variable} font-sans`}>
                {children}
            </body>
        </html>
    )
}
