class person{
    constructor(firstname,lastname,dateofbirth,location)
    {
        this.firstname = firstname;
        this.lastname = lastname;
        this.dateofbirth = dateofbirth;
        this.location = location;
    }
}
var person1 = new person("sindhu","rajesh","21.02.2001","kumbakonam");
var person2 = new person("johnmerlin","sesurathinam","29.09.2003","coimbatore")

console.log(person1.firstname);
console.log(person1.lastname);
console.log(person1.dateofbirth);
console.log(person1.location);