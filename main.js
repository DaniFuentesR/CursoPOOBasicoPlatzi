class Student {
    constructor({
        name, 
        email, 
        username, 
        twitter = undefined, 
        instagram = undefined, 
        facebook= undefined, 
        approvedCourses=[], 
        lerningPaths=[]}){
        
        this.name = name
        this.email = email, 
        this.username = username, 
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        }
        this.approvedCourses = approvedCourses, 
        this.lerningPaths = lerningPaths

    }
}

const juan2 = new Student({
    
    name: "Daniel F",
    userName: "daniefr",
    email: "daniel@platzi.com",
    twitter: "danifuentesr",  
})

const miguelito1 = new Student({
    
    name: "Miguelit R",
    username: "miguelitor",
    email: "miguelito@platzi.com",
    twitter: "miguelitord",
    instagram: "miguelitord",
})










// const daniel1 = {
//     name: "Daniel F",
//     userName: "daniefr",
//     points: "100",
//     socialMedia:{
//         twitter: "danifuentesr",
//         instagram: "danifuentesr",
//         facebook: undefined
//     },
//     approvedCourses: [
//         "Curso definitivo de html y css",
//         "Curso practico de html y css"
//     ],

//     lerningPaths: [
        
//         {
//             name: "Escuela de desarrollo web",
//             courses: [
//                 "Curso definitivo de html y css",
//                 "Curso practico de html y css",
//                 "Curso de Responsive Design"
//             ]
//         }, 
//         {
//             name: "Escuela de videojuegos",
//             courses: [
//                 "Curso Introducción a la producción de Vgs",
//                 "Curso de Unreal Engine",
//                 "Curso de Unioty 3D"
//             ]
//         }


//     ]
// }


// const miguelito1 = {
//     name: "Miguelit R",
//     userName: "miguelitor",
//     points: "1000",
//     socialMedia:{
//         twitter: "miguelitord",
//         instagram: "miguelitord",
//         facebook: undefined
//     },
//     approvedCourses: [
//         "Curso dataBusiness",
//         "Curso DataViz"
//     ],

//     lerningPaths: [
        
//         {
//             name: "Escuela de desarrollo web",
//             courses: [
//                 "Curso definitivo de html y css",
//                 "Curso practico de html y css",
//                 "Curso de Responsive Design"
//             ]
//         }, 
//         {
//             name: "Escuela de Data Science",
//             courses: [
//                 "Curso dataBusiness",
//                 "Curso DataViz",
//                 "Curso de tableau"
//             ]
//         }


//     ]
// }