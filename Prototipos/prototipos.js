// const natalia = {
//     name: "Natalia",
//     age: 20,
//     cursosAprobados: [
//         "Curso definitivo de HTML y Css",
//         "Curso practico de HTML y Css",
//     ],
//     aprobarCurso(nuevoCurso){ // esto se hace para la creación de metodos dentro del objeto literal, es una función.  
//         this.cursosAprobados.push(nuevoCurso); // la palabra this hace referencia al objeto sobre el cual quiero trabajar, en este caso como estoy en Natalia hace referencia a ese objeto. 
//     }
// }; 

// // Hacer que Natalia apruebe otro curso

//     natalia.cursosAprobados.push("Curso de responsive Design"); 
//     natalia.name = "Nath"; 
//     natalia.age += 1; 
    
//     natalia.aprobarCurso("CSS GRID"); 


// Creación de Prototipo de funciones: 

    function Student(name, age, cursosAprobados) {
        this.name = name; 
        this.age = age; 
        this.cursosAprobados = cursosAprobados;

        //forma 1 de crear metodos dentro de un prototipo
        // this.aprobarCurso = function aprobarCurso(){
        //     this.cursosAprobados.push(nuevoCurso); 
        // }
    }

    // Forma 2 de crear metodos dentro de un prototipo
Student.prototype.aprobarCurso = function(nuevoCurso){
    this.cursosAprobados.push(nuevoCurso); 
}

const juanita = new Student( // => juanita es una instancia del prototipo Student
    "Juanita Perez",
    25,
    ["CSS GRID", "CSS FlexBox","Tailwind"]
)

juanita.aprobarCurso("Preprocesador SASS")