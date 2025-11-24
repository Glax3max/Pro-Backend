// 1.

function personWithSkills(obj) {
    const person = Object.entries(obj);
    const arrOfPerson = [];
    for(let i = 0;i<person.length;i++) {
        if(person[i].skills.length > 0) {
            arrOfPerson.push(person[i]);
        }
    }
    return arrOfPerson;
}

// 2.

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}


console.log(Object.keys(users).length); //number of logged in user

function userWithPointsGreaterThan50() {
    const allUsers = Object.entries(users);
    const userWith50 = [];
    for(let i = 0;i<allUsers.length;i++) {
        if(allUsers[i][1].points >= 50) {
            userWith50.push(allUsers[i]);
        }
    }
    return userWith50;
}

// console.log(userWithPointsGreaterThan50());

// 3.

function AllMernDeveloper() {
    const allUser = Object.entries(users);
    const mernUsers = [];

    for(let i = 0;i<allUser.length;i++) {
        const skills = allUser[i][1].skills;
        if(skills.includes("MongoDB") && skills.includes("Express") && skills.includes("React") && skills.includes("Node")) {
            mernUsers.push(allUser[i]);
        }
    }
    return mernUsers;
}

console.log(AllMernDeveloper());

// 4.

const newUsers = {
    ...users,
    abhishek: {
        age: 21,
        skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
        country: "India",
        isLoggedIn: false,
        points: 50
    }
};

