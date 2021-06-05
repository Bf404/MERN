const express = require("express")
const faker = require("faker"); // Got some proplems with faker API, I had to fill in the data manually 

const app = express();
const port = 8000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));

class User {
    constructor() {
        this._id = 1;
        this.firstName = "Waleed";
        this.lastName = "almo";
        this.phoneNumber = "887654333";
        this.email = "Email.com";
        this.password = "pass";
    }
    
}

class Company {
    constructor() {
        this._id = 1;
        this.name = "Company1";
        this.address = {
            street: "Stonebridge RD",
            city: "Chicago",
            state: "IL",
            zipCode: 85313,
            country: "United States"
        };
    }

}

/*class User {
    constructor() {
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
    
}

class Company {
    constructor() {
        this._id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }

}*/

app.get('/api/users/new', (req, res) => {
    const newUser = new User();
    res.json({User: newUser});

});

app.get('/api/companies/new', (req, res) => {
    const newComp = new Company();
    res.json({Company: newComp});
});

app.get('/api/user/company', (req, res) => {
    const newUser = new User();
    const newComp = new Company();
    res.json({User: newUser, Company: newComp});
});

app.listen(port, () => console.log("running in port " + port));