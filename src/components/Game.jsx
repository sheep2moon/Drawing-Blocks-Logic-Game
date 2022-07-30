import React, { useCallback, useEffect, useState } from "react";
import Grid from "./Grid.jsx";
import { RiRestartLine } from "react-icons/ri";
import styled from "styled-components";

const size = 9;
const width = Math.sqrt(size);
const colorStages = 5;

const Game = () => {
    const [currentCell, setCurrentCell] = useState(0);
    const [cells, setCells] = useState(Array(size).fill(0));

    const handleRestart = () => {
        setCells(Array(size).fill(0));
        setCurrentCell(0);
    };

    const handleStageUp = idx => {
        const cellsCopy = cells;
        cellsCopy[idx] = (cells[idx] + 1) % colorStages;
        setCells(cellsCopy);
    };

    const handleLeft = () => {
        if (currentCell > 0) {
            const newCellIndex = currentCell - 1;
            setCurrentCell(newCellIndex);
            handleStageUp(newCellIndex);
        }
    };
    const handleRight = () => {
        if ((currentCell + 1) % width !== 0) {
            const newCellIndex = currentCell + 1;
            setCurrentCell(newCellIndex);
            handleStageUp(newCellIndex);
        }
    };
    const handleUp = () => {
        if (currentCell >= width) {
            const newCellIndex = currentCell - width;
            setCurrentCell(newCellIndex);
            handleStageUp(newCellIndex);
        }
    };
    const handleDown = () => {
        if (currentCell < size - width) {
            const newCellIndex = currentCell + width;
            setCurrentCell(newCellIndex);
            handleStageUp(newCellIndex);
        }
    };

    const keyDownHandler = useCallback(
        e => {
            if (e.key === "ArrowLeft") handleLeft();
            if (e.key === "ArrowRight") handleRight();
            if (e.key === "ArrowUp") handleUp();
            if (e.key === "ArrowDown") handleDown();
        },
        [currentCell]
    );

    useEffect(() => {
        document.addEventListener("keydown", keyDownHandler);
        return () => document.removeEventListener("keydown", keyDownHandler);
    }, [keyDownHandler]);

    return (
        <div>
            <TopControlsWrap>
                <RestartWrap>
                    <label htmlFor="restart">Restart</label>
                    <button id="restart" onClick={handleRestart}>
                        <RiRestartLine />
                    </button>
                </RestartWrap>
            </TopControlsWrap>
            <Grid cells={cells} size={size} currentCell={currentCell} />
        </div>
    );
};

export default Game;

const TopControlsWrap = styled.div`
    margin: 1rem 0;
    color: ${({ theme }) => theme.colors.primaryLight};
`;
const RestartWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.4rem;
    > button {
        border: none;
        color: ${({ theme }) => theme.colors.primaryLight};
        background: none;
        > svg {
            font-size: 2rem;
            transition: all 0.2s cubic-bezier(0.19, 1, 0.22, 1);
            :hover {
                cursor: pointer;
                transform: scale(1.05);
                transition: all 0.2s cubic-bezier(0.19, 1, 0.22, 1);
            }
        }
    }
`;
