export default function changePlaceHolder(input){
    // Mark empty input for correction; otherwise restore the normal input appearance.
    if (input.value.trim() === "") {
        input.value = "";
        input.placeholder = "Nenhuma música digitada";
        input.classList.add("input-error");
        return;
    } 

    input.classList.remove("input-error");
    input.placeholder = "Digite uma música";
}
