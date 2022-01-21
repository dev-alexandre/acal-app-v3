import { ContractNumberPipe } from "./contract-number.pipe";

describe('ContractNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new ContractNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
