import React from "react";
import { Text } from "components/Text";
import { StyledInput, InputWrapper } from "./style";

interface IInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  validationMessage?: string;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void; // Updated to onKeyDown
}

export const Input = ({
  value,
  onChange,
  placeholder = "",
  required = false,
  validationMessage,
  onKeyDown, // Updated to onKeyDown
}: IInputProps) => {
  const [isTouched, setIsTouched] = React.useState(false);

  const handleBlur = () => {
    setIsTouched(true);
  };

  return (
    <InputWrapper flexDirection="column" mb="sm">
      <StyledInput
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        required={required}
      />
      {required && isTouched && !value && (
        <Text
          as="span"
          color="danger"
          mt="xs"
          fontSize="small"
          textAlign="left"
        >
          {validationMessage || "This field is required"}
        </Text>
      )}
    </InputWrapper>
  );
};
