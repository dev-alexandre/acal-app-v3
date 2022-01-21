import { DocumentPipe } from './document.pipe';

describe('DocumentPipe', () => {
  it('create an instance', () => {
    const pipe = new DocumentPipe();
    expect(pipe).toBeTruthy();
  });

  it('should format CPF', () => {
    const pipe = new DocumentPipe();
    const response = pipe.transform('00000000000')
    expect(response).toEqual('000.000.000-00');
  });



});
