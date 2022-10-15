export const firstName="Rama";
export const middleName="Fajar";
export const lastName="Fadhillah";

export function hello(){
    console.info(`Hello from ${firstName}`);
}

export class Person{
    constructor(){
        this.name=firstName;
    }
}