let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        // console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText == 'OFF') {
            screenValue = "Calculator is OFF !!";
            screen.value = screenValue;
        } else if (buttonText == 'ON') {
            screenValue = "";
            // $("input").attr("placeholder", "some new change");
            // document.querySelector("input").setAttribute("placeholder", function togglemessage(););
            const mytimeout = setTimeout(MyOnMessage, 1000);

            function MyOnMessage() {
                document.querySelector("input").setAttribute("placeholder", "Calculator is now on");
            }
            screen.value = screenValue;
        } else if (buttonText == '🆑') {
            screenValue = "";
            screen.value = screenValue;
        } else if (buttonText == "⬅️") {
            screenValue = screenValue.slice(0, (screenValue.length - 1));
            screen.value = screenValue;
        } else if (buttonText == '=') {
            if (screen.value[screenvalue.length - 1] == "/")
                screen.value = "Invalid input";

            screen.value = eval(screenValue);
        } else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })

}