const smallCups=document.querySelectorAll('.cup-small');
const liters=document.getElementById('litres');
const percent=document.getElementById('percentage');
const remained=document.getElementById('remained');

updateBigCup()
smallCups.forEach((cup, i) => {
  cup.addEventListener('click',()=>highlightCup(i));

});
function highlightCup(i){
  if(smallCups[i].classList.contains('full') && !smallCups[i].nextElementSibling.classList.contains('full'))
  {
    i--;
  }

 smallCups.forEach((item, i2) => {
   if(i2<=i)
   {
     item.classList.add('full');
   }
   else {
     item.classList.remove('full');
   }
 })

updateBigCup();

}
function updateBigCup(){
  const fullCups=document.querySelectorAll('.cup-small.full').length;
  const totalcups=smallCups.length;

  if(fullCups===0)
  {
    percentage.style.visibility='hidden'
    percentage.style.height=0;
  }
  else {
    percentage.style.visibility='visible';
    percentage.style.height=`${fullCups/totalcups *330}px`
    percentage.innerText=`${fullCups/totalcups *100}%`
  }
  if(fullCups===totalcups)
  {
    remained.style.visibility='hidden';
    remained.style.height=0;
  }
  else {
    remained.style.visibility='visible';
    liters.innerText= `${2- (250 * fullCups/1000)}L`;
  }

}
