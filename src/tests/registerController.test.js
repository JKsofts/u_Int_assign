import { RegisterHandler } from "../controllers/RegisterController";
import request from "./__mocks__/request";
import response from "./__mocks__/response";

describe("test register post request", () => {
  test("should return 204 (No content)", async () => {
    expect(await RegisterHandler(request[0], response)).toBe(204);
  });

  test("should return 400 (bad request)", async () => {
    expect(await RegisterHandler(request[1], response)).toBe(204);
  });
});
