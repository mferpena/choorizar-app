## 🌟 **Guía rápida de Flex con Tailwind CSS**

### 🔧 Activar Flexbox

```html
<div class="flex">...</div>
```

Esto activa `display: flex`.

### 📏 Dirección del eje (flex-direction)

| Clase              | Valor CSS             | Descripción              |
| ------------------ | --------------------- | ------------------------ |
| `flex-row`         | `flex-direction: row` | Horizontal (por defecto) |
| `flex-row-reverse` | `row-reverse`         | Horizontal inverso       |
| `flex-col`         | `column`              | Vertical                 |
| `flex-col-reverse` | `column-reverse`      | Vertical inverso         |

### 📦 Alineación en el eje principal (justify-content)

| Clase             | Valor CSS       | Descripción       |
| ----------------- | --------------- | ----------------- |
| `justify-start`   | `flex-start`    | Al inicio         |
| `justify-center`  | `center`        | Centrado          |
| `justify-end`     | `flex-end`      | Al final          |
| `justify-between` | `space-between` | Espacio entre     |
| `justify-around`  | `space-around`  | Espacio alrededor |
| `justify-evenly`  | `space-evenly`  | Espacio uniforme  |

### 📐 Alineación en el eje cruzado (align-items)

| Clase            | Valor CSS    | Descripción                     |
| ---------------- | ------------ | ------------------------------- |
| `items-start`    | `flex-start` | Arriba (inicio del eje cruzado) |
| `items-center`   | `center`     | Centrado                        |
| `items-end`      | `flex-end`   | Abajo (final del eje cruzado)   |
| `items-stretch`  | `stretch`    | Estirado (por defecto)          |
| `items-baseline` | `baseline`   | Línea base del texto            |

### 🧭 Alineación individual (align-self)

| Clase          | Valor CSS    | Descripción              |
| -------------- | ------------ | ------------------------ |
| `self-auto`    | `auto`       | Automático (por defecto) |
| `self-start`   | `flex-start` | Arriba                   |
| `self-center`  | `center`     | Centrado                 |
| `self-end`     | `flex-end`   | Abajo                    |
| `self-stretch` | `stretch`    | Estirado                 |

### 🧱 Wrap (salto de línea)

| Clase               | Valor CSS      | Descripción                |
| ------------------- | -------------- | -------------------------- |
| `flex-nowrap`       | `nowrap`       | No saltar línea (default)  |
| `flex-wrap`         | `wrap`         | Permitir salto de línea    |
| `flex-wrap-reverse` | `wrap-reverse` | Salto en dirección inversa |

### 📏 Tamaños de elementos (grow/shrink/basis)

| Clase                 | Resultado                      |
| --------------------- | ------------------------------ |
| `flex-1`              | `flex-grow: 1`                 |
| `flex-auto`           | `flex: 1 1 auto`               |
| `flex-initial`        | `flex: 0 1 auto`               |
| `flex-none`           | `flex: none`                   |
| `grow` / `grow-0`     | Activar/desactivar crecimiento |
| `shrink` / `shrink-0` | Activar/desactivar reducción   |
| `basis-[size]`        | Establece el tamaño base       |

### ✅ Ejemplo completo

```html
<div class="flex flex-row justify-between items-center">
  <div class="flex-1 bg-red-300">Izquierda</div>
  <div class="flex-none bg-blue-300">Centro</div>
  <div class="flex-1 bg-green-300">Derecha</div>
</div>
```

## 📦 **Guía rápida de Padding y Margin en Tailwind CSS**

### 🧠 SINTAXIS GENERAL

```html
<!-- padding -->
<p class="p-4">...</p>

<!-- margin -->
<div class="m-2">...</div>
```

Tailwind usa una escala predefinida:

```
0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, ..., hasta 96
```

## 🧰 **Guía de Clases de Padding (relleno interno)**

