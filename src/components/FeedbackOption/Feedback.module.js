import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 20px;
  justify-content: center;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 120px;
  height: 40px;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.62;
  text-align: center;
  color: #010101;
  background-color: #f5f4fa;
  border-radius: 10px;
  border: none;
  transition-duration: 250ms;
  margin-top: 15px;
  &:hover {
    color: #fff;
    background-color: #188ce8;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;
