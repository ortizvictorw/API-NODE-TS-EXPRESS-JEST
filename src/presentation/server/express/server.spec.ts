import { InitServerExpress } from './server';
import { IOptions } from '../interface';
import { running } from '../../types';
import express from 'express';

jest.mock('express', () => ({
    __esModule: true,
    default: jest.fn(() => ({
        listen: jest.fn(),
    })),
}));

describe('InitServerExpress', () => {
    let server: running;
    const options: IOptions = {
        hostname: 'localhost',
        port: 3001,
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
        server.running();
        const appInstance = (server as InitServerExpress).getExpressApp();
        expect(appInstance.listen).toHaveBeenCalledWith(options.port, options.hostname, expect.any(Function));
    });
});
