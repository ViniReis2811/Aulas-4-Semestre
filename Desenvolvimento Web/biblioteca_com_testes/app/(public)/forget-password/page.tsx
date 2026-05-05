import { CustomButton } from "@/components/CustomButton/CustomButton";
import { CustomContainer } from "@/components/CustomContainer/CustomContainer";
import { CustomInputText } from "@/components/CustomInputText/CustomInputText";

export default function ForgetPassword() {
  return (
    <CustomContainer title="Alteração de senha">
      <CustomInputText label="e-mail" id="email" />
      <CustomButton label={`Alterar senha`} />
    </CustomContainer>
  );
}
