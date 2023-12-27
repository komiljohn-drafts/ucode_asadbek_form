import InputWrapper from "../../components/FormElements/InputWrapper";
import TextAreaInput from "../../components/FormElements/TextAreaInput";
import TextInput from "../../components/FormElements/TextInput";
import { InputLabel, SectionTile } from "../../components/Typography";
import cls from "./styles.module.scss";

export default function TeamForm() {
  return (
    <section>
      <SectionTile title="Team" />
      <div className={cls.inputs_wrapper}>
        <InputWrapper>
          <InputLabel label="Full name" />
          <TextInput name="Full_name" />
        </InputWrapper>
        <InputWrapper>
          <InputLabel label="Position in the company" />
          <TextInput name="Company_position" />
        </InputWrapper>
      </div>
      <InputWrapper>
        <InputLabel label="What is the distribution of the team? Where is your head office located?" />
        <TextAreaInput name="What_is_the_distribution_of_the_team?_Where_is_your_head_office_located?" />
      </InputWrapper>
      <InputWrapper>
        <InputLabel label="Describe what your company does (one sentence)" />
        <TextAreaInput name="Describe_what_your_company_does_(one_sentence)" />
      </InputWrapper>
    </section>
  );
}
