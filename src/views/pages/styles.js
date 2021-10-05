import styled from 'styled-components';

export const Input = styled.input`
    height: 50px;
    border-radius: 8px;
    border: 2px solid black;
    outline: none;
    color: black;
    padding: 0 30px 0 10px;
    width: 70%;
    @media only screen and (max-width: 600px) {
        width: 100%;
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 150px;
    border-radius: 8px;
    padding: 7px 15px;
    font-size: 1rem;
    text-transform: uppercase;
    outline: 0 !important;
    height: 50px;
    margin-left: 10px;
    @media only screen and (max-width: 600px) {
        width: 100%;
        margin-left: 0;
        margin-top: 10px;
    }
`;

export const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto auto;
    width: 100%;
    height: 100vh;
    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
`;

export const TableHeader = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: ${props => props.align || "center"};
    width: ${props => props.width || "auto"};
    padding: ${props => props.padding || "0"};
`;

export const RowItem = styled.div`
    display: flex;
    width: 100%;
    padding: 10px;
    border-bottom: 1px dashed gray;
`;

export const Divider = styled.div`
    width: 100%;
    height: 2px;
    margin: 5px 0;
    background-color: black;
`

export const PageItem = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border: 0;
    margin: 0 3px;
    font-weight: bold;
    font-size: 1.2rem;
    :hover{
        border: 1px solid #0366d6;
    }
    .disabled{
        color: gray;
    }
`;