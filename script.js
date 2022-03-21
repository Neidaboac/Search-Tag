const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const content = $('.content');
const input = $('.content input');
const removeAllBtn = $('.remove-all');

const tags = ['Nodejs', 'Reactjs']

// function render() {
//     content.innerHTML = '';

//     for (let i = 0; i < tags.length; i++) {
//         const tag = tags[i];

//         content.innerHTML += `
//         <li>
//             ${tag}
//             <i class="fas fa-times" onclick="removeTag(${i})"></i>
//         </li>  
//         `
//     }

//     content.appendChild(input)
//     input.focus()
// }

// render();

// function removeTag(index) {
//     tags.splice(index, 1)
//     render()
// }

// input.addEventListener('keydown', function (e) {
//     if (e.key === 'Enter') {
//         tags.push(input.value.trim())
//         render()
//         input.value = ''
//     }
// })

// removeAllBtn.addEventListener('click', function () {
//     tags.length = 0
//     render()
// })

function render() {
    content.innerHTML = ''

    tags.forEach(function (tag, i) {
        content.innerHTML += `
        <li>
            ${tag}
            <i class="fas fa-times" onclick="removeTag(${i})"></i>
        </li>
    `
    })

    content.appendChild(input)
    input.focus()

}

render()

function removeTag(i) {
    tags.splice(i, 1)
    render()
}


input.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {

        if (input.value.trim() != '' && !tags.includes(input.value.trim())) {
            tags.push(input.value.trim())
        }

        render()
        input.value = ''
    }
})


function removeAll() {
    tags.length = 0
    render()
}

removeAllBtn.addEventListener('click', removeAll)
