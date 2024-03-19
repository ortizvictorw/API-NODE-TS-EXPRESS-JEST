import { InitServerExpress } from './server';
import { IOptionsExpress } from '../interface';
import { Router } from 'express';
import { running } from '../../../types';

const mockRouter = jest.fn(() => ({
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    delete: jest.fn(),
    use: jest.fn(),
})) as unknown as jest.Mocked<Router>;

jest.mock('express', () => ({
    __esModule: true,
    default: jest.fn(() => ({
        Router: mockRouter,
        listen: jest.fn(),
        use: jest.fn(),
    })),
}));

describe('InitServerExpress', () => {
    let server: running;
    const options: IOptionsExpress = {
        hostname: 'localhost',
        port: 3001,
        routes: mockRouter,
    };

    beforeEach(() => {
        server = new InitServerExpress(options);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should create an instance of InitServerExpress', () => {
        expect(server).toBeInstanceOf(InitServerExpress);
    });

    it('should initialize the server', () => {
        const appInstance = (server as InitServerExpress).getExpressApp();
        server.running();
        expect(appInstance.listen).toHaveBeenCalledWith(options.port, options.hostname, expect.any(Function));
    });
});
