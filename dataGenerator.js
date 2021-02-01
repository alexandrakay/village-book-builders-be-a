const faker = require("faker");
const jsonfile = require("jsonfile");

const file = "./db.json";
const LANGUAGES = require("./language.js");
let data = jsonfile.readFileSync(file);
data = {};

const NUMOFLIBS = 10;
const NUMOFHEADS = NUMOFLIBS * 2;
let NUMOFMENTEES = 0;
const NUMOFTEACHERS = NUMOFLIBS * 2;
const NUMOFTEACHS = NUMOFLIBS * 2
const NUMOFMENTORS = NUMOFLIBS * 2;

const genders = ["Male", "Female", "Other"];
const apps = ["phone", "email", "mail", "wechat", "duo", "facebook", "twitter"];

//Librarys-----------------------------------------------------
data.library = [];
for (let index = 0; index < NUMOFLIBS; index++) {
  //Generate data
  let fakeLib = {
    id: index,
    name: faker.company.companyName(1),
    description: faker.random.words(30),
    library_usage: faker.random.words(30),
    notes: faker.random.words(30),
    image: faker.image.imageUrl(600, 600),
    headmasterId: [],
  };

  data.library.push(fakeLib);
}

//Villages-----------------------------------------------------
data.village = [];
for (let index = 0; index < NUMOFLIBS; index++) {
  //Generate data
  let fakeVillage = {
    id: index,
    name: faker.address.city(),
    GPS_coordinates: faker.address.nearbyGPSCoordinate(),
    village_contact_name: faker.name.findName(),
    village_contact_phone: faker.phone.phoneNumberFormat(),
    notes: faker.random.words(50),
    headmasterId: [],
  };

  data.village.push(fakeVillage);
}

//Schools-----------------------------------------------------
data.school = [];
for (let index = 0; index < NUMOFLIBS; index++) {
  //Generate data
  let schoolmenteess = faker.random.number(NUMOFHEADS * 2);
  NUMOFMENTEES += schoolmenteess;
  let fakeSchool = {
    id: index,
    name: faker.company.companyName(),
    count_menteess_currently_enrolled: faker.random.number(schoolmenteess),
    count_teachers: 0,
    school_description: faker.random.words(30),
    school_needs: faker.random.words(30),
    school_goals: faker.random.words(30),
    dynamic_questions: [],
    notes: faker.random.words(30),
    headmasterId: [],
  };

  for (let x = 0; x < 3; x++) {
    fakeSchool.dynamic_questions.push({
      [`${faker.hacker.phrase()}`]: faker.random.words(20),
    });
  }
  data.school.push(fakeSchool);
}

//Headmasters-----------------------------------------------------
data.headmaster = [];
for (let index = 0; index < NUMOFHEADS; index++) {
  //Generate data
  let fakeHeadmaster = {
    id: index,
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    gender: faker.random.arrayElement(genders),
    address: faker.address.streetAddress(),
    gps_coordinates: faker.address.nearbyGPSCoordinate(),
    images_drive_folder_link: faker.internet.url(),
    headmasters_picture: faker.image.imageUrl(),
    education_contact: {
      name: faker.name.findName(),
      phone: faker.phone.phoneNumberFormat(2),
      email: faker.internet.email(),
      jobTitle: faker.name.jobTitle(),
    },
    notes: faker.random.words(50),
  };
  data.headmaster.push(fakeHeadmaster);
}