| Clase  | Área que afecta          |
| ------ | ------------------------ |
| `p-*`  | Todo el padding          |
| `pt-*` | Padding top              |
| `pr-*` | Padding right            |
| `pb-*` | Padding bottom           |
| `pl-*` | Padding left             |
| `px-*` | Padding en X (izq+der)   |
| `py-*` | Padding en Y (arr+abajo) |

🔹 Ejemplo:

```html
<div class="p-4">Padding en todos lados</div>
<div class="px-2 py-3">Padding X:2, Y:3</div>
```

---

## ↔️ **Guía de Clases de Margin (espacio externo)**

| Clase  | Área que afecta |
| ------ | --------------- |
| `m-*`  | Todo el margen  |
| `mt-*` | Margin top      |
| `mr-*` | Margin right    |
| `mb-*` | Margin bottom   |
| `ml-*` | Margin left     |
| `mx-*` | Margin en X     |
| `my-*` | Margin en Y     |

🔹 Ejemplo:

```html
<div class="m-4">Margen en todos lados</div>
<div class="mx-1 my-2">Margen X:1, Y:2</div>
```

### ➖ **Margen negativo**

Sí, puedes usar margen negativo con `-`:

```html
<div class="-mt-2">Margen superior negativo</div>
```

### 📏 **Valores útiles**

| Clase       | Equivale a                       |
| ----------- | -------------------------------- |
| `p-0`       | `padding: 0px`                   |
| `p-4`       | `padding: 1rem`                  |
| `p-8`       | `padding: 2rem`                  |
| `m-auto`    | `margin: auto`                   |
| `space-x-*` | Espacio entre hijos horizontales |
| `space-y-*` | Espacio entre hijos verticales   |

### 🔁 **Espaciado automático entre hijos**

```html
<div class="flex space-x-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

Esto da `margin-right: 1rem` entre hijos (menos el último). Muy útil con `flex`.

### 🎯 RESUMEN RÁPIDO

| Tipo                 | Clase base                | Ejes                         | Ejemplo        |
| -------------------- | ------------------------- | ---------------------------- | -------------- |
| Padding              | `p`                       | `x`, `y`, `t`, `r`, `b`, `l` | `px-4`, `pt-2` |
| Margin               | `m`                       | `x`, `y`, `t`, `r`, `b`, `l` | `mb-6`, `mx-2` |
| Espacios entre hijos | `space-x-*` / `space-y-*` | Solo en contenedores         | `space-x-4`    |

## 📲 **Guía de Responsividad en Tailwind CSS**

Tailwind usa **modificadores responsivos** con _prefijos de tamaño de pantalla_.  
👉 Se colocan **antes** de la clase y separados con `:`.

### 🖼️ **Breakpoints por defecto**

| Prefijo | Tamaño mínimo (px) | Dispositivo común       |
| ------- | ------------------ | ----------------------- |
| `sm:`   | `640px`            | Teléfonos grandes       |
| `md:`   | `768px`            | Tablets                 |
| `lg:`   | `1024px`           | Laptops                 |
| `xl:`   | `1280px`           | Monitores grandes       |
| `2xl:`  | `1536px`           | Pantallas ultra grandes |

### 🧪 **Cómo usarlo**

```html
<div class="p-2 md:p-4 lg:p-8">
  <!-- padding pequeño en móvil, más grande en pantallas grandes -->
</div>
```

Esto se traduce a:

- `p-2` por defecto (pantallas pequeñas)
- `p-4` desde `768px` (md)
- `p-8` desde `1024px` (lg)

### ✅ Ejemplos prácticos

#### 📦 Responsive Padding

```html
<div class="py-2 sm:py-4 md:py-6">Contenido</div>
```

#### 📐 Responsive Layout con Flex

```html
<div class="flex flex-col md:flex-row">
  <div class="w-full md:w-1/2">Columna 1</div>
  <div class="w-full md:w-1/2">Columna 2</div>
</div>
```

#### 🎯 Responsive Text

```html
<h1 class="text-xl sm:text-2xl md:text-4xl">Título</h1>
```

### 🧠 Tip PRO: Combina con `hidden` y `block`

```html
<!-- Solo visible en móviles -->
<div class="block md:hidden">Menú móvil</div>

