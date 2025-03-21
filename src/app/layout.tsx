import Provider from "src/components/common/provider";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
        <body>
        <Provider>{children}</Provider>
        </body>
        </html>
    );
};

export default Layout;