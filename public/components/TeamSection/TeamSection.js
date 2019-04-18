'use strict'

let srCounter = 0;
/**
 * Data
 */

const data = [
  {name: "Audrey Akwenye", email: "pending@gmail.com", github: "https://github.com/", role: "Team Leader", profile_pic: "https://ca.slack-edge.com/T4JUEB3ME-UDRCZPDV5-4830c84686b2-512", bio: "", linkedin:"", twitter:""},
  {name: "Andy Bettisworth", email: "andy@accreu.com", github: "https://github.com/wurde", role: "User Interface", profile_pic: "https://ca.slack-edge.com/T4JUEB3ME-UGBNBF0SV-56a86324406c-512", bio: "Space cowboy from Texas that is either writing code or training for a triathlon.", linkedin:"", twitter:""},
  {name: "Alex E.", email: "pending@gmail.com", github: "https://github.com/AlexEntrepreneur", role: "Backend Engineer", profile_pic: "https://ca.slack-edge.com/T4JUEB3ME-UEB79VDNH-1bbd05b917e5-512", bio: "London-based Designer & Entrepreneur working towards becoming a Backend Developer. WEBEU1 & PM @ WEBEU2.", linkedin:"", twitter:"https://twitter.com/alexentrprnr"},
  {name: "Christian Ipanaque", email: "pending@gmail.com", github: "https://github.com/", role: "Frontend Engineer", profile_pic: "https://ca.slack-edge.com/T4JUEB3ME-UFASBQXD1-efc24de6b083-512", bio: "Rackmount Server Technician, to AWS Cloud Specialist, to Software Engineer that delivers strong and sustainable gains in performance and productivity. Dedicated to maintaining a reputation built on quality, service and a hard worker ethic.", linkedin:"", twitter:""},
  {name: "Chris Schröder", email: "os.schroeder@gmail.com", github: "https://github.com/", role: "Data Science", profile_pic: "https://ca.slack-edge.com/T4JUEB3ME-U7574CYP3-5058d2c91a5f-512", bio: "Lambda School Data Scientist that believes strongly in applying the Socratic method liberally and reflexively.  My interests include complex (non-linear) systems, paradox, and Data Science, the last being a vehicle for understanding the former.", linkedin:"", twitter:""},
  {name: "Donaldo Celaj", email: "Donaldocelaj@gmail.com", github: "https://github.com/donaldocelaj", role: "Data Science", profile_pic: "https://ca.slack-edge.com/T4JUEB3ME-UEPMEPR96-0b50fda3dd85-512", bio: "Studied at Michigan State University, worked as an advertising and web development contractor. Interested in future technological developments, psychology, and philosophy.", linkedin:"", twitter:""},
  {name: "Ming Liu", email: "ming@brooksidemediaco.com", github: "https://github.com/skysthelimit68", role: "User Interface", profile_pic: "https://ca.slack-edge.com/T4JUEB3ME-UFH4T28HX-64713d6bec86-512", bio: "A self-motivated developer who is passionate about developing applications that solve user problems and learning new technologies. Currently enrolled in Lambda School Full Stack WEB19.", linkedin:"", twitter:""},
  {name: "Olympia Wojcik", email: "owojcik7@gmail.com", github: "https://github.com/olympiawoj", role: "Backend Engineer", profile_pic: "https://ca.slack-edge.com/T4JUEB3ME-UEWMPRCBE-a9bb15b05e99-512", bio: "Olympia is a finance professional turned software developer. She has just completed 15 weeks of full-stack WEB17 as a student and is excited to be joining WEB20 as Section Lead.", linkedin:"https://www.linkedin.com/in/olympiawoj/", twitter:""},
]

