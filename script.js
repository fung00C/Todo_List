const img_bgImg = document.querySelector("#img_bgImg");

const btn_dropdownMenu = document.querySelector("#btn_dropdownMenu");
const img_btnDBMenu = document.querySelector("#img_btnDBMenu");
const lbl_btnDBMenu = document.querySelector("#lbl_btnDBMenu");
const div_dropdownMenu = document.querySelector("#div_dropdownMenu");
const btn_dropdownItem1 = document.querySelector("#btn_dropdownItem1");
const btn_dropdownItem2 = document.querySelector("#btn_dropdownItem2");
const btn_dropdownItem3 = document.querySelector("#btn_dropdownItem3");

const btn_add = document.querySelector('#btn_add');
const ipt_task = document.querySelector('#ipt_task');
const div_list = document.querySelector("#div_list");

const input_area = document.querySelector(".input_area");
const btn_add2 = document.querySelector("#btn_add2");
const btn_close = document.querySelector("#btn_close");

let task = '';
let priority = '';

btn_dropdownMenu.addEventListener('click', () => {
    // When the user clicks on the button, toggle between hiding and showing the dropdown content
    div_dropdownMenu.classList.toggle("dropdownMenu_show");

    let computedStyle = window.getComputedStyle(div_dropdownMenu);
    // console.log("Computed display value:", computedStyle.display);
    if (computedStyle.display == "block") {
        img_btnDBMenu.src = './img/arrow_up.png';
    } else {
        img_btnDBMenu.src = './img/arrow_down.png';
    }
});

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.btn_dropdownMenu')) {
        img_btnDBMenu.src = './img/arrow_down.png';
        let div = document.getElementsByClassName("div_dropdownMenu");
        /* alert(div)
        alert(div_dropdownMenu) */
        for (let i = 0; i < div.length; i++) {
            if (div[i].classList.contains('dropdownMenu_show')) {
                div[i].classList.remove('dropdownMenu_show');
            }
        }
    }
}

btn_dropdownItem1.addEventListener('click', () => {
    priority = btn_dropdownItem1.textContent;
    lbl_btnDBMenu.textContent = priority;
});

btn_dropdownItem2.addEventListener('click', () => {
    priority = btn_dropdownItem2.textContent;
    lbl_btnDBMenu.textContent = priority;
});

btn_dropdownItem3.addEventListener('click', () => {
    priority = btn_dropdownItem3.textContent;
    lbl_btnDBMenu.textContent = priority;
});

btn_add2.addEventListener('click', () => {
    btn_add2.style.display = 'none';
    input_area.style.display = 'flex';
});

btn_close.addEventListener('click', () => {
    input_area.style.display = 'none';
    btn_add2.style.display = 'flex';
});

btn_add.addEventListener('click', () => {
    if(ipt_task.value !== '' && lbl_btnDBMenu.textContent !== 'Please Select') {
        const div_card = document.createElement('div');
        const div_content_left = document.createElement('div');
        const ipt_checkbox = document.createElement('input');
        const div_content_right = document.createElement('div');
        const div_up = document.createElement('div');
        const p_text = document.createElement('p');
        const hr = document.createElement('hr');
        const div_down = document.createElement('div');
        const div_tag = document.createElement('div');
        const lbl_tagName = document.createElement('label');
        
        div_card.classList.add('card');
        div_content_left.classList.add('content_left');
        ipt_checkbox.classList.add('checkbox');
        ipt_checkbox.type = 'checkbox';
        div_content_right.classList.add('content_right');
        //div_up.add('');
        p_text.classList.add('text');
        hr.classList.add('hr');
        //div_down.add('');
        div_tag.classList.add('tag');
        if(lbl_btnDBMenu.textContent === 'High') {
            div_tag.classList.add('tag-color1');
        } else if(lbl_btnDBMenu.textContent === 'Middle') {
            div_tag.classList.add('tag-color2');
        } else if(lbl_btnDBMenu.textContent === 'Low') {
            div_tag.classList.add('tag-color3');
        }
        lbl_tagName.classList.add('.tag_name');

        div_list.appendChild(div_card);
        div_card.appendChild(div_content_left);
        div_card.appendChild(div_content_right);
        div_content_left.appendChild(ipt_checkbox);
        div_content_right.appendChild(div_up);
        div_content_right.appendChild(hr);
        div_content_right.appendChild(div_down);
        div_up.appendChild(p_text);
        div_down.appendChild(div_tag);
        div_tag.appendChild(lbl_tagName);   

        task = ipt_task.value;
        p_text.innerHTML = task;
        ipt_task.value = '';
        lbl_tagName.innerHTML = priority;
        lbl_btnDBMenu.textContent = 'Please Select';
        priority = '';

        ipt_checkbox.addEventListener('click', () => {
            if(ipt_checkbox.checked === true) {
                p_text.style.textDecoration = 'line-through';
                setTimeout(() => {
                    div_card.remove()
                    div_content_left.remove()
                    ipt_checkbox.remove()
                    div_content_right.remove()
                    div_up.remove()
                    p_text.remove()
                    div_up.remove()
                    div_tag.remove()
                    lbl_tagName.remove()
                }, 2000);
            } else {
                alert('no');
            }
        });
    } else if(ipt_task.value === '' && lbl_btnDBMenu.textContent === 'Please Select') {
        alert('Task and priority cannot be empty!')
    } else if(ipt_task.value === '') {
        alert('Task cannot be empty!')
    } else if(lbl_btnDBMenu.textContent === 'Please Select') {
        alert('Priority cannot be empty!')
    }
});

const imgs_bgImg = document.querySelectorAll("#img_bgImg");

const tl = gsap.timeline({
     repeat: -1
});

const fadeInOption = {
    opacity: 1,
    duration: 5,
    ease: "ease-in"
};
const fadeOutOption = {
    opacity: 0,
    duration: 2,
    ease: "ease-out"
};

imgs_bgImg.forEach((image) => {
    // console.log(image)
    tl.to(image, fadeInOption, "-=0").to(image, fadeOutOption);
});

/* const wait = (ms) => new Promise((resolve) => {
    console.log(String(img_bgImg.src).includes('sky1.jpg'))
    for(let i = 0; i < 3; i++) {
        setTimeout(() => {
            resolve();
        }, ms)

    }
});
//let i =0
//while(i<3) { 

wait(1000)
    .then(() => {
    console.log('hi')
    if(String(img_bgImg.src).includes('sky1.jpg')) {
        img_bgImg.src = './img/sky2.jpg';
        console.log(String(img_bgImg.src).includes('sky1.jpg'))
    } else if(String(img_bgImg.src).includes('sky2.jpg')) {
        img_bgImg.src = './img/sky3.jpg';
        console.log(String(img_bgImg.src).includes('sky1.jpg'))
    } else if(String(img_bgImg.src).includes('sky3.jpg')) {
        img_bgImg.src = './img/sky1.jpg';
        console.log(String(img_bgImg.src).includes('sky1.jpg'))
    }
    return wait(1000)
    }) .catch();
//  i++
//} 
 */