//menteess-----------------------------------------------------
data.mentee = [];
for (let index = 0; index < NUMOFMENTEES; index++) {
  //Generate data
  let fakeMentees = {
    id: index,
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    gender: genders[faker.random.number(genders.length - 1)],
    email: faker.internet.email(),
    primary_language: faker.random.arrayElement(LANGUAGES).name,
    dob: faker.date.past(15, "1999-07-09"),
    mentee_picture: faker.image.imageUrl(),
    english_lvl: faker.random.number(10),
    math_lvl: faker.random.number(13),
    reading_lvl: faker.random.number(13),
    school_lvl: faker.random.number(13),
    academic_description: faker.random.words(20),
    support_needed: faker.random.words(35),
    availability: {
      time_zone: faker.address.timeZone(),
      as_early_as: faker.fake("{{random.number(24)}}:00"),
      as_late_as: faker.fake("{{random.number(24)}}:00"),
      methods: faker.random.arrayElements(apps, 3),
    },
    dynamic_questions: [
      {
        qId: 0,
        question: "My favorite thing to do in my free time is",
        answer: faker.hacker.phrase(),
      },
      {
        qId: 1,
        question: "When I grow up, I want to be",
        answer: faker.hacker.phrase(),
      },
      {
        qId: 2,
        question: "Goals & Dreams Notes",
        answer: faker.hacker.phrase(),
      },
      {
        qId: 3,
        question: "Personal Struggles Notes",
        answer: faker.hacker.phrase(),
      },
      {
        qId: 4,
        question: "Other interests/hobbies",
        answer: faker.hacker.phrase(),
      },
      { qId: 5, question: "Skills Notes", answer: faker.hacker.phrase() },
      { qId: 6, question: "Family Notes", answer: faker.hacker.phrase() },
      { qId: 7, question: "Other Notes", answer: faker.hacker.phrase() },
      { qId: 8, question: "Admin Notes", answer: faker.hacker.phrase() },
    ],
  };

  data.mentee.push(fakeMentees);
}


