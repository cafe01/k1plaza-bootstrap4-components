element.add_class("alert alert-" + params.color || 'primary')
       .attr("role", "alert")
       .remove_attr("color")

element.get(0).setNodeName('div') 