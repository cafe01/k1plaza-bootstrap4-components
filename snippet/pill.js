element
.add_class("badge badge-pill badge-" + params.color || 'primary')
.remove_attr("color")
.get(0).setNodeName('div') 