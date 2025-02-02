import { ReactNode } from "react";
import { Container, CssBaseline, } from "@mui/material";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <CssBaseline />
            <Container sx={{ mt: 2 }}>
                {children}
            </Container>
        </>
    );
};

export default Layout;
