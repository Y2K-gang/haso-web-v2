import dynamic from "next/dynamic";
import Skeleton from "@mui/material/Skeleton";
import {ComponentType} from "react";

type LazyLoadProps = {
    children: () => Promise<{ default: ComponentType<any> }>;
    skeletonWidth?: number;
    skeletonHeight?: number;
};

export default function LazyLoad({
                                     children,
                                     skeletonWidth = 300,
                                     skeletonHeight = 200,
                                 }: LazyLoadProps) {
    const DynamicComponent = dynamic(children, {
        loading: () => <Skeleton variant="rectangular" width={skeletonWidth} height={skeletonHeight}/>,
    });

    return <DynamicComponent/>;
}