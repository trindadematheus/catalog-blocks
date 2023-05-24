import * as S from "./styles";

type PageStateProps = {
  title: string;
  description?: string;
};

function PageState({ title, description }: PageStateProps) {
  return (
    <>
      <S.Container>
        <h2 className="title">{title}</h2>
        {!!description && <p className="description">{description}</p>}
      </S.Container>
    </>
  );
}

export default PageState;
