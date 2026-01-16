// https://www.dabipyeung.com/soaply_backend/model/get_products.php?qnt=4

async function getRequest(url) {
  return await fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error('Error: ' + response.status);
    }
    return response.json();
  });
}

// Get products Function
const swiperWrapper = document.querySelector('.swiper-Wrapper');
const offfersWrapper = document.querySelector('.products');

// const sliderDOM = `<div class="swiper-slide">
//                       <div class="slider-image">
//                     <img src="images/${pro_img}" alt="slider image">
//                 </div>
//                 <div class="slider-text">
//                   <h4>${pro_name}</h4>
//                   <p>${pro_desc}</p>
//                   <a href="#" class="common-button">자세히 보기</a>
//                 </div>
//               </div>
//       `;
async function getproducts(n, wrapper) {
  const getproductsUrl = `https://www.dabipyeung.com/soaply_backend/model/get_products.php?qnt=${n}`;

  try {
    //요청 시초
    const data = await getRequest(getproductsUrl);
    let dataElement = '';

    data.map((item) => {
      const { pro_img, pro_name, pro_desc } = item;
      console.log(pro_img);
      dataElement += `<div class="swiper-slide">
                      <div class="slider-image">
                    <img src="images/${pro_img}" alt="slider image">
                </div>
                <div class="slider-text">
                  <h4>${pro_name}</h4>
                  <p>${pro_desc}</p>
                  <a href="#" class="common-button">자세히 보기</a>
                </div>
              </div>
      `;
    });

    sliderWrapper.insertAdjacentHTML('beforeend', daraElement);
  } catch (error) {
    // 요청 시 에러 사항
    console.log(`Error: ${error}`);
  }
}

getproducts(4, sliderWrapper);
