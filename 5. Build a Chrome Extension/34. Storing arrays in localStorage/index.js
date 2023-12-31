let myLeads = `["www.awesomelead.com"]`

// Turn the myLeads string into an array
myLeads = JSON.parse(myLeads)
// Push a new value to the array
myLeads.push("www.lead2.com")
// Turn the array into a string again
myLeads = JSON.stringify(myLeads)
// Console.log the string using typeof to verify that it's a string
console.log(typeof myLeads)
console.log(myLeads)

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}
