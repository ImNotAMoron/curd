import * as crypto from "crypto";

class User {
    id: string
    username: string
    age: number
    hobbies: Array<string>
    constructor(username: string, age: number) {
        this.id = crypto.randomUUID();
        this.username = username;
        this.age = age;
        this.hobbies = [];
    }
}

const users = new Array<User>();

export default users;
