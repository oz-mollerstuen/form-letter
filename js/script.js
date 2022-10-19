window.onload = function() {
    let form = document.querySelector("form");
    form.onsubmit = function(event) {
      const name1 = document.getElementById("name1").value;
      document.querySelector("span#name1a").innerText = name1;
      document.querySelector("span#name1b").innerText = name1;
      document.querySelector("div#letter").removeAttribute("class");
      event.preventDefault();
  };
};