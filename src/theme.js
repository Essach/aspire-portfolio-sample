import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        tfontmain: "#0F0049",
        tfontsecond: "#111827",
        tred: {
            500: "#F63A61",
        },
        tborderred: "#D7163E",
        tblue: "#0A85EA",
        tgray: "#F6F5F8",
        tdarkblue: "#00063F",
    },
    fonts: {
        heading: `"Inter", sans-serif`,
        body: `"Inter", sans-serif`,
    },
})