<!-- Solo visible en escritorio -->
<div class="hidden md:block">Menú escritorio</div>
```

### 🎯 RESUMEN EXPRESS

| Pantalla | Prefijo   | Uso                  |
| -------- | --------- | -------------------- |
| Móvil    | (ninguno) | `text-base`          |
| >=640px  | `sm:`     | `sm:text-lg`         |
| >=768px  | `md:`     | `md:flex-row`        |
| >=1024px | `lg:`     | `lg:justify-between` |
| >=1280px | `xl:`     | `xl:items-center`    |

## 🌳 **Guía de Atomic Design**

```
Atomic Design
├── Atoms
│   └── Ej: botón, input, etiqueta
├── Molecules
│   └── Ej: campo de búsqueda (input + botón)
├── Organisms
│   └── Ej: navbar (logo + links + buscador)
├── Templates
│   └── Ej: layout sin contenido real
└── Pages
    └── Ej: página completa con contenido real
```

En **Atomic Design**, un formulario en una página se organiza así:

### 1. **Átomos**

- Inputs (`<input>`, `<select>`, `<textarea>`)
- Labels
- Botones (`<button>`, `submit`, etc.)
- Iconos, mensajes de error

### 2. **Moléculas**

- Campo de formulario (Label + Input + Error)
- Grupo de botones (ej: Enviar + Cancelar)

### 3. **Organismos**

- Formulario completo (agrupa varias moléculas)
- Ej: `<FormularioContacto />`, `<FormularioLogin />`

### 4. **Templates**

- Estructura de la página que incluye el formulario como componente

### 5. **Pages**

- Página real con datos, por ejemplo: `/contacto`, `/login`

---

**Ejemplo visual** (simplificado):

```
[Page: /contacto]
└── TemplateContacto
    └── OrganismoFormulario
        ├── MoléculaCampoNombre
        │   ├── ÁtomoLabel
        │   ├── ÁtomoInput
        │   └── ÁtomoError
        ├── MoléculaCampoEmail
        └── MoléculaBotones (Submit + Cancelar)
```

¿Quieres ejemplo en código también?

### 📌 **Resumen Puntual - Atomic Design**

- **Atoms**: Elementos básicos e indivisibles de la UI (colores, botones, inputs).
- **Molecules**: Combinación de átomos que forman un componente funcional simple.
- **Organisms**: Conjunto de moléculas y/o átomos que forman una sección completa.
- **Templates**: Estructura de página con componentes pero sin datos reales.
- **Pages**: Versión final con contenido real; usada para testear y validar diseño.

## 📦 **Guía rápida de AXIOS**

1. **Axios Service**: Configuración básica y centralizada.
2. **Manejo de errores**: Errores comunes y cómo capturarlos.
3. **Reintentos automáticos**: Retries en caso de fallos de la petición.
4. **Timeouts**: Configuración de tiempos de espera.
5. **Interceptores**: Modificar solicitudes o respuestas globalmente.
6. **Cancelación de peticiones**: Evitar llamadas redundantes.

---

### 🛠 **Guía de Configuración de Axios**

### 1. **Configuración Global de Axios (AxiosInstance)**

```js
// src/config/axios.js
import axios from "axios";

