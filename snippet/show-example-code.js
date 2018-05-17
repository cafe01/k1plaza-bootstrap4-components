var parent = element.parent(),
    htmlCode = parent.find(".example").as_html(),
    targetEl = parent.find("pre"),
    unindentSize = (params.unindent || 12),
    indentRe = new RegExp('\\n\[ \]\{' + unindentSize + '\}', "g")

//console.log(htmlCode)
htmlCode = htmlCode.replace(indentRe, "\n")

targetEl.text(htmlCode)