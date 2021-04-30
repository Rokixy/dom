let div1 = dom.create("<div>newDiv</div>")
console.log(div1)

dom.after(div1, test)

let parent = dom.create('<div id="parent"></div>')
dom.wrap(parent, test2)

let nodes = dom.empty(window.empty)
console.log(nodes)


dom.attr(test, "title", "this is a title")
console.log(dom.attr(test, "title"))

dom.text(test, "this is new text")
console.log(dom.text(test))
dom.html(test, '<div id="inner"></div>')
console.log(dom.html(test))

dom.style(test2, { border: '1px solid red', color: 'red' })
console.log(dom.style(test2, 'border'))
dom.style(test2, 'border', '1px solid blue')


dom.class.add(test2, 'red')
dom.class.add(test2, 'blue')
dom.class.remove(test2, 'red')
console.log(dom.class.has(test2, 'red'))
console.log(dom.class.has(test2, 'blue'))


let click = () => { console.log('clicked') }
dom.on(test, 'click', click)
dom.on(test, 'click', click)

let found = dom.find('#test')[0]
console.log(found)
found = dom.find('#test2', parent)[0]
console.log(found)

console.log(dom.siblings(s2))
console.log(dom.next(s2))
console.log(dom.prev(s2))

let t = dom.find('#travel')[0]
dom.each(dom.children(t), (n) => dom.style(n, 'color', 'red'))

console.log(dom.index(s2))
