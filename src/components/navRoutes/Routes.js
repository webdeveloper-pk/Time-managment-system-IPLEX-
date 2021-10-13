import {
  Home,
  Login,
  Admin,
  SignUp,
  Wizard,
  Company,
  Analytics,
  Custodian,
  Scheduler,
  HistorySent,
  WizardThird,
  WizardFifth,
  WizardSecond,
  WizardFourth,
  Questionnaire,
  EmailTemplate,
  CaseManagement,
  CustodianGroups,
  SchedulerListView,
  LoginPasswordReset,
  EmailTemplateEditor,
  DataSourceManagement,
  QuestionnaireTemplateEditor,
} from '../pages';
const ROUTES = {
  PRIVATE: [
    { PATH: `/home`, NAME: `home`, component: Home },
    { PATH: `/user`, NAME: `user`, component: Admin },
    { PATH: `/analytics`, NAME: `analytics`, component: Analytics },
    { PATH: `/custodian`, NAME: `custodian`, component: Custodian },
    { PATH: `/company`, NAME: `company`, component: Company },
    { PATH: `/history-sent`, NAME: `HistorySent`, component: HistorySent },
    { PATH: `/questionnaire`, NAME: `Questionnaire`, component: Questionnaire },
    { PATH: `/custodian-groups`, NAME: `custodian`, component: CustodianGroups },
    { PATH: `/email-template`, NAME: `EmailTemplate`, component: EmailTemplate },
    { PATH: `/case-management`, NAME: `/case/management`, component: CaseManagement },
    { PATH: `/email-template/:id`, NAME: `EmailTemplateEditor`, component: EmailTemplateEditor },
    { PATH: `/data-source-management`, NAME: `/data/source/management`, component: DataSourceManagement },
    {
      PATH: `/questionnaire/:id`,
      NAME: `QuestionnaireTemplateEditor`,
      component: QuestionnaireTemplateEditor,
    },
    {
      PATH: `/case-management-wizard`,
      NAME: `case-management-wizard`,
      component: Wizard,
    },
    {
      PATH: `/custodian-wizard`,
      NAME: `custodian-wizard`,
      component: WizardFourth,
    },
    {
      PATH: `/email-template-wizard`,
      NAME: `email-template-wizard`,
      component: WizardSecond,
    },
    {
      PATH: `/questionnaire-wizard`,
      NAME: `questionnaire-wizard`,
      component: WizardThird,
    },
    {
      PATH: `/scheduler-wizard`,
      NAME: `scheduler-wizard`,
      component: WizardFifth,
    },
    {
      PATH: `/scheduler`,
      NAME: `Scheduler`,
      component: Scheduler,
    },
    {
      PATH: `/scheduler-list-view`,
      NAME: `Scheduler`,
      component: SchedulerListView,
    },
  ],
  PUBLIC: [
    { PATH: `/login`, NAME: `login`, component: Login },
    { PATH: `/sign-up`, NAME: `signUp`, component: SignUp },
    { PATH: `/reset`, NAME: `reset`, component: LoginPasswordReset },
  ],
};

export default ROUTES;
//HistorySent;
