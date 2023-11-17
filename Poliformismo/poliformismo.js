class Comment {
    constructor({
        content,
        studentName,
        studentRole = "estudiante",
    }){
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole; 
        this.likes = 0; 
    }
    publicar() {
        console.log(this.studentName + "(" + this.studentRole + ")");
        console.log(this.likes + " Likes");
        console.log(this.content);
    }
}


class Course {
    constructor({
        name,
        classes =[],
        isFree = false,
        lang = "Spanish"
    }){
        this._name = name;
        this.classes = classes; 
        this.isFree = isFree;
        this.lang = lang; 
    }

    get name(){
        return this._name
    }

    set name(nuevoNombre){
        nuevoNombre === "Curso X de programación básica" ? console.error("No se puede utilizar ese nombre") : this._name = nuevoNombre; 
    }
}


const cursoProgrBasica = new Course ({
    name: "Curso Gratis de Programación Básica",
    isFree: true,
})

const cursoDefHtml = new Course ({
    name: "Curso Definitivo de HTML y CSS",
    clases: ""
})

const cursoPracticoHtml = new Course ({
    name: "Curso Practico de HTML y CSS",
    lang: "English"
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
        lerningPaths=[]
    }){
        
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

    publicarComentario (commentContent) {
        const comment = new Comment ({
            content: commentContent,
            studentName: this.name,
        })
        comment.publicar(); 
    }
}

class FreeStudent extends Student{
    constructor(props){ //=> props recibe todas las propiedades de las instancias de la clase, en este caso las instancias de juan2 y Miguelito1, esta recibiendo toda la info que hay en ellas. 
        super(props) // => me permite llamar a las propiedades del constructor de la clase madre sin tener que copiarlas y pegarlas. 
    }

    approvedCourse(newCourse){ // => este metodo me va a permitir manipular mi lista de aprroveCourses de mi clase madre (Student) y añadirle un curso. 
        newCourse.isFree ? this.approvedCourses.push(newCourse) : console.warn("Lo sentimos, " + this.name + " " +  "Solo puedes tomar cursos abiertos");
    } 
}

class BasicStudent extends Student{
    constructor(props){
        super(props)
    }

    approvedCourse(newCourse){ 
        newCourse.lang !== "English" ? this.approvedCourses.push(newCourse) : console.warn("Lo sentimos, " + this.name + ", "+ "Solo puedes tomar cursos en español");
    } 
}

class ExpertStudent extends Student{
    constructor(props){
        super(props)
    }

    approvedCourse(newCourse){ 
        this.approvedCourses.push(newCourse);
    } 
}

class TeacherStudent extends Student {
    constructor(props){
        super(props); 
    }

    approvedCourse(newCourse){ 
        this.approvedCourses.push(newCourse);
    } 

    publicarComentario (commentContent) {
        const comment = new Comment ({
            content: commentContent,
            studentName: this.name,
            studentRole: "Profesor"
        })
        comment.publicar(); 
    }
}

const daniel = new FreeStudent({
    
    name: "Daniel F",
    userName: "daniefr",
    email: "daniel@platzi.com",
    twitter: "danifuentesr", 
    learningPaths: [
        escuelaWeb,
        escuelaVgs
    ] 
})

const miguelito1 = new BasicStudent({
    
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


const freddy = new TeacherStudent ({
    name: "Freddy Vega",
    username: "freddysito123",
    email: "freddy@gmail.com",
    twitter: "FreddyV",
    instagram:"FreddyV"
})