import React from "react";
import styled from "styled-components";

const Cell = ({ stage = 0, isCurrent }) => {
    return <CellContainer isCurrent={isCurrent} stage={stage}></CellContainer>;
};

export default Cell;

const CellContainer = styled.div`
    width: 6rem;
    height: 6rem;
    background-color: ${({ theme, stage }) => theme.colors.stage[stage]};
    outline: ${({ theme, isCurrent }) => (isCurrent ? `2px solid ${theme.colors.active}` : "none")};
    border-radius: 4px;
    transition: all 0.2s cubic-bezier(0.19, 1, 0.22, 1);
`;
