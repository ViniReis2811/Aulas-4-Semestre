import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";
import EditBook from "@/app/(private)/livro/[id]/page";
import { render } from "@testing-library/react";

const server = setupServer(
    http.get("/api/book/1", () => {
        return HttpResponse.json({
            id: 1,
            name: "Percy Jackson",
            author: "Rick R.",
            stockQuantity: 5,
            createdAt: "2026-05-04"
        })
    }),
    http.put("api/book/1", () =>{
    }),
);

describe("EditBook", () => {
    beforeAll(() => {
        server.listen();
    });

    beforeEach(() => {
        server.resetHandlers();
    });

    afterAll(() => {
        server.close();
    })

    it("should render book data when page is loaded", () => {
        render(<EditBook />);
    });
})