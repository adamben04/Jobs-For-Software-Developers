
let count;
try {
    count = localStorage.getItem("total");
} catch (error) {
    console.log(error);
    count = 0;
}
let indexOfJob = 0;
function generateJobElement(job, index) {
    // Create the elements for the job
    const jobElement = document.createElement('div');
//   const titleElement = document.createElement('h3');
    const titleElement = document.createElement('h3');
    const companyElement = document.createElement('p');
    const locationElement = document.createElement('p');
    const descriptionElement = document.createElement('p');
    const applyButton = document.createElement('a');

    //new lines 3/6 8:06am

    // const heartButton = document.createElement('button');
    // heartButton.style.backgroundImage = "url('images/heart-regular.svg')";
    // heartButton.className = "heart";
    // heartButton.style.cursor = "pointer";

    // heartButton.onclick = changeImage('solid');

    const heartImage = document.createElement('img');
        
  // Set the content and attributes of the elements
    titleElement.textContent = job.title;
    companyElement.textContent = job.company;
    locationElement.textContent = job.location;
    descriptionElement.textContent = job.description;
    applyButton.textContent = 'Apply Now';
    applyButton.href = job.apply_url;
    heartImage.src = "images/heart-regular.svg";
    heartImage.className = "heart";
    heartImage.id="heartIndex-"+(indexOfJob++);
  // Append the elements to the job element
    jobElement.appendChild(titleElement);
    jobElement.appendChild(companyElement);
    jobElement.appendChild(locationElement);
    jobElement.appendChild(descriptionElement);
    jobElement.appendChild(applyButton);
    //jobElement.appendChild(heartButton);
    jobElement.appendChild(heartImage);

  // Append the job element to the featured jobs container
    featuredJobsContainer.appendChild(jobElement);
      

    // console.log(heartImage.id);
    let total = localStorage.getItem("total");

    for(let i=0;i<total;i++){
        try {
            let parentInnerHTML = localStorage.getItem("job-"+i);
            console.log(parentInnerHTML);
            console.log(heartImage.id);
            if(parentInnerHTML.includes(heartImage.id)){
            heartImage.src = 'images/heart-solid.svg';
        }
        console.log(i);
        } catch (error) {
            console.log(error);
            break;
        }
        // console.log(parentInnerHTML);
        // console.log(heartImage.id);
        // if(parentInnerHTML.includes(heartImage.id)){
        //     heartImage.src = 'images/heart-solid.svg';
        // }
        // console.log(i);
    }

  // Add click event listener
  heartImage.addEventListener('click', function() {
    let parent = this.parentElement;
    console.log(parent);
    // let count = 0;
    localStorage.setItem("total",count);
    if (this.src.endsWith('heart-regular.svg')) {
      this.src = 'images/heart-solid.svg';
      localStorage.setItem("job-"+index, parent.innerHTML);
      count++;
      localStorage.setItem("total",count);
    } else {
      this.src = 'images/heart-regular.svg';
      localStorage.removeItem("job-"+index);
      count--;
      localStorage.setItem("total",count);
    }

  });
};
