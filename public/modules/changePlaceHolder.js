export default function changePlaceHolder(input){
    if (input.value.trim() === "") {
        input.value = "";
        input.placeholder = "Nenhuma música digitada";
        input.classList.add("input-error");
        return;
    } 

    input.classList.remove("input-error");
    input.placeholder = "Digite uma música";
}