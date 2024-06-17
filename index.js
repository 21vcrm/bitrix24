let gb_enterprice_bitrix24 = document.querySelector(".gb-enterprice-bitrix24"),
    price_enterprice_bitrix24 = document.querySelector(".price-enterprice-bitrix24"),
    users_250_bitrix24 = document.querySelector(".users-250-bitrix24"),
    users_500_bitrix24 = document.querySelector(".users-500-bitrix24"),
    users_1000_bitrix24 = document.querySelector(".users-1000-bitrix24"),
    users_2000_bitrix24 = document.querySelector(".users-2000-bitrix24"),
    users_3000_bitrix24 = document.querySelector('.users-3000-bitrix24'),
    users_4000_bitrix24 = document.querySelector(".users-4000-bitrix24"),
    users_5000_bitrix24 = document.querySelector(".users-5000-bitrix24"),
    users_6000_bitrix24 = document.querySelector(".users-6000-bitrix24"),
    users_7000_bitrix24 = document.querySelector(".users-7000-bitrix24"), 
    users_8000_bitrix24 = document.querySelector(".users-8000-bitrix24"),
    users_9000_bitrix24 = document.querySelector(".users-9000-bitrix24"),
    users_10000_bitrix24 = document.querySelector(".users-10000-bitrix24"),
    users_content_bitrix24 = document.querySelector(".users-content-bitrix24"),
    users_enterprice_bitrix24 = document.querySelector(".users-enterprice-bitrix24"),
    free_btn_conteiner_bitrix24 = document.querySelector(".free-btn-conteiner-bitrix24"),
    enterprice_btn_conteiner_bitrix24 = document.querySelector(".enterprice-btn-conteiner-bitrix24"),
    conteiner_name_main_tarif_bitrix24 = document.querySelector(".conteiner-name-main-tarif-bitrix24"),
    free_bitrix24 = document.querySelector(".free-bitrix24"),
    enterprice_bitrix24 = document.querySelector(".enterprice-bitrix24")

free_btn_conteiner_bitrix24.addEventListener("click", function() {
    conteiner_name_main_tarif_bitrix24.style.marginLeft = '990px'
    free_btn_conteiner_bitrix24.style.display = 'none'
    enterprice_btn_conteiner_bitrix24.style.display = 'block'
    free_bitrix24.style.visibility = 'visible'
    enterprice_bitrix24.style.visibility = 'hidden'
    conteiner_name_main_tarif_bitrix24.style.transitionTimingFunction = 'linear'
})
    
enterprice_btn_conteiner_bitrix24.addEventListener("click", function() {
    conteiner_name_main_tarif_bitrix24.style.marginRight = '670px'
    free_btn_conteiner_bitrix24.style.display = 'block'
    enterprice_btn_conteiner_bitrix24.style.display = 'none'
    free_bitrix24.style.visibility = 'hidden'
    enterprice_bitrix24.style.visibility = 'visible'
    conteiner_name_main_tarif_bitrix24.style.transitionTimingFunction = 'linear'
})

users_enterprice_bitrix24.addEventListener("click", function() {
    users_content_bitrix24.style.display = 'block'
    users_enterprice_bitrix24.style.backgroundColor = 'white'
    users_enterprice_bitrix24.style.border = 'none'
})