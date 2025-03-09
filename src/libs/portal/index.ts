import ReactDom from "react-dom";

interface ModalPortalType {
    children: React.ReactNode;
}

const ModalPortal: React.FC<ModalPortalType> = ({ children }) => {
    const el = document.getElementById("modal");
    if (!el) {
        console.error('Element with id "modal" not found');
        return null;
    }
    return ReactDom.createPortal(children, el);
};

export default ModalPortal;
