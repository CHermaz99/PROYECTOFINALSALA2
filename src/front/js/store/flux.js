const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      products: [],
      user: {},
      activeCategory: 1,
      cart: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      getProducts: (id) => {
        // Otra forma de poner la url seria >> https://3001-chermaz99-proyectofinal-blwubh6zyn9.ws-eu59.gitpod.io/api/product << (No es recomendable)
        fetch(process.env.BACKEND_URL + "/api/product-category/" + id)
          .then((data) => data.json())
          .then((data) => setStore({ products: data }));
      },
      
      addToCart: (product) => {
        const store = getStore()
        setStore({ cart: [...store.cart, product]})
      },

      removeToCart: (productId) => {
        const store = getStore() 
        const products = store.cart.filter(c => c.id === productId);
        setStore({ cart: products})
      },

      postUser: () => {
        fetch(process.env.BACKEND_URL + "/api/user")
          .then((data) => data.json())
          .then((data) => setStore({ user: data }));
      },

      create_user: async (data) => {
        const resp = await fetch(process.env.BACKEND_URL + "/api/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        });
        if (resp.status == 201) {
          const data = await resp.json();
          {
            /**localStorage.setItem("token", data.access_token);
        setStore({token:data.access_token}) */
          }
        } else {
          alert("El usuario ya existe");
        }
      },

      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