// Configuración base para Axios
const axiosInstance = axios.create({
  baseURL: "https://api.example.com", // URL base de tu API
  timeout: 5000, // Tiempo máximo de espera en ms
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
```

- **baseURL**: Define la URL base de la API.
- **timeout**: Define el tiempo máximo de espera para una respuesta.
- **headers**: Se pueden incluir cabeceras predeterminadas (como la autenticación o el tipo de contenido).

### 2. **Servicio con Axios (Manejo de Peticiones)**

El **servicio** va a contener la lógica para interactuar con el repositorio y hacer las peticiones. Aquí es donde podemos configurar **reintentos**, **timeouts** y **errores**.

### Ejemplo: **Servicio con reintentos, cancelación y manejo de errores**

```js
// src/services/userService.js
import axiosInstance from "../config/axios";
import axios from "axios";

// Función que gestiona los reintentos con Axios
const MAX_RETRIES = 3; // Número máximo de reintentos

// Crear un cancel token para cancelar la petición si es necesario
const CancelToken = axios.CancelToken;
let cancel;

export const fetchUsers = async () => {
  let attempts = 0;

  while (attempts < MAX_RETRIES) {
    try {
      // Cancelar la solicitud anterior si ya no es necesaria
      if (cancel) cancel();

      // Crear un nuevo token de cancelación para la nueva solicitud
      const source = CancelToken.source();
      cancel = source.cancel;

      const response = await axiosInstance.get("/users", {
        cancelToken: source.token, // Agregar el cancel token a la solicitud
      });

      return response.data; // Retorna los datos si la petición es exitosa
    } catch (error) {
      attempts += 1;

      // Si la solicitud es cancelada
      if (axios.isCancel(error)) {
        console.log("Solicitud cancelada: ", error.message);
        break;
      }

      // Manejo de errores de red (Timeout, o conexión fallida)
      if (error.code === "ECONNABORTED") {
        console.error("La solicitud ha sido cancelada por timeout.");
      }

      // Si es el último intento y falla
      if (attempts === MAX_RETRIES) {
        throw new Error(
          "Maximo número de intentos alcanzado. Error: " + error.message
        );
      }

      console.log(`Reintentando... (${attempts}/${MAX_RETRIES})`);
    }
  }
};
```

### 3. **Manejo de Errores con Axios**

En Axios, puedes manejar los errores de forma global o local. Vamos a cubrir cómo capturar y mostrar errores de manera efectiva.

### **Manejo global con interceptores**:

```js
// src/config/axios.js
import axios from "axios";

// Crear una instancia de Axios
const axiosInstance = axios.create({
  baseURL: "https://api.example.com",
  timeout: 5000,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response; // Si la respuesta es exitosa, solo retornamos el resultado
  },
  (error) => {
    if (error.response) {
      // La solicitud se hizo y el servidor respondió con un estado de error
      console.error("Respuesta del servidor:", error.response);
      alert("Error del servidor: " + error.response.status);
    } else if (error.request) {
      // La solicitud fue hecha pero no se recibió respuesta
      console.error("Error en la solicitud:", error.request);
      alert("Error en la red, no se recibió respuesta");
    } else {
      // Ocurrió un error mientras se configuraba la solicitud
      console.error("Error al configurar la solicitud:", error.message);
      alert("Error de configuración: " + error.message);
    }
    return Promise.reject(error); // Rechazar la promesa con el error
  }
);

export default axiosInstance;
```

### 4. **Reintentos Automáticos con `axios-retry`**

Si quieres agregar **reintentos automáticos** en Axios, puedes usar una librería externa llamada `axios-retry`.

### Instalación:

```bash
npm install axios-retry
```

### Configuración:

```js
// src/config/axios.js
import axios from "axios";
import axiosRetry from "axios-retry";

const axiosInstance = axios.create({
  baseURL: "https://api.example.com",
  timeout: 5000,
});

axiosRetry(axiosInstance, {
  retries: 3, // Número de intentos
  retryDelay: axiosRetry.exponentialDelay, // Retardo exponencial entre intentos
  retryCondition: (error) => {
    return error.response.status === 500 || error.response.status === 503; // Solo reintenta en ciertos códigos de error
  },
});

export default axiosInstance;
```

- **axios-retry** automáticamente reintentará la petición si falla bajo ciertas condiciones (como `500` o `503`).
- El `retryDelay` puede ser `exponentialDelay` para aumentar el tiempo entre intentos y evitar sobresaturar el servidor.

### 5. **Timeouts y Configuración Global de Tiempo de Espera**

Los **timeouts** pueden configurarse directamente en la instancia de Axios para determinar cuánto esperar antes de que una solicitud se considere fallida.

```js
// src/config/axios.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.example.com",
  timeout: 10000, // 10 segundos para un timeout
});

