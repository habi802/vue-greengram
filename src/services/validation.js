export const checkValidation = () => {
  const validList = document.querySelectorAll('.valid');
  console.log('validList:', validList);
  if(validList) { // 유효성 검사를 해야 하는 input이 하나 이상이라면
    // validLitst는 유사 배열이라
    // Array.from(validList)로 진짜 배열로 전환

    // reduce는 하나로 만들 때 사용
    // 여러 개의 유효성 검사에 걸리는 message 문자열을 하나의 문자열로 만드는 작업
    const result = Array.from(validList).reduce((prev, item) => {
      let message = ''
      const value = item.value;
      const notNullMessage = item.getAttribute('not-null-message');
      if(notNullMessage && value.trim().length === 0) {
        message = notNullMessage + '\n';
      } else if (value.length > 0) {
        const regexp = item.getAttribute('regexp');
        const regexpObj = new RegExp(regexp);

        if(!value.match(regexpObj)) {
          message += item.getAttribute('regexp-message') + '\n';
        }   
      }
      return prev + message;
    }, '');
    if(result.length > 0) {
      alert(result);
    }
    return result.length > 0
  }
  return false;
}