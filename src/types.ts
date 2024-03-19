export interface running {
    running: () => void;
}

export interface closed {
    closed: () => void;
}

export interface IServer extends closed, running {}