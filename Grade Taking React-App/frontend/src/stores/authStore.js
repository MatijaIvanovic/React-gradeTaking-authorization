import create from "zustand"
import axios from "axios"

const authStore = create((set) =>({
    loggedIn: null,
    loginForm: {
        email: "",
        password: "",
    },
    singupForm: {
        email: "",
        password: "",
    },
    updateLoginForm: (e)=>{
        const{ name, value } = e.target;
        
        set((state) => {
            return{
                loginForm: {
                    ...state.loginForm,
                    [name]: value,
                },
            };
        });
    },
    updateSignupForm: (e)=>{
        const{ name, value } = e.target;
        
        set((state) => {
            return{
                singupForm: {
                    ...state.singupForm,
                    [name]: value,
                },
            };
        });
    },
    login: async (e) => {

        const {loginForm} = authStore.getState();
        const res = await axios.post('/login', loginForm);
            set({loggedIn: true, loginForm:{
                email: '',
                password: '',
            }});

    },
    checkAuth: async() =>{
        
        try{
            await axios.get('/check-auth');
            set({loggedIn: true});
        }catch(err){
            set({loggedIn:false});
        }
    },
    signup: async() =>{
        const {singupForm} = authStore.getState();

        const res = await axios.post('/signup', singupForm);
        
        set({
            singupForm:{
                email: '',
                password: '',
            }
        })
        console.log(res);
    },

    logout: async() =>{
        await axios.get("/logout");
        set({loggedIn:false});
    }


}));

export default authStore;