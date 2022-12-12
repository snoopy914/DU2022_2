const headerUserNameElement = document.querySelector('.user');
// const userNameElement = document.querySelector('.user-name');
const localUserName = localStorage.getItem('userName');
const localUserSchoolNum = localStorage.getItem('userSchoolNum');
const localUserEmail = localStorage.getItem('userEmail');
const userNameElement = document.querySelector('#name'); // -><span id="name">홍길동</span> <span>님</span>
const userSchoolNumElement = document.querySelector('#school-num');
const userEmailElement = document.querySelector('#school-email');

const setUserNameInnerHtml = (name) => {
  // userNameElement.innerHTML = `${name} <span>님<span>`;
  userNameElement.textContent = name;
  headerUserNameElement.innerHTML = `<span id='name'>${name}</span> <span>님<span>`;
};

const setUserSchoolNumElement = (num) => {
  userSchoolNumElement.textContent = num;
};

const setUserEmailInnerHtml = (email) => {
  userEmailElement.textContent = ', ' + email;
};

if (localUserName) {
  setUserNameInnerHtml(localUserName);
}

if (localUserSchoolNum) {
  setUserSchoolNumElement(localUserSchoolNum);
}

if (localUserEmail) {
  setUserEmailInnerHtml(localUserEmail);
}


userNameElement.onclick = () => {
  const userName = prompt('이름을 입력해 주세요.');
  // todo: userName에 대한 유효성 검산
  localStorage.setItem('userName', userName);
  setUserNameInnerHtml(userName);
};

userSchoolNumElement.onclick = () => {
  let userSchoolNum = prompt('학번을 입력해 주세요.');
  // todo: userName에 대한 유효성 검사

  // for (let i = 0; i < userSchoolNum.length; i++) {
  //   let ch = userSchoolNum.charAt(i);
  //   if ((ch<'0'||ch>'9')) {
  //     alert('학번은 숫자만 입력해주세요');
  //     break;
  //   }
  // }'
  if (userSchoolNum != '' && userSchoolNum.length < 10 && !isNaN(userSchoolNum)) {
    localStorage.setItem('userSchoolNum', userSchoolNum);
    setUserSchoolNumElement(userSchoolNum);
  } else if (userSchoolNum === '') {
    alert('빈칸을 빼고 학번을 입력해 주세요.');
  } else if (userSchoolNum.length >= 10) {
    alert('학번은 9자리 이하로 입력해주세요');
  } else if (isNaN(userSchoolNum)) {
    alert('학번은 숫자로 입력해주세요');
  }
};
userEmailElement.onclick = () => {
  let userEmail = prompt('이메일을 입력해 주세요.');
  let nResult = 0;
  for (let count = 0; count < userEmail.length; count++) {
    const ch = userEmail.charAt(count);
    if (ch === '@') {
      nResult = 1;
      break;
    }
  }
  if (nResult === 1 && userEmail!='') {
    localStorage.setItem('userEmail', userEmail);
    setUserEmailInnerHtml(userEmail);
  } else {
    alert('다시 입력해주세요.');
  }
};

// console.log(userNameElement);
// console.log(userNameElement.textContent);
// console.log(userNameElement.innerHTML);
