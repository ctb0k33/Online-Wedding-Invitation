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
