# ARQUITECTURA LIMPIA PARA NEXTJS

[![License](https://img.shields.io/github/license/evrone/go-clean-template.svg)](https://github.com/evrone/go-clean-template/blob/master/LICENSE)
[![Release](https://img.shields.io/badge/version-1.0.0-blue)](https://github.com/evrone/go-clean-template/releases/)

Esta arquitectura está diseñada para la implementación de una ARQUTIECRTURA LIMPIA para [React JS](https://reactjs.org) aplicado [Redux](https://redux.js.org) y [Saga](https://redux-saga.js.org).

![Diagram](doc/arq.png 'Diagram')

## Estructura

Se diseñó una estructura fácil de implementar y mantener, basada en una arquitectura limpia y dividida en 5 capas. Estas deben cumplir con los principios SOLID y ajustarse a las necesidades de la empresa. Es importante destacar que esta estructura busca un total desacoplamiento de la solución para permitir el crecimiento de la aplicación a medida que la lógica se vuelva más compleja.

```
  project
    |
    |___ src /
    |      |
    |      |__ application /
    |      |
    |      |__ domain /
    |      |
    |      |__ infrastructure /
    |      |
    |      |__ app /
    |      |
    |      |__ package /
    |      |
    |      |__ shared /
    |
    |___ __test__ /
    |
    |___ devops /
    |
    |___ .husky /
```

### Domain:

Esta capa es la encargada de manejar la definición, básicamente todas las clases e interfaces que sean de definición tales como DTO, entidades o abstracción de las definiciones debe quedar en esta capa. _Esta capa no debería tener referencia a ninguna otra capa_. Se debe tener en cuenta que si algo de logica se debe pasar a otras capas, preferiblemtene a la capa de applicación.

![Domain](doc/arq-domain.png 'Domain')

```
 domain/
    |___ interfaces/
    |       |
    |       |___ application/
    |       |       |
    |       |       |___ useCases/
    |       |
    |       |___ infrastructure/
    |       |       |
    |       |       |___ service/
    |       |       |
    |       |       |___ persistence/
    |       |
    |       |___ presentation/
    |
    |___ [module name]/
    |       |
    |       |____ entities/
    |       |
    |       |____ states/
    |       |
    |       |____ dtos/
    |
    |___ dependencyInjectionClientDomain.tsx
    |
    |___ dependencyInjectionDomain.tsx
```

#### Interface:

Una interface se conoce como la definición, por lo cual no tiene lógica basicamente solo una estructura, dentro de esta carpeta se usaran todas interfaces requeridas para la inyección de dependencias. Estas estarán organizadas por carpetas por cada capa como es application e infrastructure y sus respectivas sub carpetas.

#### Module Name:

Para mantener el orden dentro del dominio se usará una carpeta por cada uno de los módulos o divisiones propias de cada proyecto. dentro de este se deben manejar una estructura dada por unas subcarpetas.

- entities: En esta carpeta contiene las clases que se podrán usar como entidades internas dentro de la solución, un ejemplo de esto puede ser al almacenar datos en memoria o al usar un storage local estas clases podrías realizar una serialización para mejorar la manipulación de los datos.

- states: ya que manejamos redux se requieren estados dentro de la solución, en esta carpeta se guardaran todos los estados correspondientes al módulo. La idea es que estas clases sean las mismas que usamos en redux al consolidar los reducers.

- dtos: Normalmente se requiere consumir servicios de API o Web Socket para eso se usara esta carpeta, se debe colocar en esta los request y los response necesarios para el trabajo requerido con los servicios externos.

#### dependencyInjectionDomain.tsx y dependencyInjectionClientDomain.tsx:

En este archivo se agregar todas las inyecciones de dependencia que tiene la capa domain tanto para el servidor como para el cliente, _asi no se requiera se debe mantener por estructura de la solución_.

### Application:

Para el manejo de la lógica se usará esta capa, muchas personas catalogan esta capa como casos de uso para efectos prácticos los usaremos de la misma manera. Esta capa tiene la responsabilidad de manejar toda la lógica de negocio y si es posible toda la lógica de la solución. Es importante resaltar que muchas veces se cae en el error de repetir código en esta capa ya que al usar un patrón mediator separamos prácticamente cada una de las clases por funcionalidad y esto hace que se repita el muchas veces la lógica _en la medida de lo posible si llega a pasar esto enviar la lógica a una clase común en el common_ pero se debe evaluar en qué casos vale la pena realizar esta operación.

Vale la pena resaltar que la única relación válida para aplicación es Domain no debe tener ninguna relación con persistence, external o con cualquier otra clase externa a application o domain

![Application](doc/arq-application.png 'Application')

```
 application/
    |
    |___ commons/
    |
    |___ configuration  /
    |
    |___ mappers /
    |
    |___ useCases /
    |        |
    |        |___ [module name] /
    |              |
    |              |____ commons /
    |              |
    |              |____ [Use case name]UseCase.ts
    |
    |
    |___ dependencyInjectionApplication.tsx
    |
    |___ dependencyInjectionClientApplication.tsx
```

#### Common:

En esta carpeta se incluye toda la lógica común dentro de la capa, es importante resaltar que si existe lógica que solo aplique a un módulo no debería ir en esta carpeta y se debe evaluar si es un caso de uso o usar un common dentro de cada module name

#### Configuration:

Toda la configuracion que tenga la capa application ya sean clases o cosntantes que se requeiren cargar

#### Mappers

Aqui deben ir el manejo de mappers de DTO a las entidades internas, se suguiere usar un automapper o un patron abstract converter.

#### Use Cases:

Deben colocar en esta carpeta la logica orzanizada por historias de usuario, donde cada clase representa una historia de usuario pero esta podra tener unas historias de usuario secundarias que podran ir en otras clases y seran llamadas por injeccion de dependencias.

##### Module Name:

Para mejorar la organización se usarán carpetas con el nombre del módulo, estas contendrán un conjunto de lógica organizada en casos de uso los cuales resolverán o realizarán una sola acción. Esta clase debe tener un método handler el cual ejecutara la acción. Si se quieren usar más métodos deben ser private o protected.

- commons: funcionalidades comunes que solo apliquen para un modulo.

- [Use case name]UseCase.ts: Estos archivos deberán tener una única funcionalidad, dada en el método handler si se reqiueren tener mas metodos todos estos seran privados

##### dependencyInjectionApplication.tsx y dependencyInjectionClientApplication.tsx

En este archivo se agregar todas las inyecciones de dependencia que tiene la capa application si no se requiere se debe mantener por estructura de la solución.

### Infrastructure:

Siempre que se quiera usar acceso a información externa ya sea una base de datos, servicios REST o cualquier tipo de repositorio se debe hacer en esta capa. Se debe resaltar que solo debe hacer la conexión no debe tener lógica de negocio y mucho menos integración directa con la capa application. También todas las clases deberían tener asociada una interface de domain si son consumidas desde application.

Importante saber que la única relación válida para infrastructure es Domain.

![Infrastructure](doc/arq-infrastructure.png 'Infrastructure')

```
 infrastructure/
    |
    |___ service/
    |       |
    |       |____ [Provider Name]/
    |
    |___ persistence/
    |       |
    |       |____ repositories/
    |       |       |
    |       |       |____ [Name Segment]Repository.ts
    |       |
    |       |____ contexts/
    |       |
    |       |____ redux/
    |              |
    |              |____ [Module Name]
    |              |
    |              |____ store.ts
    |              |
    |              |____ provider.ts
    |              |
    |              |____ rootSaga.ts
    |
    |___ dependencyInfrastructure.tsx
```

#### Service:

Toda conexión externa a la solución se debe realizar en esta carpeta ya sean servicios REST, Web Socket o similares. Se recalca que esta capa no debería tener lógica solo debe ser la conexión y si es necesario un mapeo a las clases requeridas para continuar con la ejecución. Toda conexión debe estar en una carpeta con el nombre del proveedor.

#### Persistence:

Para conexiones a base de datos o storage local debe trabajarse en esta carpeta, la idea es que si se llegue a cambiar de conexión el impacto sea mínimo y solo sea cambiar en este caso el contexto de llamado al proveedor.

- Repositories: Esta carpeta contara con un patrón repository separando la información de acuerdo a tablas o grupos de tablas relacionadas, si es necesario debería crear subcarpetas para mejorar el orden de la solución.

- Contexts: Estas son las conexiones a las bases de datos o storage locales. cómo se menciono anteriormente la idea es que estos puedan ser reemplazados o modificados con facilidad.

- redux: Se usa como ejemplo redux pero se puede usar otro paquete de arquitectura flux, en esta carpeta va la implementación de redux para el sistema. Cuenta con la implementacion con redux toolkit y se divide cada reducer por modulo. Lo que se busca es centralizar todo lo que tenga que ver con los estados y dividirlo de una manera fácil de manejar.

  - Module Name: Nombre del módulo, dentro de este ser deben ubicar siempre los archivos con los mismos nombres. El actionCreator.tsx será usado para crear lo métodos necesarios el manejo de los estados, importante resaltar que en este archivo debería manejar las acciones y todo lo concerniente a inyección de dependencias. Por otro lado, los reducers.tsx como su nombre lo indica tendrá los reducers y adicional tendrá las acciones que ejecutaran.

  - rootReducers.ts: En este archivo será el compendio de todos reducers de las carpetas.

  - rootSagas.ts: Para poder trabajar sagas se debe usar este archivo para mezclar todos los actions creator de cada carpeta.

  - store.ts: Este es el compendio de todo lo que se debe realizar con redux y lo que debe agregarse al final en el Provider de la App.tsx

### Presentation:

Esta capa esta dividida en dos partes ya que NextJs requiere tener esta estructura, como primera parte esta app donde se colocar la estructura tipica de NEXTJS y despues se usara una carpeta shared donde es crearan los temas y los hooks necesarios para trabajar.

![Presentation](doc/arq-presentation.png 'Presentation')

```
app /
    |
    |___ page.tsx
    |
    |___ layout.tsx
    |
    |___ not-found.tsx
    |
    |___ [Module Name] /

 shared /
    |
    |___ commons/
    |
    |___ hooks/
    |       |
    |       |____ architecture /
    |       |
    |       |____ design /
    |
    |___ themes/
           |
           |____ [Theme Name]/
                       |
                       |____ asserts /
                       |
                       |____ components /
                       |
                       |____ [Module Name] /
                       |
                       |____ page.tsx
                       |
                       |____ layout.tsx
                       |
                       |____ theme.tsx

```

#### app:

Carpeta usar en NextJs para el enrutamiento, para mas informacion acerca de esta carpeta visite [Routing NextJS](https://nextjs.org/docs/app/building-your-application/routing). Para los archivos deben llevar una estructura particular:

##### layout.ts

Esta estructura no debera cambiar ya que el control Layout y providers ayudan a realizar la integración con los temas. aparte de eso trae el terma cargado en el archivo .env y carga en memoria los otros temas disponibles

```TSX
//Load Themes
const env = process.env;
SwitchTheme.LoadThemes(new ThemeTest());
const theme = SwitchTheme.UseThemes(env.NEXT_PUBLIC_THEME);
export const metadata: Metadata = theme.getMetadata();

/**
 * RootLayout Component
 *
 * This component represents the root layout of a web application.
 * It defines the main structure and styling of the application's UI.
 *
 * @param children The content to be rendered within the layout.
 */
export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
  // Retrieve the `inter` font class name using the `fonts()` hook
  const { inter } = fonts();

  return (
    <html lang="es" className={`${inter.className}`}>
      <body>
        <Layout className={StyleUtils.layout}>
          <Content className={StyleUtils.layout__main}>
            <Providers>{children}</Providers>
          </Content>
          <Footer className={StyleUtils.footer}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
      </body>
    </html>
  );
}
```

##### page.tsx u otras paginas

Las paginas debe usar ThemeComponent donde en source se coloca la ruta y siempre iniciando con page:/ y debentro de este tag el codigo por defecto si no cosigue ese archivo en el tema, en este caso en un not found

```TSX
import ThemeComponent from '@/package/switch-themes/themeComponent';

export default function NotFound() {
  return (
    <ThemeComponent source="page:/not_found">
      <div>NOT FOUND PAGE</div>
    </ThemeComponent>
  );
}

```

#### Shared:

En esta carpeta se coloca todo lo que tenga que ver con temas y estructurtas compartidas tales como hooks o componentes.

##### Componets

Esta carpeta se usa cuando se requeren crear componente que no esten en el UI-Kit, si por ejemplo se tiene un control particular que sirve para dos temas pero no hace parte del UI-Kit debe colocarse en esta carpeta.

##### Hooks

Todos los hooks de la aplicacion deben ir en esta carpeta, inicialmente se tiene la carpeta arquitrectura donde se usara para crear la inyeccion de dependencias y design para fuentes pero se pueden agregar mas carpetas dependiendo de las necesidades.

##### themes

Cada sub carpeta representa un tema y a su vez el tema debe tener obliagorioamiente el archivo layout y el archivo theme donde se colocara la configuracion, si ven que este crece demaciado se puede dividir para traer la informacion ya prepocesada tales como sobre escrituras o metadata.

###### layout

```TSX
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

/**
 * Renders the layout component.
 *
 * @param {ReactNode} children - The child components to be rendered within the layout.
 * @returns {JSX.Element} The rendered layout component.
 */
export default function Layout(children: ReactNode): JSX.Element {
  dependencyInjection();

  /**
   * Represents the layout structure for a web page.
   *
   * The layout includes a header, main content area, and an empty aside element.
   */
  return (
    <html lang="en" className={`${inter.className}`}>
      <body>
        <div>
          <main>{children}</main>
          <aside></aside>
        </div>
      </body>
    </html>
  );
}
```

###### theme.tsx

```TSX
export default class ThemeTest implements ITheme {
  public routes: RouteTheme[];
  public name: string;

  public constructor() {
    this.name = 'theme-test';

    this.routes = [
      new RouteTheme(`page:/`, Page),
      new RouteTheme(`page:/product/list`, ListProduct)
    ];
  }

  public getLayout(children: ReactNode): JSX.Element {
    return layout(children);
  }

  public getMetadata(): Metadata {
    return {
      title: 'theme-test',
      description: ' theme-test',
      icons: {
        icon: '/themes/theme-test/img/favicon/favicon.ico'
      },
      metadataBase: new URL('https://www.google.com/'),
      openGraph: {
        url: 'https://www.google.com',
        title: 'theme-test',
        images: [
          {
            url: 'https://theme-test.com/wp-content/uploads/2023/06/Logo-wo_Mesa-de-trabajo-1.png',
            width: 800,
            height: 600
          },
          {
            url: 'https://theme-test.com/wp-content/uploads/2023/06/Logo-wo_Mesa-de-trabajo-1.png',
            width: 1800,
            height: 1600,
            alt: 'My custom alt'
          }
        ],
        type: 'website'
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true
        }
      },
      verification: {
        google: 'XXXXXXXXXX'
      }
    };
  }
}
```

Si se tiene contenido estatico se usara una carpta asserts, para los componentenes propios de ese tema se usara una carpeta componentes y las otras carpetas deberan estar organizadas como en la carpeta app.

_recuerde que no se puede sobreescribir una ruta si no se creo primero en la carpeta app_

### Test

Es esta capa de colocaran todas las pruebas unitarias la idea es que el equipo si se requiere pueda usar TDD. En dado caso que no se use se debe crear todas las pruebas requeridas por capa, incluida presentación.

![Test](doc/arq-test.png 'Test')

```
  __test__
    |
    |___ application /
    |
    |___ extend /
    |
    |___ infrastructure /
    |
    |___ mocks /
    |
    |___ presentation /
```

#### Application:

En esta carpeta tendremos todas las pruebas de application, vale resaltar que solo se debe probar esta capa

#### Extend:

En esta carpeta se deben colocar todos los fakers y clases que ayuden a generar objetos para las pruebas

#### Infrastructure:

Aqui deben ir todas las pruebas para las conexiones externas. Vale la pena resaltar que estas pruebas no deben incluir los llamados reales a los sevicios. Si solo es el llamado al servicio se debe usar inyección de dependencias u omitir esta prueba.

#### Mocks

Aqui se debe usar toda la configuracion requerida para el manejo de la libreria de mocks

#### Presentation

Todas las pruebas a la interface se deben manejar desde este punto, recordar que las pruebas se deben hacer por componente, pagina y demas partes de esta capa no crear una gran prueba con todos los componentes o con diferentes rutas
