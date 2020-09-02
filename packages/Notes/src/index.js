
import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    background: #1ea7fd;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 300;
    padding: 12px 36px;
    border: none;
`;

const Notes = ({children}) => {
    return (
        <StyledWrapper>
            <h1>Notes Component 01</h1>
            <p>{children}</p>
        </StyledWrapper>
    )
}

export default Notes;