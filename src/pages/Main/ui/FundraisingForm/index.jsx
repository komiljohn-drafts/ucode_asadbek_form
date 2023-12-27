import InputWrapper from "../../components/FormElements/InputWrapper";
import TextAreaInput from "../../components/FormElements/TextAreaInput";
import { InputLabel, SectionTile } from "../../components/Typography";

export default function FundraisingForm() {
  return (
    <section>
      <SectionTile title="Fundraising (Fundraising)" />
      <InputWrapper>
        <InputLabel label="How much money have you already raised?" />
        <TextAreaInput name="How_much_money_have_you_already_raised?" />
      </InputWrapper>
      <InputWrapper>
        <InputLabel label="Who funded you?" />
        <TextAreaInput name="Who_funded_you?" />
      </InputWrapper>
      <InputWrapper>
        <InputLabel label="How much investment do you plan to attract for your project?" />
        <TextAreaInput name="How_much_investment_do_you_plan_to_attract_for_your_project?" />
      </InputWrapper>
    </section>
  );
}
