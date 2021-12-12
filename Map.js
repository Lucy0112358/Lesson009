const users = [
    {
    username: "Yuri Gagarin",
    lang: "ru",
    },
    {
    username: "Nil Armstrong",
    lang: "ENG",
    },
    ];
const getUserNames = users.map(item => item.username)
    console.log(getUserNames);

    const getUsernameLengths = users.map(item => item.username.length)
    console.log(getUserNames);