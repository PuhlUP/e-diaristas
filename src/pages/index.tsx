// import Head from "next/head";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import Image from "next/image";
import styles from "@styles/Home.module.css";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua região"
        }
      />
      <UserInformation
        name={"Lucas Puhl"}
        picture={"https://github.com/puhlup.png"}
        rating={3}
        description={"Pato Branco"}
      />
    </div>
  );
}
