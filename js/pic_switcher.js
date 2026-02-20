function setHeaderImage() {
  const headerImage = document.getElementById("headerImage");
  const currentHour = new Date().getHours();

    headerImage.src = "assets/pexels-soumenmaity-634770_top.jpg"; // Replace with your morning image path
}

// Call the function when the page loads
window.onload = setHeaderImage;
