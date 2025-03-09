import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

const Provider = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <ToastContainer position="top-right" autoClose={3000} closeOnClick={true}/>
        </QueryClientProvider>
    )
}

export default Provider;