export default axiosInstance;
```

Si no quieres usar un timeout global, también puedes establecer el `timeout` a nivel de la solicitud.

### 6. **Cancelación de Peticiones con Axios**

Para evitar que peticiones anteriores se sigan ejecutando cuando ya no son necesarias, podemos usar el **cancel token**.

```js
// src/services/userService.js
import axiosInstance from "../config/axios";
import axios from "axios";

// Crear un cancel token
const CancelToken = axios.CancelToken;

export const fetchUsers = async (cancelSource) => {
  try {
    const response = await axiosInstance.get("/users", {
      cancelToken: cancelSource.token,
    });
    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log("Solicitud cancelada");
    } else {
      console.error("Error: ", error);
    }
    throw error; // Re-lanzamos el error
  }
};
```

## 🛠 **Guía de Patrones de diseño en React**

### 1. **Componente Funcional (Functional Component)**

- **Descripción**: Los componentes más simples, definidos como funciones en lugar de clases. Utilizan hooks (como `useState`, `useEffect`) para manejar el estado y los efectos.
- **Cuándo usarlo**: Siempre que no necesites un ciclo de vida de componentes o métodos complejos. Es la forma recomendada desde React 16.8.

```jsx
const MyComponent = () => {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};
```

### 2. **Componente de Orden Superior (HOC - Higher-Order Component)**

- **Descripción**: Es una función que recibe un componente y devuelve un nuevo componente con funcionalidades adicionales.
- **Cuándo usarlo**: Para reutilizar lógica entre componentes sin duplicar código.

```jsx
const withLoading = (Component) => {
  return (props) =>
    props.isLoading ? <p>Loading...</p> : <Component {...props} />;
};

const MyComponent = ({ data }) => <div>{data}</div>;
const MyComponentWithLoading = withLoading(MyComponent);
```

### 3. **Render Props**

- **Descripción**: Patrón donde un componente acepta una función como prop, y luego la llama para renderizar contenido. Permite compartir lógica sin componentes de orden superior.
- **Cuándo usarlo**: Para compartir lógica entre componentes de manera más flexible que con HOCs.

```jsx
const DataFetcher = ({ render }) => {
  const data = useFetchData(); // Suponiendo que useFetchData es un hook que obtiene datos
  return render(data);
};

const MyComponent = () => <DataFetcher render={(data) => <div>{data}</div>} />;
```

### 4. **Patrón de Contenedor/Presentacional**

- **Descripción**: Divide la lógica de negocio de la presentación de la UI. Los componentes contenedores gestionan el estado y la lógica, mientras que los componentes presentacionales se encargan de la UI.
- **Cuándo usarlo**: Para mantener una clara separación de responsabilidades entre lógica y presentación.

```jsx
// Componente contenedor
const UserContainer = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetchUserData().then(setUser);
  }, []);
  return <UserProfile user={user} />;
};

// Componente presentacional
const UserProfile = ({ user }) => {
  if (!user) return <p>Loading...</p>;
  return <div>{user.name}</div>;
};
```

### 5. **Patrón de Estado Global (Context API)**

- **Descripción**: Usa el **Context API** para manejar el estado global de la aplicación sin necesidad de pasar props manualmente entre componentes.
- **Cuándo usarlo**: Cuando necesitas compartir el estado entre muchos componentes de diferentes niveles.

```jsx
const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <MyComponent />
    </ThemeContext.Provider>
  );
};

const MyComponent = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Toggle Theme
      </button>
    </div>
  );
};
```

### 6. **Patrón de Lazy Loading**

- **Descripción**: Carga componentes de manera perezosa (es decir, solo cuando se necesitan) para mejorar el rendimiento de la aplicación.
- **Cuándo usarlo**: Cuando tienes componentes pesados o secciones de la app que no se usan todo el tiempo.

```jsx
const MyComponent = React.lazy(() => import("./MyComponent"));

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <MyComponent />
  </Suspense>
);
```

### 7. **Patrón de Hook Personalizado (Custom Hook)**

- **Descripción**: Un hook que encapsula lógica reutilizable y la hace accesible para otros componentes.
- **Cuándo usarlo**: Para extraer lógica reutilizable y mantener los componentes limpios.

```js
const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

