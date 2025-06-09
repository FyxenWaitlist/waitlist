(function(){
  emailjs.init("KGXl3zZYoiLiE3au8"); // Replace with your EmailJS user ID
})();

document.getElementById("waitlist-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.send("service_qs1q9bo", "template_nbht9ws", {
    user_name: this.user_name.value,
    user_email: this.user_email.value,
  }).then(() => {
    document.getElementById("confirmation").classList.remove("hidden");
    this.reset();
  }, (error) => {
    alert("Something went wrong. Try again.");
    console.log(error);
  });
});