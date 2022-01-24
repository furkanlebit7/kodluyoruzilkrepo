import { render, screen } from "@testing-library/react";
import Header from "../Header.js";

describe("Header tests", () => {
  beforeEach(() => {
    render(<Header />);
  });
  test("Header must be in the screen", () => {
    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
  });
  test("Header text must be in the header", () => {
    const headerText = screen.getByText(/Emoji Search/i);
    expect(headerText).toBeInTheDocument();
  });
  test("2 Header image must be in the header", () => {
    const HeaderImage = screen.getAllByRole("img");
    expect(HeaderImage.length).toEqual(2);
  });
});
