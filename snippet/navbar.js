
let color = params.color || "primary",
    expand = params.expand || "lg",
    type = params.type;

if (!type) {

    type = color.match(/white|light|warning/)
        ? "light" 
        : "dark"
}

element
.add_class("navbar")
.add_class("navbar-expand-" + expand)
.add_class("navbar-" + type)
.add_class("bg-" + color)
.remove_attr("bg")
.remove_attr("type")
.remove_attr("expand")
.get(0).setNodeName('nav') 