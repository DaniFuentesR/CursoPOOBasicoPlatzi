class Course {
    constructor({
        name,
        classes =[]
    }){
        this.name = name;
        this.classes = classes; 
    }
}


const cursoProgrBasica = new Course ({
    name: "Curso Gratis de Programación Básica",
    clases: ""
})

const cursoDefHtml = new Course ({
    name: "Curso Definitivo de HTML y CSS",
    clases: ""
})

const cursoPracticoHtml = new Course ({
    name: "Curso Practico de HTML y CSS",
    clases: ""
})


class LerningPath {
    constructor(
        name, 
        courses = []
    ){

        this.name = name;
        this.courses = courses; 
    }
}

const escuelaWeb = new LerningPath({
    name: "Escuela de Desarrollo Web",
    courses: [
        cursoProgrBasica,
        cursoDefHtml,
        cursoPracticoHtml


    ]
});

const escuelaData = new LerningPath({
    name: "Escuela de Data Science",
    courses: [
        cursoProgrBasica,
        "Curso Data Business",
        "Curso DataViz"
    ]
});

const escuelaVgs = new LerningPath({
    name: "Escuela de VideoJuegos",
    courses: [
        cursoProgrBasica,
        "Curso de Unity", 
        "Curso de Unreal 3D"
    ]
}); 


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
    learningPaths: [
        escuelaWeb,
        escuelaVgs
    ] 
})

const miguelito1 = new Student({
    
    name: "Miguelit R",
    username: "miguelitor",
    email: "miguelito@platzi.com",
    twitter: "miguelitord",
    instagram: "miguelitord",
    lerningPaths: [
                escuelaWeb,
                escuelaData
            ]
})
