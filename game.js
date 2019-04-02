class Genrator {
    constructor() {
        this.div = createGenDiv()
        this.formDiv = createFormDiv()
    }
    createGenDivText() {
        genDivH3 = document.createElement("h3")
        genDivText = document.createTextNode("Generate your game")
        genDivH3.appendChild(genDivText)
        return genDivH3
    }
    createGenDiv() {
        genDiv = document.createElement("div")
        genDiv.id = "gen"
        genDiv.appendChild(createGenDivText())
        document.body.appendChild(genDiv)
        return genDiv
    }
    addFormInputAndLables() {

    }
    createForm() {
        form = document.createElement("form")
        form.id = "genForm"
        addFormInputAndLables(form)
        return genDiv
    }
    setFormDivStyle(formDiv) {
        formDiv.style.backgroundColor = "#f2f2f2"
        formDiv.style.width = "30%"
        formDiv.style.borderRadius = "5px"
        formDiv.style.padding = "20px"
    }
    createFormDiv() {
        formDiv = document.createElement("div")
        setFormDivStyle(formDiv)
        formDiv.id = "form"
        formDiv.appendChild(createForm())
        this.div.appendChild(formDiv)
        return formDiv
    }
    show() {
        this.div.style.display = "block"
    }
    hide() {
        this.div.style.display = "none"
    }
}
class Game {
    constructor() {

    }
}