'use strict';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const todoControl = $('.todo-control');
const headerInput = $('.header-input');
const todoList = $('.todo-list');
const todoCompleted = $('.todo-completed');


function render() {
    todoList.innerHTML = ''
    todoCompleted.innerHTML = ''

    todoData.forEach((item) => {
        const li = document.createElement('li')
        li.classList.add('todo-item')

        li.innerHTML = '<span class="text-todo">'+ item.text + '</span>' +
            '<div class="todo-buttons">' +
            '<button class="todo-remove"></button>' + 
            '<button class="todo-complete"></button>' + 
            '</div>'

        if(item.completed) {
            todoCompleted.append(li);
        } else {
            todoList.append(li);
        }
        
        li.querySelector('.todo-complete').addEventListener('click', () => {
            item.completed = !item.completed
            localStorage.todoData = JSON.stringify(todoData)
            render()
        })

        li.querySelector('.todo-remove').addEventListener('click', () => {
            li.remove()
            todoData = todoData.filter((f) => {return f != item})
            localStorage.todoData = JSON.stringify(todoData)
        })
    })
}

todoControl.addEventListener('submit', (event) => {
    event.preventDefault()

    if (headerInput.value != '') {
        const newTodo = {
            text: headerInput.value,
            completed: false,
        }

        todoData.push(newTodo)
        localStorage.todoData = JSON.stringify(todoData)
        headerInput.value = ''

        render()
    }
})

if (!localStorage.todoData) localStorage.todoData = JSON.stringify([])

let todoData = JSON.parse(localStorage.todoData)
render()