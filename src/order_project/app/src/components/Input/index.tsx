import { InputContainer, Input } from "./styles";

interface InputProps {
  value?: string;
  onChangeText?: (text:string)=>void;
  placeholder?: string;
  maxLength?: number;
  editable?: boolean;
  keyboardType?: string;
  variant?: string;
}

export default (props: InputProps) => (
  <InputContainer>
    <Input {...props} placeholderTextColor="#666" multiline={props?.variant == "multi"} style={props?.variant == "multi" && {height: 120, textAlignVertical:"top"}}  />
  </InputContainer>
)