

const b1 = document.getElementById("b1");
b1.addEventListener("click", () => {
  $.getJSON(
    // "http://nusbackendstub.herokuapp.com/user/all",
    "http://nusbackendstub.herokuapp.com/user/by-uid?user_id=1",
    (data) => {
      let code = "<ul>";
      data.forEach((datapoint) => {
        code += `<li> First Name: ${datapoint.first_name}
                    Last Name: ${datapoint.last_name}
                    Email: ${datapoint.email} </li>`;
      });
      code += "</ul>";
      $(".mypanel").html(code);
    }
  );
});
