import { InputContainer, Input } from "./styles";

interface InputProps {
  value: string;
  onChangeText: (text:string)=>void;
  placeholder?: string;
  maxLength?: number;
}

export default (props: InputProps) => (
  <InputContainer>
    <Input {...props} placeholderTextColor="#666" />
  </InputContainer>
)