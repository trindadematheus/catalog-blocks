import { useState } from "react";
import Head from "next/head";
import InfiniteScroll from "react-infinite-scroll-component";

import AlertBar from "@/components/AlertBar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import FamilyItem from "@/components/FamilyItem";
import PageState from "@/components/PageState";

import { trpc } from "@/utils/trpc";
import * as S from "./styles";
import Loading from "@/components/Loading";

function HomePage() {
  const [params, setParams] = useState({
    skip: 0,
    take: 28,
  });

  const familiesQuery = trpc.families.useQuery(
    { skip: params.skip, take: params.take },
    { trpc: { abortOnUnmount: true }, keepPreviousData: true }
  );

  async function handleGetNextFamilyPage() {
    setParams((state) => ({
      skip: state.skip + 1,
      take: state.take + 28,
    }));
  }

  if (familiesQuery.isLoading) {
    return <PageState title="Loading" isLoading />;
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
      <AlertBar />
      <Menu />
      <Header />

      <S.Wrapper>
        <S.Container>
          <h1 className="title">Resultados</h1>

          <InfiniteScroll
            dataLength={familiesQuery.data.length}
            next={handleGetNextFamilyPage}
            hasMore={true}
            loader={
              <S.Center>
                <Loading />
              </S.Center>
            }
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
            refreshFunction={() => familiesQuery.refetch()}
            pullDownToRefresh
            pullDownToRefreshThreshold={50}
            pullDownToRefreshContent={
              <h3 style={{ textAlign: "center" }}>
                &#8595; Pull down to refresh
              </h3>
            }
            releaseToRefreshContent={
              <h3 style={{ textAlign: "center" }}>
                &#8593; Release to refresh
              </h3>
            }
          >
            <S.FamiliesArea>
              {familiesQuery.data.map((family) => (
                <FamilyItem key={family.id} family={family} />
              ))}
            </S.FamiliesArea>
          </InfiniteScroll>
        </S.Container>
      </S.Wrapper>

      <Footer />
    </>
  );
}

export default HomePage;
