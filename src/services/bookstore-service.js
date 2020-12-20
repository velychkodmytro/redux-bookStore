export default class BookstoreService {
  data = [
    {
      id: 1,
      title: "Production-Ready",
      author: "Susan J.Fowler",
      price: 32,
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg",
    },

    {
      id: 2,
      title: "Release It!",
      author: "Michael T.Nygard",
      price: 27,
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg",
    },
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data);
        reject(new Error("Something bad happened"));
      }, 700);
    });
  }
}
