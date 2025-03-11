import dynamic from "next/dynamic";
import MuiSkeleton from "@mui/material/Skeleton";
import { ComponentType, ReactElement } from "react";

type SkeletonProps = {
    children?: () => Promise<{ default: ComponentType<any> }>;
    component?: ReactElement;
    skeletonWidth?: number;
    skeletonHeight?: number;
};

const Skeleton = ({
                      children,
                      component,
                      skeletonWidth = 300,
                      skeletonHeight = 200,
                  }: SkeletonProps) => {
    if (component) {
        return component;
    }

    if (!children) {
        return <MuiSkeleton variant="rectangular" width={skeletonWidth} height={skeletonHeight} />;
    }

    const DynamicComponent = dynamic(children);

    return <DynamicComponent />;
};

export default Skeleton;