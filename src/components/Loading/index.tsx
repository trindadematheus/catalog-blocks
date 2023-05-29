import * as S from "./styles";

type LoadingProps = {
  color?: string;
};

function Loading({ color }: LoadingProps) {
  return (
    <>
      <S.Container>
        <S.Plane color={color || "#222"} data-testid="plane" />
      </S.Container>
    </>
  );
}

export default Loading;
