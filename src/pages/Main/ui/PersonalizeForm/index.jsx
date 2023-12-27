import InputWrapper from "../../components/FormElements/InputWrapper";
import SelectInput from "../../components/FormElements/SelectInput";
import TextInput from "../../components/FormElements/TextInput";
import { InputLabel, SectionTile } from "../../components/Typography";
import {
  businessCategoryOptions,
  businessSectorOptions,
  businessTypeOptions,
  developmentStageOptions,
} from "./constants";
import cls from "./styles.module.scss";

export default function PersonalizeForm() {
  return (
    <section>
      <SectionTile title="Personalize your project" />
      <div className={cls.inputs_wrapper}>
        <InputWrapper>
          <InputLabel label="When was the project founded?" />
          <TextInput name="Project_date" type="date" />
        </InputWrapper>
        <InputWrapper>
          <InputLabel label="Designate the category of your business" />
          <SelectInput name="Business_category" options={businessCategoryOptions} />
        </InputWrapper>
      </div>
      <InputWrapper>
        <InputLabel label="Company website" />
        <TextInput name="Company_website" />
      </InputWrapper>
      <InputWrapper>
        <InputLabel label="At what stage of development is your company?" />
        <SelectInput name="Development_stage" options={developmentStageOptions} />
      </InputWrapper>
      <div className={cls.inputs_wrapper}>
        <InputWrapper>
          <InputLabel label="Sector (niche) of your business?" />
          <SelectInput name="business_type_id" options={businessSectorOptions} />
        </InputWrapper>
        <InputWrapper>
          <InputLabel label="What type of business is your project?" />
          <SelectInput name="Project_type_id" options={businessTypeOptions} />
        </InputWrapper>
      </div>
    </section>
  );
}