//fake mentees to make date of birth possible, faker formats date of birth in a way to make it hard to search by date of birth. Commented out the code if future labs groups want to use it.



  // const mentees = [
  //  { id: 0,
  //   first_name: faker.name.firstName(),
  //   last_name: faker.name.lastName(),
  //   gender: genders[faker.random.number(genders.length - 1)],
  //   email: faker.internet.email(),
  //   primary_language: faker.random.arrayElement(LANGUAGES).name,
  //   dob: 01/01/2010,
  //   mentee_picture: faker.image.imageUrl(),
  //   english_lvl: faker.random.number(10),
  //   math_lvl: faker.random.number(13),
  //   reading_lvl: faker.random.number(13),
  //   school_lvl: faker.random.number(13),
  //   academic_description: faker.random.words(20),
  //   support_needed: faker.random.words(35),
  //   availability: {
  //     time_zone: faker.address.timeZone(),
  //     as_early_as: faker.fake("{{random.number(24)}}:00"),
  //     as_late_as: faker.fake("{{random.number(24)}}:00"),
  //     methods: faker.random.arrayElements(apps, 3),
  //   },
  //   dynamic_questions: [
  //     {
  //       qId: 0,
  //       question: "My favorite thing to do in my free time is",
  //       answer: faker.hacker.phrase(),
  //     },
  //     {
  //       qId: 1,
  //       question: "When I grow up, I want to be",
  //       answer: faker.hacker.phrase(),
  //     },
  //     {
  //       qId: 2,
  //       question: "Goals & Dreams Notes",
  //       answer: faker.hacker.phrase(),
  //     },
  //     {
  //       qId: 3,
  //       question: "Personal Struggles Notes",
  //       answer: faker.hacker.phrase(),
  //     },
  //     {
  //       qId: 4,
  //       question: "Other interests/hobbies",
  //       answer: faker.hacker.phrase(),
  //     },
  //     { qId: 5, question: "Skills Notes", answer: faker.hacker.phrase() },
  //     { qId: 6, question: "Family Notes", answer: faker.hacker.phrase() },
  //     { qId: 7, question: "Other Notes", answer: faker.hacker.phrase() },
  //     { qId: 8, question: "Admin Notes", answer: faker.hacker.phrase() },
  //   ],
  // },
  // { id: 1,
  //   first_name: faker.name.firstName(),
  //   last_name: faker.name.lastName(),
  //   gender: genders[faker.random.number(genders.length - 1)],
  //   email: faker.internet.email(),
  //   primary_language: faker.random.arrayElement(LANGUAGES).name,
  //   dob: 01/10/2008,
  //   mentee_picture: faker.image.imageUrl(),
  //   english_lvl: faker.random.number(10),
  //   math_lvl: faker.random.number(13),
  //   reading_lvl: faker.random.number(13),
  //   school_lvl: faker.random.number(13),
  //   academic_description: faker.random.words(20),
  //   support_needed: faker.random.words(35),
  //   availability: {
  //     time_zone: faker.address.timeZone(),
  //     as_early_as: faker.fake("{{random.number(24)}}:00"),
  //     as_late_as: faker.fake("{{random.number(24)}}:00"),
  //     methods: faker.random.arrayElements(apps, 3),
  //   },
  //   dynamic_questions: [
  //     {
  //       qId: 0,
  //       question: "My favorite thing to do in my free time is",
  //       answer: faker.hacker.phrase(),
  //     },
  //     {
  //       qId: 1,
  //       question: "When I grow up, I want to be",
  //       answer: faker.hacker.phrase(),
  //     },
  //     {
  //       qId: 2,
  //       question: "Goals & Dreams Notes",
  //       answer: faker.hacker.phrase(),
  //     },
  //     {
  //       qId: 3,
  //       question: "Personal Struggles Notes",
  //       answer: faker.hacker.phrase(),
  //     },
  //     {
  //       qId: 4,
  //       question: "Other interests/hobbies",
  //       answer: faker.hacker.phrase(),
  //     },
  //     { qId: 5, question: "Skills Notes", answer: faker.hacker.phrase() },
  //     { qId: 6, question: "Family Notes", answer: faker.hacker.phrase() },
  //     { qId: 7, question: "Other Notes", answer: faker.hacker.phrase() },
  //     { qId: 8, question: "Admin Notes", answer: faker.hacker.phrase() },
  //   ],
  // },
  // { id: 2,
  //   first_name: faker.name.firstName(),
  //   last_name: faker.name.lastName(),
  //   gender: genders[faker.random.number(genders.length - 1)],
  //   email: faker.internet.email(),
  //   primary_language: faker.random.arrayElement(LANGUAGES).name,
  //   dob: 01/03/2004,
  //   mentee_picture: faker.image.imageUrl(),
  //   english_lvl: faker.random.number(10),
  //   math_lvl: faker.random.number(13),
  //   reading_lvl: faker.random.number(13),
  //   school_lvl: faker.random.number(13),
  //   academic_description: faker.random.words(20),
  //   support_needed: faker.random.words(35),
  //   availability: {
  //     time_zone: faker.address.timeZone(),
  //     as_early_as: faker.fake("{{random.number(24)}}:00"),
  //     as_late_as: faker.fake("{{random.number(24)}}:00"),
  //     methods: faker.random.arrayElements(apps, 3),
  //   },
  //   dynamic_questions: [
  //     {
  //       qId: 0,
  //       question: "My favorite thing to do in my free time is",
  //       answer: faker.hacker.phrase(),
  //     },
  //     {
  //       qId: 1,
  //       question: "When I grow up, I want to be",
  //       answer: faker.hacker.phrase(),
  //     },
  //     {
  //       qId: 2,
  //       question: "Goals & Dreams Notes",
  //       answer: faker.hacker.phrase(),
  //     },
  //     {
  //       qId: 3,
  //       question: "Personal Struggles Notes",
  //       answer: faker.hacker.phrase(),
  //     },
  //     {
  //       qId: 4,
  //       question: "Other interests/hobbies",
  //       answer: faker.hacker.phrase(),
  //     },
  //     { qId: 5, question: "Skills Notes", answer: faker.hacker.phrase() },
  //     { qId: 6, question: "Family Notes", answer: faker.hacker.phrase() },
  //     { qId: 7, question: "Other Notes", answer: faker.hacker.phrase() },
  //     { qId: 8, question: "Admin Notes", answer: faker.hacker.phrase() },
  //   ],
  // },
  // { id: 3,
  //   first_name: faker.name.firstName(),
  //   last_name: faker.name.lastName(),
  //   gender: genders[faker.random.number(genders.length - 1)],
  //   email: faker.internet.email(),
  //   primary_language: faker.random.arrayElement(LANGUAGES).name,
  //   dob: 03/01/2007,
  //   mentee_picture: faker.image.imageUrl(),
  //   english_lvl: faker.random.number(10),
  //   math_lvl: faker.random.number(13),
  //   reading_lvl: faker.random.number(13),
  //   school_lvl: faker.random.number(13),
  //   academic_description: faker.random.words(20),
  //   support_needed: faker.random.words(35),
  //   availability: {
  //     time_zone: faker.address.timeZone(),
  //     as_early_as: faker.fake("{{random.number(24)}}:00"),
  //     as_late_as: faker.fake("{{random.number(24)}}:00"),
  //     methods: faker.random.arrayElements(apps, 3),
  //   },
  //   dynamic_questions: [
  //     {
  //       qId: 0,
  //       question: "My favorite thing to do in my free time is",
  //       answer: faker.hacker.phrase(),
  //     },
  //     {
  //       qId: 1,
  //       question: "When I grow up, I want to be",
  //       answer: faker.hacker.phrase(),
  //     },
  //     {
  //       qId: 2,
  //       question: "Goals & Dreams Notes",
  //       answer: faker.hacker.phrase(),
  //     },
  //     {
  //       qId: 3,
  //       question: "Personal Struggles Notes",
  //       answer: faker.hacker.phrase(),
  //     },
  //     {
  //       qId: 4,
  //       question: "Other interests/hobbies",
  //       answer: faker.hacker.phrase(),
  //     },
  //     { qId: 5, question: "Skills Notes", answer: faker.hacker.phrase() },
  //     { qId: 6, question: "Family Notes", answer: faker.hacker.phrase() },
  //     { qId: 7, question: "Other Notes", answer: faker.hacker.phrase() },
  //     { qId: 8, question: "Admin Notes", answer: faker.hacker.phrase() },
  //   ],
  // },
  // { id: 4,
  //   first_name: faker.name.firstName(),
  //   last_name: faker.name.lastName(),
  //   gender: genders[faker.random.number(genders.length - 1)],
  //   email: faker.internet.email(),
  //   primary_language: faker.random.arrayElement(LANGUAGES).name,
  //   dob: 06/06/2006,
  //   mentee_picture: faker.image.imageUrl(),
  //   english_lvl: faker.random.number(10),
  //   math_lvl: faker.random.number(13),
  //   reading_lvl: faker.random.number(13),
  //   school_lvl: faker.random.number(13),
  //   academic_description: faker.random.words(20),
  //   support_needed: faker.random.words(35),
  //   availability: {
  //     time_zone: faker.address.timeZone(),
  //     as_early_as: faker.fake("{{random.number(24)}}:00"),
  //     as_late_as: faker.fake("{{random.number(24)}}:00"),
  //     methods: faker.random.arrayElements(apps, 3),
  //   },
  //   dynamic_questions: [
  //     {
  //       qId: 0,
  //       question: "My favorite thing to do in my free time is",
  //       answer: faker.hacker.phrase(),
  //     },
  //     {
  //       qId: 1,
  //       question: "When I grow up, I want to be",
  //       answer: faker.hacker.phrase(),
  //     },
  //     {
  //       qId: 2,
  //       question: "Goals & Dreams Notes",
  //       answer: faker.hacker.phrase(),
  //     },
  //     {
  //       qId: 3,
  //       question: "Personal Struggles Notes",
  //       answer: faker.hacker.phrase(),
  //     },
  //     {
  //       qId: 4,
  //       question: "Other interests/hobbies",
  //       answer: faker.hacker.phrase(),
  //     },
  //     { qId: 5, question: "Skills Notes", answer: faker.hacker.phrase() },
  //     { qId: 6, question: "Family Notes", answer: faker.hacker.phrase() },
  //     { qId: 7, question: "Other Notes", answer: faker.hacker.phrase() },
  //     { qId: 8, question: "Admin Notes", answer: faker.hacker.phrase() },
  //   ],
  // },
  // { id: 5,
  //   first_name: faker.name.firstName(),
  //   last_name: faker.name.lastName(),
  //   gender: genders[faker.random.number(genders.length - 1)],
  //   email: faker.internet.email(),
  //   primary_language: faker.random.arrayElement(LANGUAGES).name,
  //   dob: 05/05/2005,
  //   mentee_picture: faker.image.imageUrl(),
  //   english_lvl: faker.random.number(10),
  //   math_lvl: faker.random.number(13),
  //   reading_lvl: faker.random.number(13),
  //   school_lvl: faker.random.number(13),
  //   academic_description: faker.random.words(20),
  //   support_needed: faker.random.words(35),
  //   availability: {
  //     time_zone: faker.address.timeZone(),
  //     as_early_as: faker.fake("{{random.number(24)}}:00"),
  //     as_late_as: faker.fake("{{random.number(24)}}:00"),
  //     methods: faker.random.arrayElements(apps, 3),
  //   },
  //   dynamic_questions: [
  //     {
  //       qId: 0,
  //       question: "My favorite thing to do in my free time is",
  //       answer: faker.hacker.phrase(),
  //     },
  //     {
  //       qId: 1,
  //       question: "When I grow up, I want to be",
  //       answer: faker.hacker.phrase(),
  //     },
  //     {
  //       qId: 2,
  //       question: "Goals & Dreams Notes",
  //       answer: faker.hacker.phrase(),
  //     },
  //     {
  //       qId: 3,
  //       question: "Personal Struggles Notes",
  //       answer: faker.hacker.phrase(),
  //     },
  //     {
  //       qId: 4,
  //       question: "Other interests/hobbies",
  //       answer: faker.hacker.phrase(),
  //     },
  //     { qId: 5, question: "Skills Notes", answer: faker.hacker.phrase() },
  //     { qId: 6, question: "Family Notes", answer: faker.hacker.phrase() },
  //     { qId: 7, question: "Other Notes", answer: faker.hacker.phrase() },
  //     { qId: 8, question: "Admin Notes", answer: faker.hacker.phrase() },
  //   ],
  // },
  // { id: 6,
  //   first_name: faker.name.firstName(),
  //   last_name: faker.name.lastName(),
  //   gender: genders[faker.random.number(genders.length - 1)],
  //   email: faker.internet.email(),
  //   primary_language: faker.random.arrayElement(LANGUAGES).name,
  //   dob: 03/03/2010,
  //   mentee_picture: faker.image.imageUrl(),
  //   english_lvl: faker.random.number(10),
  //   math_lvl: faker.random.number(13),
  //   reading_lvl: faker.random.number(13),
  //   school_lvl: faker.random.number(13),
  //   academic_description: faker.random.words(20),
  //   support_needed: faker.random.words(35),
  //   availability: {
  //     time_zone: faker.address.timeZone(),
  //     as_early_as: faker.fake("{{random.number(24)}}:00"),
  //     as_late_as: faker.fake("{{random.number(24)}}:00"),
  //     methods: faker.random.arrayElements(apps, 3),
  //   },
  //   dynamic_questions: [
  //     {
  //       qId: 0,
  //       question: "My favorite thing to do in my free time is",
  //       answer: faker.hacker.phrase(),
  //     },
  //     {
  //       qId: 1,
  //       question: "When I grow up, I want to be",
  //       answer: faker.hacker.phrase(),
  //     },
  //     {
  //       qId: 2,
  //       question: "Goals & Dreams Notes",
  //       answer: faker.hacker.phrase(),
  //     },
  //     {
  //       qId: 3,
  //       question: "Personal Struggles Notes",
  //       answer: faker.hacker.phrase(),
  //     },
  //     {
  //       qId: 4,
  //       question: "Other interests/hobbies",
  //       answer: faker.hacker.phrase(),
  //     },
  //     { qId: 5, question: "Skills Notes", answer: faker.hacker.phrase() },
  //     { qId: 6, question: "Family Notes", answer: faker.hacker.phrase() },
  //     { qId: 7, question: "Other Notes", answer: faker.hacker.phrase() },
  //     { qId: 8, question: "Admin Notes", answer: faker.hacker.phrase() },
  //   ],
  // },
  // { id: 7,
  //   first_name: faker.name.firstName(),
  //   last_name: faker.name.lastName(),
  //   gender: genders[faker.random.number(genders.length - 1)],
  //   email: faker.internet.email(),
  //   primary_language: faker.random.arrayElement(LANGUAGES).name,
  //   dob: 01/01/2014,
  //   mentee_picture: faker.image.imageUrl(),
  //   english_lvl: faker.random.number(10),
  //   math_lvl: faker.random.number(13),
  //   reading_lvl: faker.random.number(13),
  //   school_lvl: faker.random.number(13),
  //   academic_description: faker.random.words(20),
  //   support_needed: faker.random.words(35),
  //   availability: {
  //     time_zone: faker.address.timeZone(),
  //     as_early_as: faker.fake("{{random.number(24)}}:00"),
  //     as_late_as: faker.fake("{{random.number(24)}}:00"),
  //     methods: faker.random.arrayElements(apps, 3),
  //   },
  //   dynamic_questions: [
  //     {
  //       qId: 0,
  //       question: "My favorite thing to do in my free time is",
  //       answer: faker.hacker.phrase(),
  //     },
  //     {
  //       qId: 1,
  //       question: "When I grow up, I want to be",
  //       answer: faker.hacker.phrase(),
  //     },
  //     {
  //       qId: 2,
  //       question: "Goals & Dreams Notes",
  //       answer: faker.hacker.phrase(),
  //     },
  //     {
  //       qId: 3,
  //       question: "Personal Struggles Notes",
  //       answer: faker.hacker.phrase(),
  //     },
  //     {
  //       qId: 4,
  //       question: "Other interests/hobbies",
  //       answer: faker.hacker.phrase(),
  //     },
  //     { qId: 5, question: "Skills Notes", answer: faker.hacker.phrase() },
  //     { qId: 6, question: "Family Notes", answer: faker.hacker.phrase() },
  //     { qId: 7, question: "Other Notes", answer: faker.hacker.phrase() },
  //     { qId: 8, question: "Admin Notes", answer: faker.hacker.phrase() },
  //   ],
  // },
  // ]
  // data.mentees = mentees




  



