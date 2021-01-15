export class Persona {
    public name:string;
    public lastName:string;
    public age:string;
    public genre:string;
    public phone:string
    
    setName(name){
        this.name=name
        return this.name
    }
    setLastName(lastName){
        this.lastName=lastName
        return this.lastName
    }
    setAge(age){
        this.age=age
        return this.age
    }
    setGenre(genre){
        this.genre=genre
        return this.genre
    }
    setPhone(phone){
        this.phone=phone
        return this.phone
    }
}
