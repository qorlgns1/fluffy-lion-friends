const data = [
  {
    _id: "6271fd40fe5c58d4cbd3a72f",
    index: 0,
    guid: "60f843d2-1b6b-4536-b421-e5df1c4ab735",
    isActive: true,
    balance: "$2,534.11",
    picture: "http://placehold.it/32x32",
    age: 27,
    eyeColor: "brown",
    name: "Miranda Nguyen",
    gender: "male",
    company: "ZENTIA",
    email: "mirandanguyen@zentia.com",
    phone: "+1 (833) 466-3207",
    address: "198 Dank Court, Hartsville/Hartley, Indiana, 8416",
    about:
      "Consectetur proident anim do commodo ipsum. Elit consectetur irure dolore voluptate. Enim aute voluptate et qui do. Eu pariatur laboris labore esse enim reprehenderit mollit ullamco fugiat. Laborum sunt veniam consectetur laboris cupidatat. Lorem tempor occaecat labore ut et eiusmod amet.\r\n",
    registered: "2021-06-16T11:50:54 -09:00",
  },
  {
    _id: "6271fd40e30856d15651c60c",
    index: 1,
    guid: "ee647592-0647-4ad5-96b1-eb6c06a32dbd",
    isActive: true,
    balance: "$2,636.22",
    picture: "http://placehold.it/32x32",
    age: 35,
    eyeColor: "blue",
    name: "Florence Flynn",
    gender: "female",
    company: "ELENTRIX",
    email: "florenceflynn@elentrix.com",
    phone: "+1 (901) 525-3731",
    address: "246 Billings Place, Brandermill, Guam, 5037",
    about:
      "Sint non dolore cupidatat voluptate laboris adipisicing eu quis. Laboris nostrud qui dolor cillum dolor nulla sint culpa est reprehenderit sint ipsum nisi excepteur. Qui cupidatat sint do aliquip ut. Officia est aliquip fugiat ex enim do sunt consequat.\r\n",
    registered: "2014-12-10T08:44:47 -09:00",
  },
  {
    _id: "6271fd404394e16d79143873",
    index: 2,
    guid: "3d3890ff-8241-4a2b-a361-789e0298817a",
    isActive: false,
    balance: "$1,047.32",
    picture: "http://placehold.it/32x32",
    age: 25,
    eyeColor: "green",
    name: "Debbie Pratt",
    gender: "female",
    company: "OPTIQUE",
    email: "debbiepratt@optique.com",
    phone: "+1 (831) 537-3188",
    address: "737 Quentin Street, Calpine, Louisiana, 9102",
    about:
      "Officia nisi labore mollit cupidatat exercitation commodo duis adipisicing officia amet laborum. Nulla qui commodo aliqua reprehenderit dolore cupidatat esse ea pariatur sint ad dolore. Exercitation duis veniam velit occaecat est irure quis labore occaecat.\r\n",
    registered: "2016-09-19T10:00:38 -09:00",
  },
];

// 1번

const first = data.map((v) => {
  return {
    _id: v._id,
    name: v.name,
    age: v.age,
  };
});

console.log(first);

const second = data.filter((v) => {
  return v.age >= 27 ? true : false;
});

console.log(second);

const [{ name }] = data.filter((v) => {
  return v.name >= "6271fd40e30856d15651c60c" ? true : false;
});

console.log("name", name);

const age = data.reduce((acc, cur) => {
  return acc + cur.age;
}, 0);
const averageAge = age / 3;

console.log(`averageAge = ${averageAge}`);

console.log(`------------------------------------------`);

let genderRatio = {
  male: 0,
  female: 0,
};

data.forEach((v) => {
  genderRatio[v.gender] += 1;
});

console.log(`genderRatio = ${JSON.stringify(genderRatio)}`);
