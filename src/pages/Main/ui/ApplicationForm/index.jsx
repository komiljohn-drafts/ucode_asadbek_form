import InputWrapper from "../../components/FormElements/InputWrapper";
import TextInput from "../../components/FormElements/TextInput";
import { InputLabel, SectionTile } from "../../components/Typography";
import cls from "./styles.module.scss";

export default function ApplicationForm() {
  return (
    <section>
      <SectionTile title="Application form" />
      <div className={cls.inputs_wrapper}>
        <InputWrapper>
          <InputLabel label="Name of the company (project)" />
          <TextInput name="Project_name" />
        </InputWrapper>
        <InputWrapper>
          <InputLabel label="Founder's Email" />
          <TextInput name="Founders_email" />
        </InputWrapper>
        <InputWrapper>
          <InputLabel label="Director / Founder" />
          <TextInput name="Director_/_Founder" />
        </InputWrapper>
        <InputWrapper>
          <InputLabel label="Your phone number" />
          <TextInput name="Phone_number" type="tel" />
        </InputWrapper>
      </div>
    </section>
  );
}
