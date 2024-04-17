interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience: number;
  location: string;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  [propName: string]: any;
  /* eslint-enable @typescript-eslint/no-explicit-any */
}

/* eslint-enable @typescript-eslint/class-name-casing */
export const printTeacher: printTeacherFunction = funtion (
  firstName: string,
  lastName: string
): string {
  return `${firstName.charAt(0). ${lastName}`
};

interface StudentConstructor {
  new (firstName: string, lastName: string)
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

export class StudentClass implents StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}
