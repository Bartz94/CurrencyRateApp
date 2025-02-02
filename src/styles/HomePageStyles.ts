import { styled, Container, Typography, Box } from "@mui/material";

export const StyledContainer = styled(Container)(({ theme }) => ({
    gap: theme.spacing(5),
}));

export const Title = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(3),
    textAlign: "center",
}));

export const ContentBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(5),
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
        flexDirection: "row",
        alignItems: "flex-start",
    },
}));

export const StyledBox = styled(Box)({
    minWidth: 300,
    width: "100%",
});

export const CenteredTypography = styled(Typography)(({ theme }) => ({
    textAlign: "center",
    marginBottom: theme.spacing(3),
}));

