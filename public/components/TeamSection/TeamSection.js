'use strict'

/**
 * Data
 */

const data = [
  {name: "Audrey Akwenye", email: "pending@gmail.com", github: "https://github.com/", role: "Team Leader", profile_pic: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1595&q=80"},
  {name: "Andy Bettisworth", email: "andy@accreu.com", github: "https://github.com/wurde", role: "UI", profile_pic: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1595&q=80"},
  {name: "Alex", email: "pending@gmail.com", github: "https://github.com/AlexEntrepreneur", role: "Backend", profile_pic: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1595&q=80"},
  {name: "Christian Ipanaque", email: "pending@gmail.com", github: "https://github.com/", role: "Frontend", profile_pic: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1595&q=80"},
  {name: "Chris Schröder", email: "os.schroeder@gmail.com", github: "https://github.com/", role: "DS", profile_pic: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1595&q=80"},
  {name: "Donaldo Celaj", email: "Donaldocelaj@gmail.com", github: "https://github.com/donaldocelaj", role: "DS", profile_pic: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1595&q=80"},
  {name: "Ming Liu", email: "ming@brooksidemediaco.com", github: "https://github.com/skysthelimit68", role: "UI", profile_pic: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1595&q=80"},
  {name: "Olympia Wojcik", email: "owojcik7@gmail.com", github: "https://github.com/olympiawoj", role: "Backend", profile_pic: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1595&q=80"},
  {name: "Sammy Lee", email: "gygantor@protonmail.com", github: "https://github.com/", role: "DS", profile_pic: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1595&q=80"},
]

/**
 * Define components
 */

class TeamSection {
  constructor(element) {
    this.element = element

    let container = document.createElement("div")
    container.classList.add("container")
    let row = document.createElement("div")
    row.classList.add("row")
    container.appendChild(row)
    this.element.appendChild(container)

    this.team_cards = data.map(x => {
      new TeamCard(x, row)
    })
  }
}

class TeamCard {
  constructor(data, row) {
    this.data = data
    this.row = row

    let col = document.createElement("div")
    col.classList.add("col-4")
    col.classList.add("p-1")
    this.row.appendChild(col)

    let card = document.createElement("div")
    card.classList.add("m-3")
    card.classList.add("border")
    col.appendChild(card)

    let img = document.createElement("img")
    img.setAttribute("src", this.data.profile_pic)
    img.style.width = "100%"
    card.appendChild(img)

    let h2 = document.createElement("h2")
    h2.classList.add("m-3")
    h2.classList.add("text-center")
    h2.textContent = this.data.name
    card.appendChild(h2)

    let h3 = document.createElement("h3")
    h3.classList.add("m-3")
    h3.classList.add("text-center")
    h3.textContent = this.data.role
    card.appendChild(h3)

    let a_email = document.createElement("a")
    a_email.setAttribute("href", `mailto:${this.data.email}`)

    let i_email = document.createElement("i")
    i_email.classList.add("m-3")
    i_email.classList.add("far")
    i_email.classList.add("fa-envelope-open")
    a_email.appendChild(i_email)
    card.appendChild(a_email)

    let a_github = document.createElement("a")
    a_github.setAttribute("href", this.data.github)

    let i_github = document.createElement("i")
    i_github.classList.add("m-3")
    i_github.classList.add("fab")
    i_github.classList.add("fa-github")
    a_github.appendChild(i_github)
    card.appendChild(a_github)
  }
}

/**
 * Mount components
 */

let team_section = new TeamSection(document.getElementById("team-section"));