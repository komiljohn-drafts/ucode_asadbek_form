import InputWrapper from "../../components/FormElements/InputWrapper";
import TextAreaInput from "../../components/FormElements/TextAreaInput";
import { InputLabel, SectionTile } from "../../components/Typography";

export default function MarketForm() {
  return (
    <section>
      <SectionTile title="Market" />
      <InputWrapper>
        <InputLabel label="What are the market opportunities and why will they be really big? Why might it be more than people think? Does it create a new market?" />
        <TextAreaInput name="What_are_the_market_opportunities_and_why_will_they_be_really_big?_Why_might_it_be_more_than_people_think?_Does_it_create_a_new_market?" />
      </InputWrapper>
    </section>
  );
}
