import React from "react";
import "./App.css";
import { QueryClient, 
    QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Main } from "../containers/Main";

const QClient = new QueryClient();

export const App = (): JSX.Element => {
    return (
        <QueryClientProvider client={QClient}>
            <React.Fragment>
                <Main />
                <ReactQueryDevtools initialIsOpen={false} />
            </React.Fragment>
        </QueryClientProvider>
    );
};


