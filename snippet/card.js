element
.add_class("card")
.get(0).setNodeName('div') 

// header
var header = element.xfind("./header")
if (header.size()) {
    header.add_class("card-header").get(0).setNodeName("div")
}

// footer
var footer = element.xfind("./footer")
if (footer.size()) {
    footer.add_class("card-footer").get(0).setNodeName("div")
}

// warn: card-body
if (element.find(".card-body").size() == 0) {
    console.warn('<x-card>: está faltando um elemento com a classe "card-body"')
}