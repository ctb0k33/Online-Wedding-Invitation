$("#contactForm")
  .validator()
  .on("submit", async function (event) {
    event.preventDefault();
    await submitForm();
  });

async function submitForm() {
  // Initiate Variables With Form Content
  var name = $("#name").val();
  var message = $("#message").val();
  if (name != "" && message != "") {
    await fetch("https://online-wedding-invitation-be.onrender.com/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, comment: message }),
    }).then(function (response) {
      fetch("https://online-wedding-invitation-be.onrender.com/api/comments")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          data.forEach((comment) => {
            const markup = `<li style="text-align: left;background-color: #FDCEB6; margin-right:0px !important; border-radius: 15px; padding: 5px 5px 3px 5px">
            <p style="margin-left:15px; margin-bottom:0px !important ; font-weight: bold">${comment.name}</p>
            <p style="margin-left:15px; margin-bottom:0px !important ">${comment.comment}</p></li>`;
            const ul = document.getElementById("comment-section");
            ul.insertAdjacentHTML("afterbegin", markup);
          });
        });
    });
  }
  // try {

  //   if (response.ok) {
  //     const data = await response.json();
  //     alert("Comment posted successfully:", data);
  //   } else {
  //     const errorData = await response.json();
  //     alert("Failed to post comment:", errorData);
  //   }
  // } catch (error) {
  //   alert("Error:", error.message);
  //   // Handle error as needed
  // }
}

// function formSuccess() {
//   $("#contactForm")[0].reset();
//   submitMSG(true, "Message Submitted!");
// }

// function formError() {
//   $("#contactForm")
//     .removeClass()
//     .one(
//       "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
//       function () {
//         $(this).removeClass();
//       }
//     );
// }

// function submitMSG(valid, msg) {
//   if (valid) {
//     var msgClasses = "h3 text-center tada animated text-success";
//   } else {
//     var msgClasses = "h3 text-center text-danger";
//   }
//   $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
// }
