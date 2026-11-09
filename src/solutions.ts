function multiplyValue(value : number, multiplier: number =2): number 
{
  return value * multiplier;
}


function processInput(value: string | number | boolean ) : string| number {
  if(typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return value ?"Active": "Inactive";
  }
}


function formatCoordinate(
  coordinate: readonly[number,number, string],
): string {
  const [latitude, longitude,  locationName] = coordinate;

  return `Location:  ${locationName} (${latitude}, ${longitude})`;
}



function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}



interface Cours {
  title:string;
  students: number;
  isPublished: boolean;
}
function getPopularCourses(courses: Cours[], minStudents: number): Cours[] 
{
  return courses.filter(
    (course) => course.isPublished === true&& course.students >= minStudents,
  );
}


function pluckValues<T,K extends keyof T >(items: T[], key: K): T[K][] 
{
  return items.map((item) => item[key]);
}



class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name : string, baseSalary: number) 
  {
    this.name = name;
    this.baseSalary = baseSalary;
  }
  getDetails():string {
    return `Employe: ${this.name}, base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department : string;

  constructor(name : string,baseSalary : number,department : string)
   {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}


async function validateAgeAsyn(age: number): Promise<string> {
  return new Promise<string>((resolv, reject) => {
    if (age < 18)  {
      reject(new Error("Access denied : must be 18 or older "));
    } else {
        setTimeout(() => {
        resolv ("Access granted");
      }, 1000);
    }
 });
}
