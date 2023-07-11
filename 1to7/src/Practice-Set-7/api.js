export const weatherApi = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === 'https://example.com/api/weather') {
          resolve({
            status: 200,
            message: 'Success',
            data: {
              temperature: 21,
              humidity: 50,
              windSpeed: 10,
            },
          })
        } else {
          reject({
            status: 404,
            message: 'Weather data not found.',
          })
        }
      }, 2000)
    })
  }

 export  const moviesApi = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === 'https://example.com/api/movies') {
          resolve({
            status: 200,
            message: 'Success',
            data: [
              { title: 'The Dark Knight', year: 2008, rating: 9.0 },
              { title: 'Inception', year: 2009, rating: 8.8 },
              { title: 'Interstellar', year: 2010, rating: 8.6 },
              { title: 'Tenet', year: 2009, rating: 7.5 },
              { title: 'Real Steal', year: 2007, rating: 7.5 },
            ],
          })
        } else {
          reject({
            status: 404,
            message: 'Movies list not found.',
          })
        }
      }, 2000)
    })
  }


  export const companyApi = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === 'https://example.com/api/users') {
          resolve({
            status: 200,
            message: 'Success',
            data: [
              {
                name: 'John Doe',
                email: 'john@example.com',
                website: 'example.com',
                company: 'ABC Inc',
              },
              {
                name: 'Jane Doe',
                email: 'jane@example.com',
                website: 'example.com',
                company: 'XYZ Corp',
              },
              {
                name: 'Bob Smith',
                email: 'bob@example.com',
                website: 'example.com',
                company: 'ABC Inc',
              },
              {
                name: 'Alice Brown',
                email: 'alice@example.com',
                website: 'example.com',
                company: 'ACME Corp',
              },
              {
                name: 'Charlie Green',
                email: 'charlie@example.com',
                website: 'example.com',
                company: 'XYZ Corp',
              },
            ],
          })
        } else {
          reject({
            status: 404,
            message: 'Users list not found.',
          })
        }
      }, 2000)
    })
  }

  export const randomQuotesApi = () => {
    const quotes = [
      {
        content: 'Be yourself; everyone else is already taken.',
        author: 'Oscar Wilde',
      },
      {
        content:
          "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: 'Albert Einstein',
      },
      {
        content: 'So many books, so little time.',
        author: 'Frank Zappa',
      },
      {
        content: 'A room without books is like a body without a soul.',
        author: 'Marcus Tullius Cicero',
      },
      {
        content:
          "In three words I can sum up everything I've learned about life: it goes on.",
        author: 'Robert Frost',
      },
    ]
  
    return new Promise((resolve) => {
      setTimeout(() => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
        resolve(randomQuote)
      }, 1000)
    })
  }

  export const productsApi = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === 'https://example.com/api/products') {
          resolve({
            status: 200,
            message: 'Success',
            data: {
              products: [
                {
                  name: 'Product 1',
                  description: 'This is the first product',
                  price: 25.99,
                  quantity: 10,
                },
                {
                  name: 'Product 2',
                  description: 'This is the second product',
                  price: 19.99,
                  quantity: 15,
                },
                {
                  name: 'Product 3',
                  description: 'This is the third product',
                  price: 35.5,
                  quantity: 5,
                },
                {
                  name: 'Product 4',
                  description: 'This is the fourth product',
                  price: 49.99,
                  quantity: 20,
                },
              ],
            },
          })
        } else {
          reject({
            status: 404,
            message: 'Product list not found.',
          })
        }
      }, 2000)
    })
  }

  export const sortingApi = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === 'https://example.com/api/products') {
          resolve({
            status: 200,
            message: 'Success',
            data: {
              products: [
                { name: 'Color Pencils', price: 50, quantity: 40, rating: 4.5 },
                { name: 'Sketchpens', price: 110, quantity: 20, rating: 3.8 },
                { name: 'Eraser', price: 20, quantity: 20, rating: 4.2 },
                { name: 'Sharpener', price: 22, quantity: 30, rating: 4.7 },
              ],
            },
          })
        } else {
          reject({
            status: 404,
            message: 'Product list not found.',
          })
        }
      }, 2000)
    })
  }