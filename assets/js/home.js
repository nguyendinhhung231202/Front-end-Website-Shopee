// onclick="timKiem()" id="header__navbar-iten-Incomplete  --> chức năn chưa hoàn thiện "
var Incomplete = document.getElementById('header__navbar-iten-Incomplete')
Incomplete.addEventListener('click', function () {
    alert('chức năng đang hoàn thiện !')
})

// đóng mở đăng ký 



const modalOpen = document.querySelector('.js-modal-open')

const register = document.querySelector('.js-register')

const btnClose = document.querySelector('.js-btn-close')

const model__body = document.querySelector('.js-model__body')


function register_open ()  {
    modalOpen.classList.add('open')
}

function register_close ()  {
    modalOpen.classList.remove('open')
}

register.addEventListener('click',register_open)

btnClose.addEventListener('click',register_close)


modalOpen.addEventListener('click',register_close)

model__body.addEventListener('click',function (event) {
    event.stopPropagation()
})




const like_primary = document.querySelector('.js-home-product-item__like')
const like = document.querySelector('.home-product-item__like')
const like_2 = document.querySelector('.home-product-item__like--liked')

function like_primary_open () {
    like_primary.classList.add('home-product-item__like--liked')
}

like.addEventListener('click', like_primary_open)


function like_primary_remove () {
    like_primary.classList.remove('home-product-item__like--liked ')
    
}

like_2.addEventListener('click', like_primary_remove)



/* start toast */

// toast function


function toast( {
    title = '',
    message = '',
    type = 'info',
    duration = 1000
}) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');
        const autoRemoveId = setTimeout(function() {  //đóng song khoảng thời gian duration cộng với 1000 animation fadeOut
            main.removeChild(toast)
        },duration + 1000);

        toast.onclick = function(e) {
            if (e.target.closest('.toast__close')){
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        }

        const icons = {
            success: 'fas fa-check-circle',
            info: 'fas fa-info-circle',
            warning: 'fas fa-exclamation-triangle',
            error: 'fas fa-times',
        };
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);  // chánh số thập phân dung toFixed(2) "lấy ra hai số thập phân thôi"
        toast.classList.add("toast", `toast--${type}`);
        toast.style.animation = `slideInleft ease 0.3s, fadeOut linear 1s  ${delay}s forwards`;
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fas fa-times"></i>
            </div>
        `;
        main.appendChild(toast) //mở 

        
    }
} 




function showSuccessToast(){
    toast({
        title: 'Success',
        message: 'chúc mừng bạn đã đăng ký thành công 😊',
        type: 'success',    // kiểu quết định "class"
        duration: 6000   // khoảng thời gian ẩn duration: 1000  mi li s = 1s
    })

}

function showErrorToast(){
    toast({
        title: 'Error',
        message: 'Có lỗi sảy ra! Đăng nhập thất bại 🤔🤷‍♂️',
        type: 'error',    
        duration: 6000   
    })

}

function warning(){
    toast({
        title: 'Thông báo',
        message: 'Chức năng chưa hoàn thiện😪',
        type: 'warning',    
        duration: 6000   
    })

}
function info(){
    toast({
        title: 'Thông báo',
        message: 'Bạn muốn mua hàng ?, vui lòng liên hệ linh chipubi 😎',
        type: 'info',    
        duration: 6000   
    })

}

/* end toast */

// 'toast'

// chúc mừng bạn đã đăng ký thành công 

// setInterval(function() {
//     alert('thông báo' + Math.random())
// }, 3000)


