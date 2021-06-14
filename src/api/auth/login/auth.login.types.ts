export type ReqVars = {};

export type Resp = ReturnType;

export type Dto = {
    id: string,
    email: string,
    token: string,
}

export type ReturnType = {
  user: {
      id: string,
      email: string,
      token: string,
  },
  token: string,
}