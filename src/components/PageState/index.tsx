import Head from "next/head";

import * as S from "./styles";

type PageStateProps = {
  title: string;
  description?: string;
};

function PageState({ title, description }: PageStateProps) {
  return (
    <>
      <Head>
        <title>{title} | Blocks</title>
      </Head>

      <S.Container>
        <h2 className="title">{title}</h2>
        {!!description && <p className="description">{description}</p>}
      </S.Container>
    </>
  );
}

export default PageState;
