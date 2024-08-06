
    const btn = document.querySelector('.btn');
    const resultNode = document.querySelector('.result');

    document.addEventListener("DOMContentLoaded", () => {
      storageItem = localStorage.getItem('lastRequest')
      if (storageItem) {
        displayResult(JSON.parse(storageItem));
      }
  });

    const useRequest = (value1, value2) => {
     return fetch( `https://jsonplaceholder.typicode.com/photos?_page=${value1}&_limit=${value2}`)
     .then((response) => {
      return response;
  })
  .then(data => {
      result = data.json();
      return result;
  })
  .catch(() => {
      console.log('error');
  });
    };

    function displayResult(apiData) {
      let cards = '';
     
      apiData.forEach(item => {
        const cardBlock = `
          <div class="card">
            <img
              src="${item.thumbnailUrl}"
              class="card-image"
            />
          </div>
        `;
        cards = cards + cardBlock;
      });
      
      resultNode.innerHTML = cards;
      resultNode.style.display = 'flex';
    }

    btn.addEventListener('click', async () => {
      const value1 = parseInt(document.querySelector('.input_NomberPage').value);
      const value2 = parseInt(document.querySelector('.input_Limit').value);
      if((value1 < 1 || value1 > 10) && (value2 < 1 || value2 > 10 )){
        alert("Номер страницы и лимит вне диапазона от 1 до 10");
      }
      else if(value1 < 1 || value1 > 10){
        alert("Номер страницы вне диапазона от 1 до 10");
      }
      else if(value2 < 1 || value2 > 10) {
        alert("Лимит вне диапазона от 1 до 10");
      }
      else{
        const request = await useRequest(value1, value2);
        localStorage.setItem('lastRequest', JSON.stringify(request));
        displayResult(request);
      }
    } )
  