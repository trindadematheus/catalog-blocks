import Loading from "../Loading";
import * as S from "./styles";

type PageStateProps = {
  title: string;
  description?: string;
  isLoading?: boolean;
};

function PageState({ title, description, isLoading }: PageStateProps) {
  return (
    <>
      <S.Container>
        <div />

        <div>
          <h2 className="title">{title}</h2>
          {!!description && <p className="description">{description}</p>}
        </div>

        {isLoading && <Loading />}
      </S.Container>
    </>
  );
}

export default PageState;
