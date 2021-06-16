//Task 1
let str='aaa@bbb@ccc';

console.log(str.replace(/@/g, '!'));
console.log('');

//Task 2
let date='2025-12-31',
    date1=date.replace(/(2025)(-)(12)(-)(31)/,'$5/$3/$1');

console.log(date1);
console.log('');

//Task 3
let str3='Я учу javascript!';

console.log(str3.substring(2,5));
console.log(str3.substring(6,16));

console.log(str3.substr(2,3));
console.log(str3.substr(6,10));

console.log(str3.slice(2,5));
console.log(str3.slice(6,16));
console.log('');

//Task 4
let arr=[4, 2, 5, 19, 13, 0, 10];
    sum=0;

for(let i=0; i<arr.length; i++){

    sum+=Math.pow(arr[i],3);
};

console.log(Math.sqrt(sum));
console.log('');

//Task 5
let calcResidual=function(a,b){
    let c = Math.abs(a-b);
    return c;
};
console.log(calcResidual(3,5));
console.log(calcResidual(6,1));
console.log('');

//Task 6
let dateNow = new Date();

let dateNow3=function () {

   let  a = dateNow.getMonth()+1,
        b=dateNow.getDate(),
        a1 = String(a),        
        b1=String(b),
        c = '0'+ a1,
        c1='0'+ b1;

    switch(true){
        case(a1.length <2 && b1.length <2):{
            return `${c1}.${c}`;       
        }
        case(a1.length <2 && b1.length >1):{
            return `${b1}.${c}`;       
        }
        case(a1.length >1 && b1.length <2):{
            return `${c1}.${a1}`;            
        }
        default: return `${b1}.${a1}`;
    };
};

console.log(`${dateNow.getHours()}:${dateNow.getMinutes()}:${dateNow.getSeconds()} ${dateNow3()}.${dateNow.getFullYear()}`);
console.log('');

//Task 6
let dateNow1=new Date(),
    dateNow2=dateNow.toLocaleString('ru');

console.log(`${dateNow2.substr(12,8)} ${dateNow2.substr(0,10)}`);
console.log('');

//Task 7
let str7='aa aba abba abbba abca abea';

console.log(str7.match(/ab{1,}a/gi));
console.log(''); 

//Task 8
let checkPhone= function(tel){

    let regexp=/[+][0-9]{3}[0-9]{2}[0-9]{7}/gi;

    console.log(regexp.test(tel));
};

checkPhone('+375295467834');

//Task 9
let checkEmail=function(email){

    let regexp=/[a-z]{1}[0-9 a-z \_ \- \.]{2,}@[a-z]{2,11}.[a-z]{2,11}/gi;

    console.log(regexp.test(email));
};
checkEmail('crijiroidoitta-6465@yopmail.com');

