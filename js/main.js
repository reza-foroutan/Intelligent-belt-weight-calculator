let selectElemetnOption = document.querySelectorAll('option');
let belt_thickness = document.querySelector('input');
let belt_length = document.querySelector('input');
let belt_width = document.querySelector('input');
let weight_blet = document.querySelector('input')

selectElemetnOption.forEach((elem,index)=>{
    if(index === 0){
        // console.log(elem.value);
    }else if (index === 1) {
        // console.log(elem.value);        
    } else if (index === 2) {
        // console.log(elem.value);
    } else if (index === 3) {
        // console.log(elem.value);
        // console.log(belt_thickness.value * belt_length.value * belt_width.value);
    }else if (index === 4) {
        // console.log(elem.value); 
    }else if (index === 5) {
        // console.log(elem.value); 
    }else{
        // console.log("اطلاعات خواسته شده اشتباه می باشد!");
    }
});

