export type JsonHeaders = { 'Content-Type': string, Accept: string };

export default function withJsonHeaders<T extends {}>(data: T): { headers: T & JsonHeaders } {
    return {
        headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...data,
    }
  }
}