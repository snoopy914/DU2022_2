const headerUserNameElement = document.querySelector('.user');
// const userNameElement = document.querySelector('.user-name');
const localUserName = localStorage.getItem('userName');
const userNameElement = document.querySelector('#name'); // -><span id="name">홍길동</span> <span>님</span>

const setUserNameInnerHtml = (name) => {
  // userNameElement.innerHTML = `${name} <span>님<span>`;
  userNameElement.textContent = name;
  headerUserNameElement.innerHTML = `<span id='name'>${name}</span> <span>님<span>`;
};

if (localUserName) {
  setUserNameInnerHtml(localUserName);
}


userNameElement.onclick = () => {
  const userName = prompt('이름을 입력해 주세요.');
  // todo: userName에 대한 유효성 검산
  localStorage.setItem('userName', userName);
  setUserNameInnerHtml(userName);
};

// console.log(userNameElement);
// console.log(userNameElement.textContent);
// console.log(userNameElement.innerHTML);
