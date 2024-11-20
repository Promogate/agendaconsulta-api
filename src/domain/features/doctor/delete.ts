export interface DeleteDoctor {
  execute(id: string): Promise<void>;
}
