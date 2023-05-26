import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 400px;
  min-height: 405px;
  margin: 20px 30px;
  margin-right: 30px;
  padding: 20px;

  border-radius: 10px;
  background-color: rgb(230, 230, 230);
`;
export const Label = styled.label`
  line-height: 2;
  display: block;
  color: #111827;
`;
export const Input = styled.input`
  display: block;
  padding: 5px;

  color: rgb(200, 200, 200);
  width: 95%;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 10px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`;

export const Button = styled.button`
  display: flex;
  background-color: #fff;
  color: #000;

  font-size: 24px;

  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  transform: scale(1);
  transition: transform 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  :hover,
  :focus {
    transform: scale(1.05);
    background-color: rgb(230, 230, 230);
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  color: #111827;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  line-height: 1.5rem;
`;
export const CheckboxInput = styled.input`
  width: 1rem;
  height: 1rem;
  margin-left: 0.5rem;
  color: #3182ce;
  background-color: #edf2f7;
  border-color: #cbd5e0;
  border-radius: 0.25rem;
`;
