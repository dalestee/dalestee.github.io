function readJson() {
  fetch("content.json")
    .then(response => response.text())
    .then(data => {
      var obj = JSON.parse(data);
      var experiences = obj.experiences;
      for (var i = 0; i < experiences.length; i++) {
        var experience = experiences[i];
        var company = experience.company;
        var role = experience.role;
        var date = experience.date;
        var description = experience.description;
        var link = experience.link;
        var newDiv = createExperienceDiv(company, role, date, description, link);
        var rightDiv = document.getElementById("experiences");
        rightDiv.appendChild(newDiv);
      }
      for (var i = 0; i < obj.projects.length; i++) {
        var project = obj.projects[i];
        var name = project.name;
        var description = project.description;
        var image = project.image;
        var link = project.link;
        var parent = project.parent;
        var skills = project.skills;
        var newDiv = createProjectDiv(name, description, image, link, skills);
        var rightDiv = document.getElementById(parent);
        rightDiv.appendChild(newDiv);
      }
    });
}


function createExperienceDiv(company, role, date, description, link) {
  // Create the main div
  var experienceDiv = document.createElement("div");
  experienceDiv.className = "experience";
  experienceDiv.style.cursor = "pointer";
  experienceDiv.onclick = function () { window.location = link; };

  // Create the description div
  var descriptionDiv = document.createElement("div");
  descriptionDiv.className = "description";

  // Create and append the h4, h5, and h6 elements
  var h4 = document.createElement("h4");
  h4.textContent = company;
  descriptionDiv.appendChild(h4);

  var h5 = document.createElement("h5");
  h5.textContent = role;
  descriptionDiv.appendChild(h5);

  var h6 = document.createElement("h6");
  h6.textContent = date;
  descriptionDiv.appendChild(h6);

  // Append the description div to the main div
  experienceDiv.appendChild(descriptionDiv);

  // Create the proj div
  var projDiv = document.createElement("div");
  projDiv.className = "proj";

  // Create and append the p element
  var p = document.createElement("p");
  p.textContent = description;
  projDiv.appendChild(p);



  // Append the proj div to the main div
  experienceDiv.appendChild(projDiv);

  // Return the main div
  return experienceDiv;
}

function createProjectDiv(name, description, image, link, skills) {
  // Create the main div
  var experienceDiv = document.createElement("div");
  experienceDiv.className = "experience flex flex-col justify-around items-center";
  experienceDiv.style.cursor = "pointer";
  experienceDiv.onclick = function () { window.location = link; };

  // Create the description div
  var descriptionDiv = document.createElement("div");
  descriptionDiv.className = "description text-center";

  // Create and append the h4 element for the project name
  var h4 = document.createElement("h4");
  h4.textContent = name;
  descriptionDiv.appendChild(h4);

  // Create the proj div
  var projDiv = document.createElement("div");
  projDiv.className = "proj flex justify-center items-center"; // Center both horizontally and vertically
  
  var imageb = document.createElement("img");
  imageb.className = "preview object-cover object-cover h-auto mx-auto"; // Center horizontally
  imageb.src = image;
  projDiv.appendChild(imageb);

  // Append the description div to the main div
  experienceDiv.appendChild(descriptionDiv);

  // Create and append the p element for the project description
  var p = document.createElement("p");
  p.textContent = description;
  descriptionDiv.appendChild(p);

  // Create and append the h4 element for skills
  var skillsHeader = document.createElement("h4");
  skillsHeader.textContent = "Skills";
  descriptionDiv.appendChild(skillsHeader);

  // Create and append the ul element for skills
  var ul = document.createElement("ul");
  ul.className = "text-left";
  skills.forEach(skill => {
    var li = document.createElement("li");
    li.textContent = skill;
    ul.appendChild(li);
  });
  descriptionDiv.appendChild(ul);

  // Append the proj div to the main div
  experienceDiv.appendChild(projDiv);

  // Return the main div
  return experienceDiv;
}

// Use the function to create a new div and append it to the body
readJson();

document.querySelector('.link').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('#experiences').scrollIntoView({ behavior: 'smooth' });
});
