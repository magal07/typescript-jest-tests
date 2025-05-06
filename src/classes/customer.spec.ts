import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks()); // limpar os mocks conforme finalizar cada teste

describe('EnterpriseCustomer', () => {
  it('should have firstName, lastName and cpf', () => {
    const sut = createIndividualCustomer('Luiz', 'Otávio', '152.546.888-33');
    expect(sut).toHaveProperty('firstName', 'Luiz');
    expect(sut).toHaveProperty('lastName', 'Otávio');
    expect(sut).toHaveProperty('cpf', '152.546.888-33');
  });

  it('should have methods to get name and idn', () => {
    const sut = createIndividualCustomer('Luiz', 'Otávio', '152.546.888-33');
    expect(sut.getName()).toBe('Luiz Otávio');
    expect(sut.getIDN()).toBe('152.546.888-33');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have name and cnpj', () => {
    const sut = createEnterpriseCustomer('CasasBahia', '15.461.351/00001-33');
    expect(sut).toHaveProperty('name', 'CasasBahia');
    expect(sut).toHaveProperty('cnpj', '15.461.351/00001-33');
  });

  it('should have methods to get name and idn', () => {
    const sut = createEnterpriseCustomer('CasasBahia', '15.461.351/00001-33');
    expect(sut.getName()).toBe('CasasBahia');
    expect(sut.getIDN()).toBe('15.461.351/00001-33');
  });
});
