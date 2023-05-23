import AlertBar from "@/components/AlertBar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Menu from "@/components/Menu";

import * as S from "./styles";
import FamilyItem from "@/components/FamilyItem";

function HomePage() {
  return (
    <>
      <AlertBar />
      <Menu />
      <Header />

      <S.Wrapper>
        <S.Container>
          <h1 className="title">Resultados</h1>

          <S.FamiliesArea>
            <FamilyItem />
            <FamilyItem />
            <FamilyItem />
            <FamilyItem />
            <FamilyItem />
            <FamilyItem />
            <FamilyItem />
            <FamilyItem />
            <FamilyItem />
            <FamilyItem />
            <FamilyItem />
            <FamilyItem />
            <FamilyItem />
            <FamilyItem />
            <FamilyItem />
            <FamilyItem />
            <FamilyItem />
            <FamilyItem />
            <FamilyItem />
          </S.FamiliesArea>
        </S.Container>
      </S.Wrapper>

      <Footer />
    </>
  );
}

export default HomePage;
