import { Table, TableBody, TableHead, TableRow, Paper } from '@mui/material';
import { StyledTableContainer, StyledTableCell, StyledTableRow, StyledBodyTableCell } from '../styles/TableStyles';

interface CurrencyTableProps {
    data: Record<string, number>;
    onCurrencySelect: (currency: string) => void;
}

const CurrencyTable = ({ data, onCurrencySelect }: CurrencyTableProps) => {
    return (
        <StyledTableContainer component={Paper}>
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Currency</StyledTableCell>
                        <StyledTableCell>Rate</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Object.entries(data).map(([currency, rate]) => (
                        <StyledTableRow key={currency} onClick={() => onCurrencySelect(currency)}>
                            <StyledBodyTableCell>{currency}</StyledBodyTableCell>
                            <StyledBodyTableCell>{rate.toFixed(3)}</StyledBodyTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </StyledTableContainer>
    );
};

export default CurrencyTable;
