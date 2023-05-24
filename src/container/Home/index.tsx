import Head from "next/head";

import AlertBar from "@/components/AlertBar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import FamilyItem from "@/components/FamilyItem";

import { trpc } from "@/utils/trpc";
import * as S from "./styles";
import PageState from "@/components/PageState";

function HomePage() {
  const familiesQuery = trpc.families.useQuery(
    { skip: 0, take: 28 },
    { trpc: { abortOnUnmount: true } }
  );

  if (familiesQuery.isLoading) {
    return <PageState title="Loading" />;
  }

  if (familiesQuery.isLoadingError) {
    return (
      <PageState
        title="Oops! Error"
        description="Reload the page to try again"
      />
    );
  }

  return (
    <>
      <Head>
        <title>Catálogo | Blocks</title>
      </Head>

      <AlertBar />
      <Menu />
      <Header />

      <S.Wrapper>
        <S.Container>
          <h1 className="title">Resultados</h1>

          <S.FamiliesArea>
            {familiesQuery.data.map((family) => (
              <FamilyItem key={family.id} family={family} />
            ))}
          </S.FamiliesArea>
        </S.Container>
      </S.Wrapper>

      <Footer />
    </>
  );
}

export default HomePage;
