import request from 'supertest';
import { app } from '../../src/app';
import * as productController from "../../src/controller/productController";

describe("Product Controller", () => {
    it("should return a product list when all succeeds", async () => {
        // Arrange


        // Act
        const response = await request(app).get('/product').send();

        // Assert
        expect(response.status).toEqual(200);
        expect(response.body).toEqual([
            {"brand": "Trakinas", "name": "Bolacha", "price": "R$ 2,99"}
        ]);

    });

    it("Should not return error when empty list is returned", async () => {
        // Arrange
        jest
            .spyOn(productController, "listProduct")
            .mockResolvedValueOnce([]);

        // Act
        const response = await request(app).get('/product').send();

        // Assert
        expect(response.body).toEqual([]);
    })
})