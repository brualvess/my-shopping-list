import { faker } from '@faker-js/faker';

export  async function itemFactory() {
    return {
        title: faker.lorem.word(10),
        url: faker.internet.url(),
        description: faker.lorem.paragraph(1),
        amount: faker.datatype.number()
    };
}