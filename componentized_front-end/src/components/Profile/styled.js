import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
`;

export const WrapperInfoUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin-left: 8px;
    height: 200px;

    h1 {
        font-size: 32px;
        font-weight: bold;
    }
    h3 {
        font-size: 18px;
        font-weight: bold;
    }
    h4 {
        font-size: 16px;
        font-weight: bold;
    }
`;

export const WrapperStatusCount = styled.div`
    display: flex;
    align-items: center;
    div {
        margin: 8px;
        text-align: center;
    }
`;

export const WrapperUsername = styled.div`
    display: flex;
    align-items: center;

    h3 {
        margin-right: 10px;
    }
    a {
        font-size: 18px;
        color: #EFDE45;
        font-weight: bold;
    }
`;

export const WrapperAvatar = styled.img`
    margin: 8px;
    width: 200px;
    border-radius: 50%;
`