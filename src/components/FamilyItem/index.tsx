import * as S from "./styles";

function FamilyItem() {
  return (
    <>
      <S.Container>
        <S.ImageArea>
          <img src="" alt="" />
        </S.ImageArea>

        <S.InfoArea>
          <h2 className="family-name">Matheus Trindade Lindo</h2>
          <div className="separator" />
          <button className="btn">#</button>
        </S.InfoArea>
      </S.Container>
    </>
  );
}

export default FamilyItem;
