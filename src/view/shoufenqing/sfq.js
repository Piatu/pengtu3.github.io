var sfq = () => {
   let lis = document.querySelectorAll('li')
  for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener('mouseenter', function () {
      for (let j = 0; j < lis.length; j++) {
        lis[j].style.width = '100px'
      }
      this.style.width = '800px'
    })
    lis[i].addEventListener('mouseleave', function () {
      for (let j = 0; j < lis.length; j++) {
        lis[j].style.width = '240px'
      }

    })
  }
}
export default sfq