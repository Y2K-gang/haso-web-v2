import React from "react";

interface Props {
    progress: number;
}

const ProgressBar = ({progress}: Props) => {
    return (
        <div className="progress-bar-container">
            <div className="progress-bar" style={{width: `${progress}`}}></div>
        </div>
    )
}

export default ProgressBar;