const MyComponent = () => {
  const width = useWindowWidth();
  return <div>Window width: {width}</div>;
};
```

### 8. **Patrón de Componentes Controlados vs No Controlados**

- **Descripción**: Los componentes controlados son aquellos cuyo estado es gestionado por React (usando `useState`). Los no controlados gestionan su propio estado internamente.
- **Cuándo usarlo**: Prefiere componentes controlados para mantener un flujo claro de datos, pero usa no controlados si el rendimiento es una preocupación (por ejemplo, en formularios grandes).

```jsx
// Componente controlado
const ControlledComponent = () => {
  const [value, setValue] = useState("");
  return <input value={value} onChange={(e) => setValue(e.target.value)} />;
};

// Componente no controlado
const UncontrolledComponent = () => {
  const inputRef = useRef();
  const handleSubmit = () => alert(inputRef.current.value);
  return <input ref={inputRef} />;
};
```

### Resumen Rápido:

- **Componente Funcional**: Usa hooks para manejar estado y efectos.
- **HOC (Higher-Order Components)**: Reutiliza lógica entre componentes.
- **Render Props**: Componente que pasa lógica a través de una función.
- **Contenedor/Presentacional**: Separa la lógica del UI.
- **Estado Global**: Usa Context API para compartir estado.
- **Lazy Loading**: Carga componentes bajo demanda.
- **Custom Hook**: Extrae lógica reutilizable.
- **Componentes Controlados vs No Controlados**: Controla el estado desde React o deja que lo maneje el DOM.

## 🛠 **Guía de uso useForm**

### 1. **Instalación**

Primero, necesitas instalar **react-hook-form** en tu proyecto:

```bash
npm install react-hook-form
```

### 2. **Configuración Básica**

A continuación, te muestro cómo usar el hook `useForm` de manera básica para un formulario.

```jsx
import React from "react";
import { useForm } from "react-hook-form";

const MyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: "Name is required" })} />
      {errors.name && <p>{errors.name.message}</p>}

      <input type="submit" />
    </form>
  );
};

export default MyForm;
```

#### Explicación:

- `useForm()` proporciona varias funciones útiles:
  - `register`: Se usa para registrar un campo en el formulario.
  - `handleSubmit`: Función que maneja el evento de envío del formulario.
  - `formState.errors`: Contiene los errores de validación de los campos.

### 3. **Propiedades Comunes de `useForm`**

#### `register`: Registra los inputs en el formulario

Es la clave para vincular los campos del formulario con react-hook-form.

```jsx
<input {...register("name", { required: "Name is required" })} />
```

- **Parámetros de `register`**:
  - **name**: Nombre del campo (clave en el objeto de datos).
  - **validación**: Puedes agregar reglas de validación como `required`, `minLength`, `maxLength`, `pattern`, etc.

#### `handleSubmit`: Maneja el envío del formulario

Esta función maneja el evento de envío del formulario y pasa los datos del formulario al callback.

```jsx
const onSubmit = (data) => {
  console.log(data); // Los datos del formulario
};

<form onSubmit={handleSubmit(onSubmit)}></form>;
```

#### `formState`: Estado del formulario

```jsx
const { errors, isDirty, isSubmitting } = formState;
```

- **`errors`**: Contiene los errores de validación.
- **`isDirty`**: Indica si algún campo ha sido modificado.
- **`isSubmitting`**: Indica si el formulario está siendo enviado.

#### `setValue` y `getValues`: Obtener y establecer valores

Puedes manipular los valores de los campos programáticamente.

```jsx
const { setValue, getValues } = useForm();

// Establecer un valor
setValue("name", "John");

