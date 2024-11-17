export interface HttpServer {
  on(method: string, namespace: string, url: string, middlewares: [...Function[]], callback: Function): void
  listen(port: number): void
}
