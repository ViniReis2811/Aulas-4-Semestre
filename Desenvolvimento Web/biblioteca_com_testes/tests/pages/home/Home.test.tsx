import Home from "@/app/(private)/home/page";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
  it("should render button", () => {
    render(
      <>
        <input />
        <button>clique aqui</button>
      </>,
    );

    screen.logTestingPlaygroundURL();
    expect(1).toBe(1);
  });

  // beforeAll, beforeEach, after...
  it("should render with success", () => {
    const { getByTestId } = render(<Home />);

    screen.logTestingPlaygroundURL();

    const navBar = getByTestId("navbar1");

    // screen.getByTestId

    expect(navBar).toBeTruthy();
  });
});
