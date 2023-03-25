/*
- write a function canAdmitToNightClub that takes a person object as an argument and returns true if they can be admitted and false if they cannot
- an unaccompanied minor (under the age of 18) may not be admitted
- any person who is visibly inebriated may not be admitted
- the person object should have the following fields
  - age (Number)
  - isAccompaniedByAdult (Boolean)
  - isVisiblyInebriated (Boolean)
*/

function canAdmitToNightClub(person) {
  if (person.age > 18 && person.isVisiblyInebriated === false) {
    return true;
  } else {
    return false;
  }
}

test("should return true for person over 18", () => {
  const personOver18 = {
    age: 30,
    isAccompaniedByAdult: true,
    isVisiblyInebriated: false,
  };
  expect(canAdmitToNightClub(personOver18)).toEqual(true);
});

test("should return false for person under 18", () => {
  const personUnder18 = {
    age: 17,
    isAccompaniedByAdult: true,
    isVisiblyInebriated: false,
  };
  expect(canAdmitToNightClub(personUnder18)).toEqual(false);
});

test("should return false for a person who is inebriated", () => {
  const personVisiblyInebriated = {
    age: 34,
    isAccompaniedByAdult: true,
    isVisiblyInebriated: true,
  };
  expect(canAdmitToNightClub(personVisiblyInebriated)).toEqual(false);
});
