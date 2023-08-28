import { Input, Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

function Search() {
    return (
        <>
            <Input icon={<IconSearch />} radius="md" rightSection={<Button>Settings</Button>} />
        </>
    )
}

export default Search;
