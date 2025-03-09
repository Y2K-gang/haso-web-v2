import "./style.scss";

type LayoutProps = {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <div className="container">
                <div className="wrap">{children}</div>
            </div>
        </>
    );
};

export default Layout;