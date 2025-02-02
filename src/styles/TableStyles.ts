import { styled } from "@mui/material/styles";
import { TableContainer, TableCell, TableRow, Container } from "@mui/material";

export const StyledTableContainer = styled(TableContainer)<{ component?: React.ElementType }>(({ theme }) => ({
    height: "70vh",
    overflowY: "auto",
    [theme.breakpoints.down("sm")]: {
        height: "30vh",
    },
}));

export const StyledTableCell = styled(TableCell)({
    textAlign: "center",
    fontWeight: 900,
});

export const StyledBodyTableCell = styled(TableCell)({
    textAlign: "center",
});

export const StyledTableRow = styled(TableRow)({
    "&:hover": {
        backgroundColor: "lightgrey",
        cursor: "pointer",
    },
    cursor: "pointer",
});

export const StyledContainer = styled(Container)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
});
