import InputWrapper from "../../components/FormElements/InputWrapper";
import TextInput from "../../components/FormElements/TextInput";
import { InputLabel, SectionTile } from "../../components/Typography";

export default function FundraisingForm() {
  return (
    <section>
      <SectionTile title="Fundraising (Fundraising)" />
      <InputWrapper>
        <InputLabel label="How much money have you already raised?" />
        <TextInput name="How_much_money_have_you_already_raised?" />
      </InputWrapper>
      <InputWrapper>
        <InputLabel label="Who funded you?" />
        <TextInput name="Who_funded_you?" />
      </InputWrapper>
      <InputWrapper>
        <InputLabel label="How much investment do you plan to attract for your project?" />
        <TextInput name="How_much_investment_do_you_plan_to_attract_for_your_project?" />
      </InputWrapper>
    </section>
  );
}
