import { ToastContainer, toast } from "react-toastify";
import { FormProvider, useForm } from "react-hook-form";

import ApplicationForm from "../ApplicationForm";
import MarketForm from "../MarketForm";
import PersonalizeForm from "../PersonalizeForm";
import TeamForm from "../TeamForm";
import AssistanceForm from "../AssistanceForm";
import BusinessForm from "../BusinessForm";
import FundraisingForm from "../FundraisingForm";
import request from "../../../../service/httpClient";
import Container from "../../../../layouts/Container";
import cls from "./styles.module.scss";
import "react-toastify/dist/ReactToastify.css";

export default function MainForm() {
  const methods = useForm();

  const onSubmit = (data) => {
    request
      .post("/v2/items/application?project-id=1cc4c7e5-4cc6-4415-b074-f331c6a13cc1", {
        data: {
          ...data,
          Development_stage: [data.Development_stage],
          Business_category: [data.Business_category],
        },
      })
      .then(() => {
        methods.reset();
        toast.success("Successfully created!");
      })
      .catch(() => {
        toast.error("Error has occured!");
      });
  };

  return (
    <FormProvider {...methods}>
      <Container>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <ApplicationForm />
          <PersonalizeForm />
          <TeamForm />
          <MarketForm />
          <BusinessForm />
          <FundraisingForm />
          <AssistanceForm />
          <button className={cls.submit_btn} type="submit">
            Submit
          </button>
          <ToastContainer />
        </form>
      </Container>
    </FormProvider>
  );
}
