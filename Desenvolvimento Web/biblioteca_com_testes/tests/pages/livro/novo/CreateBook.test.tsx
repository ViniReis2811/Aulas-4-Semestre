import CreateBook from "@/app/(private)/livro/novo/page";
import { fireEvent, render, screen } from "@testing-library/react";

describe("CreateBook", () => {
  beforeEach(() => {
    render(<CreateBook />);
  });

  it("should render name input label", async () => {
    const nameLabel = await screen.findByLabelText("Nome:");
    expect(nameLabel).toBeTruthy();
  });

  it("should render name input label", () => {
    const nameInput = screen.getByRole("textbox", {
      name: /nome:/i,
    });

    // userEvent
    fireEvent.change(nameInput, { target: { value: "Dom Casmurro" } });
  });
});
