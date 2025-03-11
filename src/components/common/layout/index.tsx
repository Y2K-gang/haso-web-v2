import "./style.scss";

type LayoutProps = {
    children: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {
    return (
        <div className="container">
            <main>{children}</main>
        </div>
    );
};

export default Layout;