
        let stores = [{ id: 1, name: "Milk", count: 100 },
        { id: 2, name: "Yakult", count: 100 },
        { id: 3, name: "Butter", count: 100, }
        ];
        //khai báo mảng để chứa phần tử được thêm vào
        let carts = [];
        let checkCart = false;
        let text;
        do {
            text = prompt("Nhập C/R/U/D");
            if (text == "C") {
                let product = prompt("Nhập Milk/Yakult/Butter");
                for (let i = 0; i < stores.length; i++) {
                    if (product == stores[i].name) {
                        for (let j = 0; j < carts.length; j++) {
                            if (carts[j].name == product) {
                                carts[j].count++;
                                checkCart = true;
                                break;
                            }
                        }
                        console.log(checkCart);
                        if (!checkCart) {
                            let newobj = {
                                id: 1,
                                name: stores[i].name,
                                count: 1
                            }
                            carts.push(newobj);
                        }
                        checkCart = false
                        console.log(carts);
                        stores[i].count--;
                        console.log(stores[i]);
                    }
                }
            }
        } while (text != "E")