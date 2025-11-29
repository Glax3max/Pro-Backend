// Class
    class Person {
        // constructor
        constructor(firstName,lastName,age,country,city) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.country = country;
            this.city = city;
            this.score = 0;
            this.skills = []
        }
        // method
        // getter
        get getScore() {
            return this.score;
        }

        get getFullName() {
            return this.firstName + " " + this.lastName;
        }

        // setter
        set setScore(score) {
            this.score += score;
        }
        set setSkill(skill) {
            this.skills.push(skill);
        }
    }

    const person1 = new Person("Abhishek" , "Gupta",23,"India","Noida");
    const person2 = new Person("Ravishek" , "Gupta",23,"India","Noida");
    const person3 = new Person("Abhilasha" , "Gupta",23,"India","Gurgaon");
    const person4 = new Person("Piyush rai" , "Gupta",23,"India","Patna");
    person1.setScore = 243;
    person1.setSkill = "HTML";
    person1.setSkill = "Javascro"
    console.log(person3.city);

    console.log(person1.getFullName,person1.getScore)
