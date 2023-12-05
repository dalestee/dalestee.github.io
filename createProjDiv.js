function createExperienceDiv(company, role, date, description) {
    // Create the main div
    var experienceDiv = document.createElement("div");
    experienceDiv.className = "experience";
    experienceDiv.style.cursor = "pointer";
    experienceDiv.onclick = function() { window.location = 'https://twitter.com/namecteam' };
  
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
  
  // Use the function to create a new div and append it to the body
  var newDiv = createExperienceDiv("New Company", "New Role", "New Date", "New Description");
  var rightDiv = document.getElementById("right");
    rightDiv.appendChild(newDiv);