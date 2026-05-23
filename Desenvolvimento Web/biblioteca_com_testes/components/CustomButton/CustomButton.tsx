import { Button } from "react-bootstrap";

interface CustomButtonProps {
  label: string;
  onClick: () => void;
}

export const CustomButton = (props: CustomButtonProps) => {
  const { label, onClick } = props;
  return (
    <Button variant="primary" onClick={onClick}>
      {label}
    </Button>
  );
};
