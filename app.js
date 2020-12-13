const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [
        {
          isFav: false,
          title: "The Compound Effect",
          author: "Darren Hardy",
          genre: "Self-Help",
          src: "assets/book1.jpg",
        },
        {
          isFav: false,
          title: "Atomic Habits",
          author: "James Clear",
          genre: "Self-Help",
          src: "assets/book2.jpg",
        },
        {
          isFav: true,
          title: "The Forty Rules of Love",
          author: "Elif Shaffak",
          genre: "Novel",
          src: "assets/book3.jpg",
        },
      ],
    };
  },

  // Methods
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    toggleFavorite(book) {
      book.isFav = !book.isFav;
    },
  },
  //   Computed
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount("#app");
