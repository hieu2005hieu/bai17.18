do {
    let text = [
        { name: "html", Complete: false },
        { name: "css", Complete: false },
        { name: "basic of javascrip", Complete: false },
        { name: "notepackagemanager", Complete: false },
        { name: "Git", Complete: false }
    ]
    let textone = prompt("Nhap C/R/U/D/E");
    if (textone == "C") {
        let name = prompt("Nhập môn học mới");
        let Complete = prompt("Nhập trạng thái hoàn thành");
        let newArray = [];
        newArray.push(name);
        newArray.push(Complete);
        console.log(newArray);
    }
    if (textone == "R") {
        for (i = 0; i < text.length; i++) {
            console.log(text[i]);
        }
    }
    if (textone == "U") {   
        let number = +prompt("Nhap so")
        if (number < text.length) {
            let nameObj = prompt("Nhập tên mới");
            let CompleteObj = prompt("Trạng thái mới");
            text[number].name = nameObj;
            text[number].Complete = CompleteObj;
            console.log(text);
        }
    }
    if (textone == "D") {
        let b=+prompt("Nhập 1 số tùy ý ")
        let deletee = text.splice(0, b);
        console.log(deletee);
        console.log(text);
    }
}
while (text != "E");

