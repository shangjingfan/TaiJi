let html = document.querySelector("#html")
let style = document.querySelector("#style");

let string = `/*你好，我是paopao
 *接下来我要展示一下我的前端功底
 *首先准备一个div
 */
#div1{
  border: 1px solid red;
  width: 200px;
  height: 200px;
}
/*接下来展示一个八卦图，
 *把div首先变成圆
 **/
#div1{
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  border: none;
} 
/*八卦由阴阳而生，
 *一黑一白 
 **/
#div1{
  border-radius: 50%;
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 100%);
} 
#div1::before{
  width: 50%;
  height: 50%;
  margin: auto;
  border-radius: 50%;
  border:none;
  background: radial-gradient(circle, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 25%, rgba(255, 255, 255, 1) 25%, rgba(255, 255, 255, 1) 100%);
}
#div1::after{
  width: 50%;
  height: 50%;
  margin: auto;
  border-radius: 50%;
  border:none;
  background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 25%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 100%);
}
`;
let string2 = '';

let n = 0;

let step = () => {
  setTimeout(() => {
    if (string[n] === '\n') {
      string2 += '<br>'; //如果是回车，就不照搬；
    } else if (string[n] === ' ') {
      string2 += '&nbsp;'
    } else {
      string2 += string[n];//如果不是回车，就照搬
    }

    html.innerHTML = string2;
    window.scrollTo(0, 99999);
    style.innerHTML = string.substring(0, n);
    n += 1;
    if (n < string.length) {
      step();
    }
  }, 10)
}

// step();

// setTimeout(() => {
//   style.innerHTML = `
//   body{
//     color: red;
//   }
//   `;
// }, 3000)