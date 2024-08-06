
  window.onload=function(){

    const btn = document.querySelector('.btn');
    const resultNode = document.querySelector('.result');

    const useRequest = (value1, value2) => {
     return fetch( `https://dummyimage.com/${value1}x${value2}/`)
        .then((response) => {
          return response;
        })
        .catch(() => { alert('error') });
    };

    btn.addEventListener('click', async () => {
      const value1 = parseInt(document.querySelector('.input_w').value);
      const value2 = parseInt(document.querySelector('.input_h').value);
      if(value1 < 100 || value1 > 300 && value2 < 100 || value2 > 300){
        alert("Одно из чисел вне диапазона от 100 до 300")
      }
      else{
        const request = await useRequest(value1, value2);
        resultNode.innerHTML += `<img src="${request.url}">`
      }
    } )
  }