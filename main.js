const heading_username = document.querySelector("#username");
const submit_btn = document.querySelector(".sb-btn");
const input = document.querySelector(".gh-name");
const output = document.querySelector(".output");
heading_username.innerHTML = "ur gh-name";
submit_btn.addEventListener("click", async (e) => {
  heading_username.innerHTML = input.value;
  e.preventDefault();
  output.innerHTML = "";
  if (!input.value == "") {
    let username = input.value;
    let api_url = `https://api.github.com/users/${username}/repos`;
    const res = await fetch(api_url);
    const data = res.json();
    console.log(res);
    data.then((final) => {
      for (let i in final) {
        // repos
        let structure = `
        <div class="result">
          <span>${final[i].name}</span>
          <a href="${final[i].clone_url.slice(
            0,
            -4
          )}" class="btn btn-custom" target="_blank">visit</a>
        </div>
        `;
        // output.innerHTML = "";
        output.innerHTML += structure;
      }
      if (
        output.innerHTML == "" ||
        output.innerHTML == "Sorry Can't Find This GH-User"
      ) {
        output.innerHTML =
          "<h1 class='text-center text-white'>Sorry Can't Find This GH-User</h1>";
      }
    });
  } else {
    alert("you must fill out the input");
    heading_username.innerHTML = "ur gh-name";
  }
});
