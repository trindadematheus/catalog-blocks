import * as S from "./styles";

type LoadingProps = {
  color?: string;
};

function Loading({ color }: LoadingProps) {
  return (
    <>
      <S.Container color={color || "#222"}>
        <div className="plane" />
      </S.Container>
    </>
  );
}

export default Loading;
