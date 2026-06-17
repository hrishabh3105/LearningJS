const student = {
    name: "Hrishabh",
    mathsMarks: 90,
    ChemMarks:78,
    PhysicsMarks: 88,
    BioMarks: 43,
    EngMarks: 99,

    avgMarks: function() {
            return (this.mathsMarks+ this.ChemMarks+ this.PhysicsMarks+ this.BioMarks+ this.EngMarks)/5;
    } ,
    getResult: function() {
        const avg = this.avgMarks();
        return avg >= 33 ? "Pass" : "Fail";
    }
}

console.log(student.avgMarks());
console.log(student.getResult());

// object destructuring 
const {mathsMarks} = student;
console.log(mathsMarks);
//
const {mathsMarks: MM} = student;
console.log(MM);