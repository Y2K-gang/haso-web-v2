import Provider from "src/components/common/provider";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "하소",
    description: "수산물 거래를 간편하게",
    icons: {
        icon: "./logo.png"
    }
}


const Layout = ({children}: { children: React.ReactNode }) => {
    return (
        <html lang="en">
        <body>
        <Provider>
            {children}
        </Provider>
        </body>
        </html>
    );
}

export default Layout;