import { ReactNode } from "react";
import { Container, CssBaseline, } from "@mui/material";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <CssBaseline />
            <Container >
                {children}
            </Container>
        </>
    );
};

export default Layout;
