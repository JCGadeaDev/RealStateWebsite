import { configureStore, createSlice } from '@reduxjs/toolkit';

// --- SLICE DE EJEMPLO (Placeholder) ---
// Aquí es donde se definirá la lógica para una parte de tu estado.
const placeholderSlice = createSlice({
  name: 'placeholder',
  initialState: {
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    // Añade aquí otros reducers síncronos si es necesario
  },
  // Aquí se añadirían extraReducers para manejar thunks o acciones externas
});

// Exporta las acciones para usar en los componentes
export const { increment } = placeholderSlice.actions;

// --- CONFIGURACIÓN DEL STORE ---
export const store = configureStore({
  reducer: {
    // Aquí es donde se combinan todos tus "slices"
    placeholder: placeholderSlice.reducer,
    // Ejemplo: user: userSlice.reducer,
    // Ejemplo: properties: propertiesSlice.reducer,
  },
  // Redux Toolkit configura automáticamente Redux DevTools
  // y añade middlewares como Redux Thunk por defecto.
});