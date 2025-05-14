import { Montserrat } from 'next/font/google'
import { Montserrat_Alternates } from 'next/font/google'

export const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '800']
})

export const montserrat_alt = Montserrat_Alternates({
    subsets: ['latin'],
    weight: '800'
})