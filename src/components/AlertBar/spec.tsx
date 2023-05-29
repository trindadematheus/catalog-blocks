import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";

import AlertBar from ".";

describe("<AlertBar />", () => {
  it("should render correctly", () => {
    render(<AlertBar />);

    expect(screen.getByText("BRL 19,99")).toBeInTheDocument();
  });
});
