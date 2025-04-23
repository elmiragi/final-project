const data = JSON.parse(`[{
    "name": "Leanne Graham",
    "email": "Sincere@april.biz"
},{
    "id": 2,
    "name": "Ervin Howell",
    "email": "Katrin@may.bz"
},{
    "id": 3,
    "email": "Nathan@yesenia.net"
},{
    "id": 4,
    "name": "Patricia Lebsack",
    "email": "Julianne.OConner@kory.org"
},{
    "id": 5,
    "email": "Lucio_Hettinger@annie.ca"
}]`);
function validateUsers(users) {
    try {
        let index = 0;
        users.forEach((user)=>{
            try {
                index += 1;
                if (user.id == undefined || user.name == undefined || user.email == undefined) throw new Error(`\u{414}\u{430}\u{43D}\u{43D}\u{44B}\u{435} \u{43D}\u{435}\u{43A}\u{43E}\u{440}\u{440}\u{435}\u{43A}\u{442}\u{43D}\u{44B}`);
                else console.log(`${index}. \u{414}\u{430}\u{43D}\u{43D}\u{44B}\u{435} \u{43A}\u{43E}\u{440}\u{440}\u{435}\u{43A}\u{442}\u{43D}\u{44B}: id: ${user.id}, name: ${user.name}, email: ${user.email}`);
            } catch (error) {
                console.error(`${index}. \u{41E}\u{448}\u{438}\u{431}\u{43A}\u{430}:`, error.message);
            }
        });
    } catch (error) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438:", error.message);
    }
}
validateUsers(data);

//# sourceMappingURL=index.672d4772.js.map
