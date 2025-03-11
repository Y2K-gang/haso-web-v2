import { useEffect, useState } from "react";
import "./style.scss";

interface SkeletonProps {
    height?: number;
}

const Skeleton = ({ height = 50 }: SkeletonProps) => {
    return (
        <div className="bus-skeleton-container">
            {Array.from({ length: 15 }).map((_, i) => (
                <div
                    className="bus-skeleton-item"
                    key={i}
                    style={{ height: `${height}px` }}
                />
            ))}
        </div>
    );
};

export default Skeleton;