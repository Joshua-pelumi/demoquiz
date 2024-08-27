//  getting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");


//if start QUiz Button Clicked
start_btn.onclick = () => {
    info_box.classList.add("activeInfo"); //show info box
}

//if exit QUiz Button Clicked
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); // hide info box
}

//if exit QUiz Button Clicked
continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); // show quiz box
}

