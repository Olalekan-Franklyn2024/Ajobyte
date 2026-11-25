console.log("JS LOADED");

document.getElementById("form").addEventListener("submit", function(e) {
            e.preventDefault();

    const username = document.getElementById("first-name").value;
    const username2 = document.getElementById("last-name").value;
    


    localStorage.setItem("userName", username);
    localStorage.setItem("userName2", username2);

    window.location.href = "index2.html";

});




  