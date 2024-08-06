
  window.onload=function(){

    function useRequest(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        
        xhr.onload = function() {
          if (xhr.status != 200) {
            console.log('Статус ответа: ', xhr.status);
          } else {
            const result = JSON.parse(xhr.response);
            if (callback) {
              callback(result);
            }
          }
        };
        
        xhr.onerror = function() {
          console.log('Ошибка! Статус ответа: ', xhr.status);
        };
        
        xhr.send();
      };
      
      const resultNode = document.querySelector('.result');
      const btnNode = document.querySelector('.button');
      

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
      }
      
      btnNode.addEventListener('click', () => {
        const value = document.querySelector('input').value; 
        if ( value < 1 || value > 10){
            alert("Число вне диапазона от 1 до 10")
        }
        else{
        useRequest(' https://jsonplaceholder.typicode.com/photos?_limit=' + value , displayResult);
        }})
  }