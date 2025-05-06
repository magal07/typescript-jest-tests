describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).toBe(10);
    expect(number).toEqual(10);

    // expect(number).toBeNull();
    expect(number).not.toBeFalsy();
    expect(number).toBeTruthy();

    expect(number).toBeCloseTo(10, 1);
  });
});

describe('Objects', () => {
  it('should test jest assertions with Objects', () => {
    const person = { name: 'Marcelo', age: 25 };
    const anotherPerson = { ...person };

    expect(person).toEqual(anotherPerson);
    expect(person).toHaveProperty('age', 25); // verifica se tem a chave age dentro do obj e se tem o valor 25
  });
});
