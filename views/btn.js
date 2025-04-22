const btn = document.querySelector(".generate-data");
const divGenerated = document.querySelector(".generated-data");

btn.addEventListener("click", async () => {
    console.log("Button Clicked");
    try {
        let response = await fetch("/generate");
        let data = await response.json(); 
        divGenerated.innerHTML = data.map(emp => `
            <div class="employee-card">
                <ul><strong>Name:</strong> ${emp.Name}</ul>
                <ul><strong>Salary:</strong> ${emp.Salary.toLocaleString()} INR</ul>
                <ul><strong>Language:</strong> ${emp.Language}</ul>
                <ul><strong>City:</strong> ${emp.City}</ul>
                <ul><strong>Manager:</strong> ${emp.isManager ? "Yes" : "No"}</ul>
                <br>
                <hr>
            </div>
        `).join(""); 
    } catch (error) {
        console.error("Error fetching data:", error);
        divGenerated.innerHTML = `<p style="color:red;">Error fetching data!</p>`;
    }
});