//Teachers----
data.teacher = [];
for (let index = 0; index < NUMOFTEACHERS; index++) {
  //Generate data
  let fakeTeacher = {
    id: index,
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    gender: faker.random.arrayElement(genders),
    address: faker.address.streetAddress(),
    teachers_picture: faker.image.imageUrl(),
    education_contact: {
      name: faker.name.findName(),
      phone: faker.phone.phoneNumberFormat(2),
      email: faker.internet.email(),
      jobTitle: faker.name.jobTitle(),
    },
    notes: faker.random.words(20),
  };
  data.teacher.push(fakeTeacher);
}

//public facing teachers that do not need auth
data.teach = [];
for (let index = 0; index < NUMOFTEACHS; index++) {
  //Generate data
  let fakeTeach = {
    id: index,
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    gender: faker.random.arrayElement(genders),
    address: faker.address.streetAddress(),
    teachers_picture: faker.image.imageUrl(),
    education_contact: {
      name: faker.name.findName(),
      phone: faker.phone.phoneNumberFormat(2),
      email: faker.internet.email(),
      jobTitle: faker.name.jobTitle(),
    },
    notes: faker.random.words(20),
  };
  data.teach.push(fakeTeach);
}

//mentor

data.mentor = [];
for (let index = 0; index < NUMOFMENTORS; index++) {
  //Generate data
  let fakeMentors = {
    id: index,
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    gender: genders[faker.random.number(genders.length - 1)],
    email: faker.internet.email(),
    primary_language: faker.random.arrayElement(LANGUAGES).name,
    dob: faker.date.past(15, "1999-07-09"),
    mentor_picture: faker.image.imageUrl(),
    academic_description: faker.random.words(30),
    support_needed: faker.random.words(20),
    availability: {
      time_zone: faker.address.timeZone(),
      as_early_as: faker.fake("{{random.number(24)}}:00"),
      as_late_as: faker.fake("{{random.number(24)}}:00"),
      methods: faker.random.arrayElements(apps, 3),
    },
  };

  data.mentor.push(fakeMentors);
}

