import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';
import 'whatwg-fetch';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
}));
