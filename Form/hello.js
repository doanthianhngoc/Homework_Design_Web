function hello(){
    let a= document.getElementById("chao").value;
    // alert("Hello "+ a +" ");
    document.getElementById("mes").innerHTML = `Xinh chào ${a}!`;
}
// hello();
function sum(){
    let a= document.getElementById("soa").value;
    let b= document.getElementById("sob").value;
    let result= Number (a)+Number(b);
    document.getElementById("sum").innerHTML = `Tổng: ${result}!`;

}
sum();