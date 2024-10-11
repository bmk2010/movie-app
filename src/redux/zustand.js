import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

let useStore = (set) => {
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    return {
        tickets: [],
        setTicket: (ticket) => set((state) => ({tickets:[...state.tickets,ticket]})),
    };
};


useStore = persist(useStore, {name: "set"})
useStore = devtools(useStore)

export default create(useStore);
