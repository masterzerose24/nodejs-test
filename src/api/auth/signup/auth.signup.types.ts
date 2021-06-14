export type Dto = {
  email: string,
  password: string,
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