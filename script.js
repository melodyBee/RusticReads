const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()
})

// Your poetry "database" — just add a new object here to publish a new poem
// const poetryData = [
//     {
//         id: 'haunted-memories',
//         title: 'Haunted Memories',
//         preview: `changed my style,<br />
//                   changed my body,<br />
//                   changed my smile,<br />
//                   Always in a disguise,<br />
//                   trying to tell you somehow,<br />
//                   your daughter isn't who she says,<br />
//                   you should help her out.<br />`,
//         full: `I have changed my appearance,<br />
//                changed my style,<br />
//                ... (full poem here) ...`,
//         lastUpdated: 'April 2, 2023',
//     },
//     {
//         id: 'falling-leafs',
//         title: 'Dreams of falling leafs',
//         preview: `The autumn leaves fall one by one, <br />
//                    their colors fading in the sun. <br />
//                    They speak of summers full of light, <br />
//                    of stars that brightened every night. <br />
//                    Of laughter shared, of dreams. <br />`,
//         full: `The autumn leaves fall one by one, <br />
//                ... (full poem here) ...`,
//         lastUpdated: 'September 14, 2025',
//     },
//     // add more poems here, IDs auto-generate, no duplicate modal bugs ever again
// ]

// function renderCards(data) {
//     const container = document.getElementById('cardsContainer')
//     container.innerHTML = data
//         .map(
//             (item) => `
//         <div class="card poetryCard col-12 col-md-4 mx-3" style="width: 18rem">
//             <div class="card-body">
//                 <h5 class="card-title">${item.title}</h5>
//                 <p class="card-text">${item.preview}</p>
//                 <p class="card-text">
//                     <small class="text-body-secondary">Last updated: ${item.lastUpdated}</small>
//                 </p>
//                 <button
//                     type="button"
//                     class="btn btn-outline-dark"
//                     data-bs-toggle="modal"
//                     data-bs-target="#modal-${item.id}"
//                 >
//                     View full
//                 </button>
//             </div>
//         </div>

//         <div class="modal fade" id="modal-${item.id}" tabindex="-1" aria-labelledby="label-${item.id}" aria-hidden="true">
//             <div class="modal-dialog">
//                 <div class="modal-content">
//                     <div class="modal-header">
//                         <h1 class="modal-title fs-5" id="label-${item.id}">${item.title}</h1>
//                         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                     </div>
//                     <div class="modal-body">
//                         <p>${item.full}</p>
//                         <small>Last Updated: ${item.lastUpdated}</small>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     `
//         )
//         .join('')
// }

// renderCards(poetryData)
