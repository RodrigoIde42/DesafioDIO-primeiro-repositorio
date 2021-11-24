import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 4px;
    margin: 16px 0;

    input {
        width: 100%;
        height: 32px;
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 8px;
    }
    
    button {
        width: 100px;
        background-color: #ffef55;
        padding: 8px 16px;
        margin: 0 16px;
        border-radius: 8px;
        border: none;
        text-align: center;

        &:hover {
            background-color: #ffd933;
            box-shadow: 0 0 1em rgba(255, 217, 51, 0.30);
        }

        span {
            font-weight: bold;
            color: #000;
        }
    }
`