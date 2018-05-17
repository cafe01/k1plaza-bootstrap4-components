element
.add_class("btn btn-" + (params.color || 'primary'))
// .attr("color", "button")
.remove_attr("color")
.get(0).setNodeName('button') 

if (params.size) {
    element.add_class("btn-" + params.size)
           .remove_attr("size")
}