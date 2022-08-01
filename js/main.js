

let wrapper = document.querySelector('.wrapper-list');

document.querySelector('#bars-btn').onclick = () =>{
    wrapper.classList.toggle('active');
}

let searchForm = document.querySelector('.search-button');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}
