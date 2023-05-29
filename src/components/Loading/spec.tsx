import "@testing-library/jest-dom";
import "jest-styled-components";
import { render } from "@testing-library/react";

import Loading from ".";

describe("<Loading />", () => {
  it("should render correctly with passed color", () => {
    const color = "red";

    const { getByTestId } = render(<Loading color={color} />);

    expect(getByTestId("plane")).toHaveStyleRule("background-color", "red");
  });
});
