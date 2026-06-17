//task day6
//Task: Create an array of 5 job postings (each with title, company, salary, required experience).
//  Write functions to sort by salary, filter by experience less than 2 years, and return only titles
//  and companies as a new array.
const jobposting = [
    {
        title: "web-developer",
        company: "Microsoft",
        salary: 150000,
        experience: 3
    },
    {
        title: "SDE1",
        company: "Uber",
        salary: 250000,
        experience: 1
    },
    {
        title: "Designer",
        company: "myntra",
        salary: 75000,
        experience: 1.5
    },
    {
        title: "SDE2",
        company: "Google",
        salary: 350000,
        experience: 2
    },
    {
        title: "AI-Engineer",
        company: "Meta",
        salary: 80000,
        experience: 4
    }
]

function sortSalary(postings){
    return postings.sort((a,b) => a.salary - b.salary)
}
function filterByExperience(postings){
   return postings.filter(posting => posting.experience <= 2)
}
function getTitlesandCompanies(postings){
    return postings.map(posting =>({
        title: posting.title,
        company: posting.company
    }));
}

console.log(sortSalary(jobposting))
console.log(filterByExperience(jobposting))
console.log(getTitlesandCompanies(jobposting))
