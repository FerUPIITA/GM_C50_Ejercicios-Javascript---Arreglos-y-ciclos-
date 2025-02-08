let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

let commonCourses = student1Courses.filter(course => student2Courses.includes(course));
console.log(commonCourses); // Output: ['Programming']
document.write("<p>Ejercicio 4: " + commonCourses + "</p>");
