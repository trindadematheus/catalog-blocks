import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { Family } from "../../types/family";
import FamilyItem from ".";

const familyMock: Family = {
  id: "123",
  premium: false,
  details: {
    name: "Sofá Retrátil",
    description: "Sofá de luxo bege",
  },
};

describe("<FamilyItem />", () => {
  it("should render the family name correctly", () => {
    render(<FamilyItem family={familyMock} />);

    expect(screen.getByText(familyMock.details.name)).toBeInTheDocument();
  });

  it("should render the family image correctly", () => {
    render(<FamilyItem family={familyMock} />);

    expect(
      screen.getByAltText(
        `${familyMock.details.name}: ${familyMock.details.description}`
      )
    ).toBeInTheDocument();
  });
});
