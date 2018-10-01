let uname;
let email;
let result;
let userData = [];
$(document).ready(function() {
  $("#article-details").hide();
  $("#username").keyup(function() {
    uname = $(this).val();
  });
  $("#inputEmail").keyup(function() {
    email = $(this).val();
  });
  $("button").click(function() {
    console.log(uname);
    console.log(email);

    $.ajax({
      url: "https://jsonplaceholder.typicode.com/users"
    }).then(function(data) {
      result = data;
      console.log(result);

      for (let i = 0; i < result.length; i++) {
        if (uname == result[i].username && email == result[i].email) {
          userData.push(result[i]);
        }
      }
      if (userData.length > 0) {
        $("#article-details").show();
        console.log(userData);
        userData.forEach(user => {
          $("td:first").text(user.name);
          $("#phone").text(user.phone);
          $("#web").text(user.website);

          $("#street").text(user.address.street);
          $("#city").text(user.address.city);
          $("#zip").text(user.address.zipcode);

          $("#company").text(user.name);
        });
      } else {
        $("#article-details").hide();
        alert("incorrect credentials");
      }
    });
  });
});
