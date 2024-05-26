# FE TES Knowledge

`npm run dev` for run after clone

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


![firstPage](/src//assets/preview/home(beforeLogin).png)
##  kebutuhan
- ### 1. Bisa melakukan pembuatan akun
    Dapat melakukan register user
    
    ![register](/src//assets/preview/register.png)
- ### 2. Bisa melakukan pembuatan akun
    Dapat melakukan login user
    
    ![register](/src//assets/preview/login.png)
- ### 3. Menyimpan data user di database
    Data dihandle dengan API dari BE : [BE LINK] 
    ![register](/src//assets/preview/login.png)

- ### 4. Bisa mengakses profile dengan header token JWT, response berbentuk JSON
    User profile dapat diakses hanya ketika sudah login untuk bisa diakses melalui dashboard
    
    ![afterLogin](/src//assets/preview/afterLogin.png)
    ![profile](/src//assets/preview/profile.png)

- ### 5. Bisa membuat CRUD product dengan REST API + header token JWT dan session

    pada front-end nya
    list product diambil dari endpoint getAllProduct dan digunakan baik di halaman homepage maupun halaman dashboard.
    ![list product](/src//assets/preview/afterLogin.png) 


    Sedangkan untuk add, edit, dan hapus hanya bisa diakses di dashboard karena memerlukan header token.

    ![crudProduct](/src//assets/preview/products.png)    
    ![crudProduct](/src//assets/preview/products(edit).png)    
    

[BE LINK]: <https://github.com/Dapoodap/knowledge-test-market>