import FileUploadInput from "../../components/FormElements/FileUploadInput";
import InputWrapper from "../../components/FormElements/InputWrapper";
import TextAreaInput from "../../components/FormElements/TextAreaInput";
import { InputLabel, SectionTile } from "../../components/Typography";

export default function AssistanceForm() {
  return (
    <section>
      <SectionTile title="Additional assistance" />
      <InputWrapper>
        <InputLabel label="How do you think we can help you besides investments? (Network, professionals)" />
        <TextAreaInput name="How_do_you_think_we_can_help_you_besides_investments?_(Network,_professionals)" />
      </InputWrapper>
      <InputWrapper>
        <InputLabel label="Pitchdeck" />
        <FileUploadInput />
      </InputWrapper>
    </section>
  );
}
