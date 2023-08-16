document.addEventListener("DOMContentLoaded", function() {
    const changeButton = document.getElementById("changeButton");
    const textInput = document.getElementById("textInput");

    changeButton.addEventListener("click", function() {
        const newText = textInput.value;
        changeButton.textContent = newText;
    });
});




document.addEventListener("DOMContentLoaded", function() {
    const image = document.getElementById("image");
    const changeImageButton = document.getElementById("changeImageButton");

    changeImageButton.addEventListener("click", function() {
        image.src = "https://seeklogo.com/images/K/kfc-new-logo-72E6348046-seeklogo.com.png";
        image.alt = "картинка 2";
    });
});




document.addEventListener("DOMContentLoaded", function() {
    const link = document.getElementById("link");
    const image = document.getElementById("imagelink");
    const changeButton = document.getElementById("changeBtn");

    changeBtn.addEventListener("click", function() {
        link.href = "https://www.youtube.com/";
        imageLink.alt = "картинка";
    });
});





document.addEventListener("DOMContentLoaded", function() {
    const itemList = document.getElementById("itemList");
    const changeFirst = document.getElementById("changeFirst");
    const audio = new Audio("./audio/music.mp3");

    changeFirst.addEventListener("click", function() {
        const firstItem = itemList.querySelector("li:first-child");
        firstItem.textContent = "Как же я устал врать всем, что я в порядке 😞";

        if (audio.paused) {
            audio.play();
            changeFirst.textContent = "Зупинити музику";
        } else {
            audio.pause();
            changeFirst.textContent = "Змінити перший рядок";
        }
    });
});

