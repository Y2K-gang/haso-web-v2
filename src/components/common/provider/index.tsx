import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "src/styles/fonts/_typography.scss";
import "src/styles/color/_sementic.scss";
import "src/styles/global.style.scss";
import "src/styles/shape/_shape.scss";
import "src/styles/function/_flex.scss";

const queryClient = new QueryClient();

const Provider = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <ToastContainer position="top-right" autoClose={3000} closeOnClick={true}/>
        </QueryClientProvider>
    )
}

export default Provider;