//program role -------
data.program = [];
for (let index = 0; index < NUMOFLIBS; index++) {
  let fakeProgram = {
    id: index,
    name: faker.address.city(),
    location: faker.address.nearbyGPSCoordinate(),
  };
  data.program.push(fakeProgram);
}

//Releationships-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//Village - Schools - Librarys
for (let index = 0; index < NUMOFLIBS; index++) {
  //library
  data.library[index].villageId = index;
  data.library[index].schoolId = index;
  //school
  data.school[index].villageId = index;
  data.school[index].libraryId = index;
  //village
  data.village[index].schoolId = index;
  data.village[index].libraryId = index;
}

//headmasters
for (let index = 0; index < NUMOFLIBS; index++) {
  data.headmaster[index].villageId = index;
  data.headmaster[index].schoolId = index;
  data.headmaster[index].libraryId = index;
  data.school[index].headmasterId.push(index);
  data.village[index].headmasterId.push(index);
  data.library[index].headmasterId.push(index);
}

for (let index = NUMOFLIBS; index < data.headmaster.length; index++) {
  let randomVillage = faker.random.number(NUMOFLIBS);
  randomVillage -= 1 ? randomVillage != 0 : (randomVillage = randomVillage);
  //headmaster
  data.headmaster[index].libraryId = randomVillage;
  //Village - Schools - Librarys
  data.school[randomVillage].headmasterId.push(index);
  data.village[randomVillage].headmasterId.push(index);
  data.library[randomVillage].headmasterId.push(index);
}

