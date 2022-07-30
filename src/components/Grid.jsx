import React from "react";
import styled from "styled-components";
import Cell from "./Cell.jsx";

const Grid = ({ size, cells, currentCell }) => {
    return (
        <GridContainer size={Math.sqrt(size)}>
            {cells.map((stage, index) => (
                <Cell key={index} isCurrent={currentCell === index} stage={stage} />
            ))}
        </GridContainer>
    );
};

export default Grid;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: ${({ size }) => `repeat(${size},1fr)`};
    gap: 4px;
`;
