//syntax: $.getJSON(url, [data], [callback]);
//AJAX library
// const b1 = document.getElementById("b1");
// b1.addEventListener("click", getFromServer);

console.log("Hello");
let names = ["Dixant", "Jon", "Keith"];

let details = {
  first_name: "Dixant",
  last_name: "Mittal",
};

let users = [
  {
    first_name: "Dixant",
    last_name: "Mittal",
  },
  {
    first_name: "Jon",
    last_name: "Scheele",
  },
];
let all_names = "";

let code = "<ul>";

names.forEach((name) => {
  code = code + "<li>" + name + "</li>";
});

code = code + "</ul>"

$(".mypanel").html(code);

function perform_operation()