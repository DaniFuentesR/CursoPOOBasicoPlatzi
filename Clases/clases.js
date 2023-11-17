class Student {
    constructor({ // esta función/metodo se utiliza para crear nuestras instancias de clases
        name, 
        age, 
        cursosAprobados = [], 
        email})
        
        { 
        this.name = name; 
        this.email = email
        this.age = age; 
        this.cursosAprobados = cursosAprobados;   
        }

    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso); 
    }
}; 

const miguelito = new Student({ // => miguelito es un objeto-instancia de la clase Student. 
    name: "Miguel",
    age: 28,
    email: "miguelito@platzi.com"
}
)

// miguelito.aprobarCurso("logica matematica"); 