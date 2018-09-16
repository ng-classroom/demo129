import { Person } from './person.model';

describe('Test for person', () => {

    describe('Test for Person with data', () => {
        it('should be defined', () => {
            const person = new Person({name: 'Jhon', lastName: 'Doe', id: 24});
            expect(person).toBeDefined();
            expect(person.name).toEqual('Jhon');
            expect(person.lastName).toEqual('Doe');
            expect(person.id).toEqual(24);
        });
    });

    describe('Test for Person without data', () => {
        it('should not be defined', () => {
            const person = new Person({});
            expect(person).toBeDefined();
            expect(person.name).toBeUndefined();
            expect(person.lastName).toBeUndefined();
            expect(person.id).toBeUndefined();
        });
    });
});
