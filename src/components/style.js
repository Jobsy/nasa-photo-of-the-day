
import styled from "styled-components";


export const Wrapper = styled.div`
    width: 100%;
    background-color: #F1EDED;
`;

export const Container = styled.div`
    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: column; 
    margin: 0 50px;
`;

export const HeaderStyle = styled.div`
    display: flex;
    align-items: left;
    justify-content: space-between;
  `;

export const FooterStyle = HeaderStyle;

export const InputStyle = styled.input`
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    color: #999999;
    text-align: center;
`;