import "@testing-library/jest-dom";
import "jest-styled-components";
import { screen, render } from "@testing-library/react";

import PageState from ".";

const pageStateMock = {
  title: "Titulo da página",
  description: "Descrição da página",
  isLoading: false,
};

describe("<PageState />", () => {
  it("should render correctly", () => {
    render(
      <PageState
        title={pageStateMock.title}
        description={pageStateMock.description}
        isLoading={pageStateMock.isLoading}
      />
    );

    expect(screen.getByText(pageStateMock.title)).toBeInTheDocument();
    expect(screen.getByText(pageStateMock.description)).toBeInTheDocument();
  });
});
