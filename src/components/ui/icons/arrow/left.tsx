interface ArrowLeftProps {
    onClick?: () => void
}

const ArrowLeft = ({onClick}: ArrowLeftProps) => {
    return (
        <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 1.5L1.5 7.5L7.5 13.5" stroke="black" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round"/>
        </svg>
    );
};

export default ArrowLeft;
