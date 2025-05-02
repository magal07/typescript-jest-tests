import type {
  IndividualCustomerProtocol,
  EnterpriseCustomerProtocol,
} from './interfaces/customer-protocol';

export class IndividualCustomer implements IndividualCustomerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;
  cnpj: string;

  constructor(firstname: string, lastName: string, cpf: string) {
    this.firstName = firstname;
    this.lastName = lastName;
    this.cpf = cpf;
    this.cnpj = '';
  }
}

export class EnterpriseCustomer implements EnterpriseCustomerProtocol {
  firstName: string;
  cnpj: string;

  constructor(firstname: string, cnpj: string) {
    this.firstName = firstname;
    this.cnpj = cnpj;
  }
}
