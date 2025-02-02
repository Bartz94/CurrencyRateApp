import { Table, TableBody, TableHead, TableRow, Paper, CircularProgress, Typography } from "@mui/material";
import { useGetCurrencyHistoryQuery } from "../services/currencyApi";
import {
    StyledTableCell,
    StyledBodyTableCell,
    StyledTableRow,
    StyledTableContainer,
    StyledContainer,
} from "../styles/TableStyles";

interface HistoryTableProps {
    currency: string;
}

const HistoryTable = ({ currency }: HistoryTableProps) => {
    const { data, isLoading, error } = useGetCurrencyHistoryQuery("PLN");

    if (isLoading) {
        return (
            <StyledContainer>
                <CircularProgress />
            </StyledContainer>
        );
    }

    if (error) {
        return (
            <StyledContainer>
                <Typography color="error">An error occurred</Typography>
            </StyledContainer>
        );
    }

    return (
        <StyledTableContainer component={Paper as React.ElementType}>
            <Table>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Date</StyledTableCell>
                        <StyledTableCell>Rate</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data &&
                        Object.entries(data.rates).map(([date, rates]) => {
                            const rate = rates[currency];

                            return (
                                <StyledTableRow key={date}>
                                    <StyledBodyTableCell>{date}</StyledBodyTableCell>
                                    <StyledBodyTableCell>{rate ? rate.toFixed(3) : "Brak danych"}</StyledBodyTableCell>
                                </StyledTableRow>
                            );
                        })}
                </TableBody>
            </Table>
        </StyledTableContainer>
    );
};

export default HistoryTable;
