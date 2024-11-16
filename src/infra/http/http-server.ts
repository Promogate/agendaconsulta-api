export interface HttpServer {
  on<T>(method: string, url: string, middlewares: [...Function[]], callback: Function): void
  listen(port: number): void
}
