import { useState } from "react";
import { Typography, CircularProgress } from "@mui/material";
import { useGetCurrenciesQuery } from "../services/currencyApi";
import CurrencyTable from "../components/CurrencyTable";
import HistoryTable from "../components/HistoryTable";
import { StyledContainer, Title, ContentBox, StyledBox, CenteredTypography } from "../styles/HomePageStyles";

const HomePage = () => {
    const [selectedCurrency, setSelectedCurrency] = useState<string | null>("");
    const { data, error, isLoading } = useGetCurrenciesQuery("PLN");

    if (isLoading) return <CircularProgress />;
    if (error)
        return <Typography color="error">An error occurred</Typography>;

    return (
        <StyledContainer>
            <Title variant="h2">Currency Rate App</Title>
            <ContentBox>
                <StyledBox>
                    <CenteredTypography variant="h5">
                        Rates in relation to PLN
                    </CenteredTypography>
                    <CurrencyTable
                        data={data?.rates ?? {}}
                        onCurrencySelect={setSelectedCurrency}
                    />
                </StyledBox>

                {selectedCurrency ? (
                    <StyledBox>
                        <CenteredTypography variant="h5">
                            History rates of {selectedCurrency}
                        </CenteredTypography>
                        <HistoryTable currency={selectedCurrency} />
                    </StyledBox>
                ) : (
                    <StyledBox>
                        <CenteredTypography variant="h5">
                            History rates
                        </CenteredTypography>
                        <CenteredTypography>
                            Select currency to see history
                        </CenteredTypography>
                    </StyledBox>
                )}
            </ContentBox>
        </StyledContainer>
    );
};

export default HomePage;
