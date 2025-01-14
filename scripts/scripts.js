// Array of courses
const courses = [
    { name: "CSE 110", type: "CSE", credits: 3 },
    { name: "CSE 210", type: "CSE", credits: 4 },
    { name: "CSE 111", type: "CSE", credits: 2 },
    { name: "WDD 231", type: "WDD", credits: 3 },
    { name: "WDD 131", type: "WDD", credits: 2 }
];

// DOM Elements
const courseList = document.getElementById("courseList");
const certificateList = document.getElementById("certificateList");
const totalCreditsElem = document.getElementById("totalCredits");

// Display Courses
function displayCourses(filter = "All") {
    courseList.innerHTML = "";
    certificateList.innerHTML = "";
    let totalCredits = 0;

    courses.forEach(course => {
        if (filter === "All" || course.type === filter) {
            const li = document.createElement("li");
            li.textContent = course.name;
            courseList.appendChild(li);

            const button = document.createElement("button");
            button.textContent = `${course.name} (${course.credits} credits)`;
            certificateList.appendChild(button);

            totalCredits += course.credits;
        }
    });

    totalCreditsElem.textContent = totalCredits;
}

// Event Listeners for Filter Buttons
document.getElementById("filter-all").addEventListener("click", () => displayCourses("All"));
document.getElementById("filter-cse").addEventListener("click", () => displayCourses("CSE"));
document.getElementById("filter-wdd").addEventListener("click", () => displayCourses("WDD"));

// Responsive Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const navbarList = document.querySelector(".navbar ul");
menuToggle.addEventListener("click", () => {
    navbarList.classList.toggle("active");
});

// Footer: Update year and last modified date
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Initial Course Display
displayCourses();