//program
for (let index = 0; index < data.program.length; index++) {
  data.program[index].libraryId = index;
}

//Users-----------------------------------------------------

const fakeUsers = [
  { id: 0, email: "admin@admin.com", password: "password", role: "admin" },
  { id: 2, email: "bruno@email.com", password: "password", role: "admin" },
  { id: 3, email: faker.internet.email(), password: "password", role: "admin" },
  {
    id: 4,
    email: "headmaster@headmaster.com",
    password: "password",
    role: "headmaster",
  },
  {
    id: 5,
    email: "varun@vbb.com",
    password: "password",
    role: "headmaster",
  },
  {
    id: 6,
    email: "Isadore37@hotmail.com",
    password: "password",
    role: "headmaster",
  },
  {
    id: 7,
    email: faker.internet.email(),
    password: "password",
    role: "headmaster",
  },
  {
    id: 8,
    email: "mentees@mentees.com",
    password: "password",
    role: "mentee",
  },
  {
    id: 9,
    email: "varun@vbb.com",
    password: "password",
    role: "mentee",
  },
  {
    id: 10,
    email: faker.internet.email(),
    password: "password",
    role: "mentee",
  },
  {
    id: 11,
    email: "teacher@teacher.com",
    password: "password",
    role: "teacher",
  },
  {
    id: 12,
    email: "mentor@mentor.com",
    password: "password",
    role: "mentor",
  },
  {
    id: 13,
    email: "program@program.com",
    password: "password",
    role: "program",
  },
  
];
data.user = fakeUsers;

