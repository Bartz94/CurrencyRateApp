import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

interface CurrencyTableProps {
    data: Record<string, number>;
    onCurrencySelect: (currency: string) => void;
}

const CurrencyTable = ({ data, onCurrencySelect }: CurrencyTableProps) => {
    return (
        <TableContainer
            component={Paper}
            sx={{ maxHeight: '75vh', overflowY: 'auto' }}  >
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ textAlign: 'center', fontWeight: 900 }}>Currency</TableCell>
                        <TableCell sx={{ textAlign: 'center', fontWeight: 900 }}>Rate</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Object.entries(data).map(([currency, rate]) => (
                        <TableRow
                            sx={{
                                '&:hover': {
                                    backgroundColor: 'lightgrey',
                                    cursor: 'pointer',
                                },
                            }}
                            key={currency}
                            onClick={() => onCurrencySelect(currency)}
                            style={{ cursor: 'pointer' }}>
                            <TableCell sx={{ textAlign: 'center' }}>{currency}</TableCell>
                            <TableCell sx={{ textAlign: 'center' }}>{rate.toFixed(3)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CurrencyTable;
