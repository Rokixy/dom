window.dom = {

    create(htmlStr) {
        let template = document.createElement('template')
        template.innerHTML = htmlStr.trim()

        return template.content.firstChild
    },
    after(node, target) {
        target.parentNode.insertBefore(node, target.nextSibling)
    },
    before(node, target) {
        target.parentNode.insertBefore(node, target)
    },
    append(node, target) {
        target.appendChild(node)
    },
    wrap(node, target) {
        dom.before(node, target)
        dom.append(target, node)
    },
    remove(node) {
        node.parentNode.removeChild(node)
        return node
    },
    empty(node) {
        const { childNodes } = node
        const array = []
        let first = node.firstChild
        while (first) {
            array.push(dom.remove(first))
            first = node.firstChild
        }
        return array
    },
    attr(node, name, value) {
        if (arguments.length === 3) {
            node.setAttribute(name, value)
        } else if (arguments.length === 2) {
            return node.getAttribute(name)
        }
    },
    text(node, text) {
        if (arguments.length === 2) {
            if ('innerText' in node) {
                node.innerText = text
            } else {
                node.textContent = text
            }
        } else if (arguments.length === 1) {
            if ('innerText' in node) {
                return node.innerText
            } else {
                return node.textContent
            }
        }
    },
    html(node, html) {
        if (arguments.length === 2) {
            node.innerHTML = html
        } else if (arguments.length === 1) {
            return node.innerHTML
        }
    },
    style(node, name, value) {
        if (arguments.length === 3) {
            node.style[name] = value
        } else if (arguments.length === 2) {
            if (name instanceof Object) {
                for (let key in name) {
                    node.style[key] = name[key]
                }
            } else if (typeof name === 'string') {
                return node.style[name]
            }
        }

    },
    class: {
        add(node, className) {
            node.classList.add(className)
        },
        remove(node, className) {
            node.classList.remove(className)
        },
        has(node, className) {
            return node.classList.contains(className)
        }
    },
    on(node, eventName, fn) {
        node.addEventListener(eventName, fn)
    },
    off(node, eventName, fn) {
        node.removeEventListener(eventName, fn)
    },
    find(selector, node) {
        return (node || document).querySelectorAll(selector)
    },
    parent(node) {
        return node.parentNode
    },
    children(node) {
        return node.children
    },
    siblings(node) {
        return Array.from(node.parentNode.childNodes).filter(n => n !== node)
    },
    next(node) {
        let nextNode = node.nextSibling
        while (nextNode.nodeType === 3) {
            nextNode = nextNode.nextSibling
        }
        return nextNode
    },
    prev(node) {
        let prevNode = node.previousSibling
        while (prevNode.nodeType === 3) {
            prevNode = prevNode.previousSibling
        }
        return prevNode
    },
    each(nodes, fn) {
        for (let i = 0; i < nodes.length; i++) {
            fn(nodes[i])
        }
    },
    index(node) {
        let list = dom.children(node.parentNode)
        let i
        for (i = 0; i < list.length; i++) {
            if (list[i] === node) {
                break
            }
        }
        return i
    }
};
