import { InitServer } from "./server";
import http from 'node:http';

const mockEnv = {
  HOST_NAME: "localhost",
  PORT: "3000",
};

const originalEnv = process.env;

beforeAll(() => {
  process.env = { ...originalEnv, ...mockEnv };
});

afterAll(() => {
  process.env = originalEnv;
});

describe("InitServer", () => {
  let server: InitServer;
  let httpCreateServerMock: jest.SpyInstance;

  beforeEach(() => {
    server = new InitServer({
      hostname: process.env.HOST_NAME,
      port: Number(process.env.PORT),
    });

    httpCreateServerMock = jest.spyOn(http, 'createServer').mockReturnValue({
      listen: jest.fn().mockImplementation((_port, _hostname, callback) => {
        callback();
      }),
    } as any);
  });

  it("should start the server", () => {
    server.running();
    expect(httpCreateServerMock).toHaveBeenCalled();
  });
});
