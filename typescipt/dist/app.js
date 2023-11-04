console.log("connected");
var a = { name: "gili", age: undefined };
var gili = "Lecturer";
var Course;
(function (Course) {
    Course["FS"] = "FullStack";
    Course["QA"] = "Qality Assuernes";
    Course["UIUX"] = "User InterFace";
})(Course || (Course = {}));
var tom = {
    name: "tom",
    age: 20,
    kind: "Student",
    course: Course.FS
};
var hadar = {
    name: "hadar",
    age: 20,
    kind: "Student",
    course: Course.FS
};
var roni = {
    name: "roni",
    age: 20,
    kind: "Lecturer",
    course: Course.UIUX
};
var employees = [tom, hadar];
var getAllFullstack = function () {
    employees.forEach(function (em) {
        if (em.course == Course.FS) {
            console.log("yay~");
        }
    });
};
getAllFullstack();
