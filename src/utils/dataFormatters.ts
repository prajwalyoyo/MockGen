import { faker } from '@faker-js/faker';
import * as YAML from 'yaml';

export const convertToCSV = (data: any[]) => {
  const header = Object.keys(data[0]).join(',');
  const rows = data.map(row => Object.values(row).join(',')).join('\n');
  return `${header}\n${rows}`;
};

export const convertToXML = (data: any[]) => {
  const formatXML = (xml: string) => {
    let formatted = '';
    let indent = '';
    const tab = '  ';
    xml.split(/>\s*</).forEach(node => {
      if (node.match(/^\/\w/)) {
        indent = indent.substring(tab.length);
      }
      formatted += indent + '<' + node + '>\n';
      if (!node.match(/^\//) && !node.match(/\/$/)) {
        indent += tab;
      }
    });
    return formatted.substring(1, formatted.length - 2);
  };

  const xml = data.map(item => {
    const entries = Object.entries(item).map(([key, value]) => `<${key}>${value}</${key}>`).join('');
    return `<item>${entries}</item>`;
  }).join('');
  
  return formatXML(`<items>${xml}</items>`);
};

export const generateFieldValue = (type: string, index: number) => {
  console.log(`Generating field value for type: ${type}`);

  switch (type) {
    case 'name':
      return faker.person.fullName();
    case 'email':
      return faker.internet.email();
    case 'phone':
      return faker.phone.number();
    case 'address':
      return faker.location.streetAddress();
    case 'city':
      return faker.location.city();
    case 'country':
      return faker.location.country();
    case 'zipCode':
      return faker.location.zipCode();
    case 'company':
      return faker.company.name();
    case 'jobTitle':
      return faker.person.jobTitle();
    case 'department':
      return faker.commerce.department();
    case 'number':
      return faker.number.int({ min: 1, max: 1000 });
    case 'age':
      return faker.number.int({ min: 18, max: 80 });
    case 'decimal':
      return faker.number.float({ min: 0, max: 100, fractionDigits: 2 });
    case 'date':
      return faker.date.recent().toISOString();
    case 'time':
      return faker.date.recent().toLocaleTimeString();
    case 'timestamp':
      return faker.date.recent().getTime();
    case 'url':
      return faker.internet.url();
    case 'ipAddress':
      return faker.internet.ip();
    case 'username':
      return faker.internet.userName();
    case 'boolean':
      return faker.datatype.boolean();
    case 'uuid':
      return faker.string.uuid();
    default:
      return `${type}_${index + 1}`;
  }
};

export const convertToYAML = (data: any[]) => {
  return YAML.stringify(data);
};