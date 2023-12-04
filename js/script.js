const our_team = document.getElementById("team_container");

//CREO UN ARRAY CON OGGETTI CONTENENTI CHIAVI E VALORI
let employees = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg",
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg",
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg",
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager",
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg",
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg",
    },
];

//STAMPO LE CHIAVI E I VALORI IN CONSOLE, CREANDO UN CICLO FOR
for(let i = 0; i < employees.length; i++){
    console.log(employees[i]);

    //STAMPO LE INFORMAZIONI PER RENDERLE VISIBILI NEL DOM
    let div = document.createElement("div");
    div.innerHTML = `<h3>${employees[i].name}</h3> <h5>${employees[i].role}</h5> ${employees[i].image}`;
    our_team.appendChild(div);


}