// Obtener un valor
const nameValue = getValues("name");
```

#### `reset`: Restablece el formulario

```jsx
const { reset } = useForm();

// Restablecer los valores y errores
reset();
```

### 4. **Validación**

Puedes realizar validaciones tanto de forma sincrónica como asincrónica.

#### Validación Simple

```jsx
<input {...register("name", { required: "Name is required" })} />
```

#### Validación con `minLength` y `maxLength`

```jsx
<input {...register("name", { minLength: 3, maxLength: 20 })} />
```

#### Validación con Regex (`pattern`)

```jsx
<input
  {...register("email", {
    pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
  })}
/>
```

#### Validación Asíncrona

Si necesitas validaciones que dependan de datos de una API, puedes usar validaciones asíncronas.

```jsx
const validateEmail = async (email) => {
  const response = await fetch(`/validate-email?email=${email}`);
  const isValid = await response.json();
  return isValid ? true : "Email is already taken";
};

<input {...register("email", { validate: validateEmail })} />;
```

### 5. **Errores y Mensajes de Validación**

Puedes acceder a los errores de validación utilizando `formState.errors`.

```jsx
{
  errors.name && <p>{errors.name.message}</p>;
}
{
  errors.email && <p>{errors.email.message}</p>;
}
```

### 6. **Campos Dinámicos**

Puedes agregar y quitar campos dinámicamente, especialmente útil cuando trabajas con formularios que requieren agregar múltiples entradas de usuario.

```jsx
import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";

const DynamicForm = () => {
  const { control, register, handleSubmit } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "users",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((item, index) => (
        <div key={item.id}>
          <input {...register(`users[${index}].name`)} />
          <input {...register(`users[${index}].email`)} />
          <button type="button" onClick={() => remove(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={() => append({ name: "", email: "" })}>
        Add User
      </button>
      <input type="submit" />
    </form>
  );
};
```

- **`useFieldArray`**: Se usa para manejar listas de campos dinámicos.

### 7. **Optimización con `useMemo` y `useCallback`**

Cuando trabajas con formularios grandes, puedes optimizar el rendimiento usando `useMemo` y `useCallback`.

```jsx
const { register, handleSubmit } = useForm({
  defaultValues: useMemo(() => ({ name: "John" }), []),
});

const onSubmit = useCallback((data) => {
  console.log(data);
}, []);
```

### 8. **Integración con Componentes de UI**

Puedes integrar `react-hook-form` con bibliotecas de componentes como **Material-UI**, **Ant Design**, etc., de manera muy sencilla utilizando el **`Controller`**.

#### Ejemplo con Material-UI:

```jsx
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

const MyForm = () => {
  const { control, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="Name" />}
      />
      <input type="submit" />
    </form>
  );
};
```

### 9. **Propiedades Avanzadas**

#### `shouldFocusError`:

- Define si el campo con el error debe recibir el foco.

```jsx
const { register, handleSubmit } = useForm({ shouldFocusError: true });
```

#### `mode`:

- Define cuándo realizar la validación: `onChange`, `onBlur`, `onSubmit`, o `all`.

```jsx
const { register } = useForm({ mode: "onBlur" });
```

### 10. **Manejo de Carga (Loading State)**

Si tienes un formulario que depende de datos asincrónicos, puedes manejar el estado de carga usando `isSubmitting` y `isValidating`.

```jsx
const { isSubmitting } = useForm();

if (isSubmitting) {
  return <div>Submitting...</div>;
}
```

### Resumen de las Funciones y Propiedades de `useForm`:

- **`register`**: Registra un input en el formulario.
- **`handleSubmit`**: Maneja el evento de envío.
- **`formState`**: Contiene el estado del formulario (`errors`, `isSubmitting`, `isDirty`).
- **`setValue` / `getValues`**: Manipula valores de manera programática.
- **`reset`**: Restablece el formulario.
- **`errors`**: Contiene los errores de validación.
- **`mode`**: Define el momento de validación.
- **`Controller`**: Usado para integrar bibliotecas de UI con formularios.
