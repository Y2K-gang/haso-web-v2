import dynamic from "next/dynamic";
import { ComponentType } from "react";
import MuiSkeleton from "@mui/material/Skeleton";

type SkeletonProps = {
    children: () => Promise<{ default: ComponentType<any> }>;
    skeletonWidth?: number;
    skeletonHeight?: number;
};

const Skeleton = ({
                      children,
                      skeletonWidth = 300,
                      skeletonHeight = 200,
                  }: SkeletonProps) => {
    const DynamicComponent = dynamic(children, {
        loading: () => (
            <MuiSkeleton variant="rectangular" width={skeletonWidth} height={skeletonHeight} />
        ),
    });

    return <DynamicComponent />;
};

export default Skeleton;