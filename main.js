var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";
})


document.getElementById("feedback-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    alert("Thank you for your feedback! Your feedback has been submitted.");
    this.reset();
});