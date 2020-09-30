import React from 'react';
import styled from 'styled-components';
import ReactVirtualizedTable from '../Table/TableItem';

const RunningLine = () => {
    return (
        <FlexContainer >
            <ReactVirtualizedTable />
            <ReactVirtualizedTable />
        </FlexContainer>
    );
}

export default RunningLine;


const FlexContainer = styled.div `
    display: flex;
`

const FlexItem = styled.div `
    max-height: 440;
    min-width: 400%;
`