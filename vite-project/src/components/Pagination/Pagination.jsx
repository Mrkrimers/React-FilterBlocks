import Pagination from '@mui/material/Pagination';

function PaginationPage() {

    return (
        <>
            <Pagination
                total={Math.ceil(card.length / size)}
                position="center"
                style={{ marginTop: "40px" }}
                onChange={(card) => setCurrentPage(card)}
            />
        </>
    )
}

export default PaginationPage
;