//Resources---------------------------------------------------
const fakeResource =[
  { id: 0, name: "google", siteUrl:"https://www.google.com", image_Url: "https://image.pngaaa.com/555/25555-middle.png" },
  { id: 1, name: "khan academy", siteUrl:"https://www.khanacademy.org/", image_Url: "https://www.cityofhomer-ak.gov/sites/default/files/imageattachments/library/page/66131/khan_academy_kids.png" },
  { id: 2, name: "notion", siteUrl:"https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjGvZ7qrLvuAhWShsAKHXmfBicYABAAGgJpbQ&ae=2&ohost=www.google.com&cid=CAESQOD2jYIu_p5rpABnkkoQDkMGcH8lNOnPkitNBTyb5x8LjzIk5TUumAeXiSrRet5Lqg35a_TN4vrqOk-HQ4EPryA&sig=AOD64_2E6Qu8FAPy8cTN13mJctcYveKYZQ&q&adurl&ved=2ahUKEwj6jZbqrLvuAhUVXc0KHbN3DyIQ0Qx6BAgeEAE", image_Url: "https://cdn.worldvectorlogo.com/logos/notion-2.svg" },
  { id: 3, name: "britannica", siteUrl:"https://www.britannica.com/", image_Url: "https://www.giraffesocialmedia.co.uk/wp-content/uploads/2018/03/Britannica.jpg" },
  { id: 4, name: "edutopia", siteUrl:"https://www.edutopia.org/", image_Url: "https://banner2.cleanpng.com/20180529/xfy/kisspng-edutopia-education-school-student-foundation-george-lucas-5b0d17b7b93357.8945893515275846957586.jpg" },
  { id: 5, name: "discovery education", siteUrl:"https://www.discoveryeducation.com/", image_Url: "https://image.pngaaa.com/555/25555-middle.png" },
  { id: 6, name: "pbs", siteUrl:"https://www.pbs.org/", image_Url: "https://image.pngaaa.com/555/25555-middle.png" },
  { id: 7, name: "kahoot", siteUrl:"https://kahoot.com/", image_Url: "https://image.pngaaa.com/555/25555-middle.png" },
  { id: 8, name: "class dojo", siteUrl: "https://classdojo.com/", image_Url: "https://image.pngaaa.com/555/25555-middle.png" },
]
data.resource = fakeResource

//Debbuging print statements-----------------------------------------------------
// console.log(data.library, "\n\n\n\n\n\n\n\n\n\n\n");
// console.log(data.village, "\n\n\n\n\n\n\n\n\n\n\n");
// console.log(
//   data.school,
//   data.school[0].dynamic_questions,
//   "\n\n\n\n\n\n\n\n\n\n\n"
// );
// console.log(data.headmaster, "\n\n\n\n\n\n\n\n\n\n\n");
// console.log(data.mentees[0].primary_language, "\n\n\n\n\n\n\n\n\n\n\n");
// console.log(data.user);
jsonfile.writeFileSync(file, data);
