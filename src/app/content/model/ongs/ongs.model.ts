export class Ongs {
  name: string;
  type: string;
  information: any[];
  projects: any[];
  account_number: any[];
  address: any;
  category: string;
  email: string;
  contact_number: string;
  attention_schedule: any[];
  logo: string;
  website: string;
  social_networks: any[];
  id: string;

  constructor(
    name: string,
    type: string,
    information: any[],
    projects: any[],
    account_number: any[],
    address: any,
    category: string,
    email: string,
    contact_number: string,
    attention_schedule: any[],
    logo: string,
    website: string,
    social_networks: any[],
    id: string
  ) {
    this.name = name;
    this.type = type;
    this.information = information;
    this.projects = projects;
    this.account_number = account_number;
    this.address = address;
    this.category = category;
    this.email = email;
    this.contact_number = contact_number;
    this.attention_schedule = attention_schedule;
    this.logo = logo;
    this.website = website;
    this.social_networks = social_networks;
    this.id = id;
  }
}
