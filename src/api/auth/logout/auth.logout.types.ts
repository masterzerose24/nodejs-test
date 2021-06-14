export type ReqVars = {
    params?: {},
    body?: {},
    query?: {},
    user: {
        id: string,
        email: string,
        token: string, // TODO openbook
    },
    session?: {
        destroy: Function,
    }
};

export type Resp = Dto;

export type Dto = {
    id: string,
    email: string,
    token: string,
}
