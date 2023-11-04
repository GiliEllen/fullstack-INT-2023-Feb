console.log("connected");

let a = {name: "gili", age: undefined}

type Developer = {
    
}

let gili:Developer = "Lecturer"

enum Course {
    FS = "FullStack",
    QA = "Qality Assuernes",
    UIUX = "User InterFace"
}

interface Employee {
    name: string,
    age: number,
    kind: Developer,
    course: Course
}

let tom:Employee = {
    name: "tom",
    age: 20,
    kind: "Student",
    course: Course.FS
} 
let hadar:Employee = {
    name: "hadar",
    age: 20,
    kind: "Student",
    course: Course.FS
} 
let roni:Employee = {
    name: "roni",
    age: 20,
    kind: "Lecturer",
    course: Course.UIUX
} 

const employees:Employee[] = [tom, hadar]


const getAllFullstack = () => {
    employees.forEach((em) => {
        if(em.course == Course.FS) {
            console.log("yay~")
        } 
    })
}

getAllFullstack()