const colorSet = [["Team Leader","bg-chathams-blue"], ["User Interface", "bg-matisse"], ["Backend Engineer", "bg-jewel"], ["Frontend Engineer", "bg-eucalyptus"], ["Data Science", "bg-green-pea"]];
const colorMap = new Map (colorSet);
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
    this.setupCard();
  }

  setEventListeners(block,content,faceCard) {

    block.addEventListener("mouseover", () => {
      content.classList.add("active-card")
      faceCard.classList.add("hide-face-card")
    })
    block.addEventListener("mouseleave", () => {
      content.classList.remove("active-card")
      faceCard.classList.remove("hide-face-card")
    })
  }

  setupCard() {
    let col = document.createElement("div")
    col.setAttribute("class",`col-12 col-md-6 col-lg-4 p-1 bottomUp-${srCounter > 5? srCounter % 5 - 1: srCounter}`)
    srCounter++;
    this.row.appendChild(col)

    let cardBlock= document.createElement("div")
    cardBlock.setAttribute("class", "m-3 border teamCard-block")
    col.appendChild(cardBlock)

    let faceCard = document.createElement("div")
    faceCard.setAttribute("class", "teamCard-faceCard")
    cardBlock.appendChild(faceCard)

    let img = document.createElement("img")
    img.setAttribute("src", this.data.profile_pic)
    img.style.width = "100%"
    faceCard.appendChild(img)

    let h3 = document.createElement("h3")
    h3.setAttribute("class", "m-3 text-center")
    h3.textContent = this.data.name
    faceCard.appendChild(h3)

    let p = document.createElement("p")
    p.setAttribute("class","m-3 text-center")
    p.textContent = this.data.role
    faceCard.appendChild(p)

    let facecardIcons = document.createElement("div")
    facecardIcons.setAttribute("class", "faceCard-icons")
    this.setupIcons(facecardIcons)
    faceCard.appendChild(facecardIcons)

    let contentCard = document.createElement("div")
    contentCard.setAttribute("class","teamCard-content")
    cardBlock.appendChild(contentCard);

    let contentHeader = document.createElement("div")
    contentHeader.setAttribute("class", `block-content-header ${colorMap.get(this.data.role)}`)
    let h4 = document.createElement("h4")
    h4.textContent = this.data.name
    contentHeader.appendChild(h4)
    contentCard.appendChild(contentHeader)

    let content = document.createElement("p")
    content.setAttribute("class", "block-content-body")
    content.textContent = this.data.bio
    contentCard.appendChild(content)

    let icons = document.createElement("div")
    icons.setAttribute("class", "block-content-icons")
    contentCard.appendChild(icons)

    this.setupIcons(icons);
    this.setEventListeners(cardBlock, contentCard, faceCard);
  }


  setupIcons(iconWrapper) {
    let a_email = document.createElement("a")
    a_email.setAttribute("href", `mailto:${this.data.email}`)

    let i_email = document.createElement("i")
    i_email.setAttribute("class","m-3 far fa-envelope-open")
    a_email.appendChild(i_email)
    iconWrapper.appendChild(a_email)

    let a_github = document.createElement("a")
    a_github.setAttribute("href", this.data.github)
    a_github.setAttribute("target","_blank")

    let i_github = document.createElement("i")
    i_github.setAttribute("class", "m-3 fab fa-github")
    a_github.appendChild(i_github)
    iconWrapper.appendChild(a_github)

    if (this.data.linkedin != "") {
      let a_linkedin = document.createElement("a")
      a_linkedin.setAttribute("href", this.data.linkedin)
      a_linkedin.setAttribute("target","_blank")

      let i_linkedin = document.createElement("i")
      i_linkedin.setAttribute("class", "m-3 fab fa-linkedin")
      a_linkedin.appendChild(i_linkedin)
      iconWrapper.appendChild(a_linkedin)
    }

    if (this.data.twitter != "") {
      let a_twitter = document.createElement("a")
      a_twitter.setAttribute("href", this.data.twitter)
      a_twitter.setAttribute("target","_blank")

      let i_twitter = document.createElement("i")
      i_twitter.setAttribute("class", "m-3 fab fa-twitter")
      a_twitter.appendChild(i_twitter)
      iconWrapper.appendChild(a_twitter)
    }
  }
}

/**
 * Mount components
 */

let team_section = new TeamSection(document.getElementById("team-section"));
