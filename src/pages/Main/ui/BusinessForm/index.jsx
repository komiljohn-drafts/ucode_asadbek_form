import InputWrapper from "../../components/FormElements/InputWrapper";
import TextAreaInput from "../../components/FormElements/TextAreaInput";
import { InputLabel, SectionTile } from "../../components/Typography";

export default function BusinessForm() {
  return (
    <section>
      <SectionTile title="Business model" />
      <InputWrapper>
        <InputLabel label="How do you make money? Who pays? What's the revenue?" />
        <TextAreaInput name="How_much_money_have_you_already_raised?" />
      </InputWrapper>
      <InputWrapper>
        <InputLabel label="Why is now the right time for your company?" />
        <TextAreaInput name="Why_is_now_the_right_time_for_your_company?" />
      </InputWrapper>
      <InputWrapper>
        <InputLabel label="What has changed in technology, platforms, customer behavior, laws, etc. to make what you are doing possible?" />
        <TextAreaInput name="what_changed_in_technology" />
      </InputWrapper>
    </section>
  );
}
