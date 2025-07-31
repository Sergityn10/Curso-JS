Ejercicios de Funciones de Strings en JavaScript: De lo Básico a lo Avanzado
Introducción:

Los strings son secuencias de caracteres y son omnipresentes en la programación. Desde nombres de usuario y contraseñas hasta el contenido de una página web o el texto de un correo electrónico, todo es un string. Dominar sus manipulaciones te abrirá un mundo de posibilidades.

Nivel 1: Conceptos Básicos y Manipulaciones Fundamentales
Objetivo: Comprender la creación, longitud, acceso a caracteres y algunas de las funciones más comunes.

Ejercicios:

Validación de Formato de Correo Electrónico Básico:

Conceptos: length, includes(), indexOf(), lastIndexOf().

Descripción: Pídele al usuario que introduzca una dirección de correo electrónico. Verifica si la dirección contiene un @ y al menos un . después del @. Asegúrate de que el @ no sea el primer o el último carácter y que el . no sea el último carácter.

Salida Esperada: "Correo electrónico válido" o "Correo electrónico inválido".

Mundo Real: Esto es un paso básico en la validación de formularios de registro o inicio de sesión.

Extracción de Iniciales de un Nombre Completo:

Conceptos: split(), charAt(), toUpperCase().

Descripción: Dada una cadena que representa un nombre completo (ej. "Juan Perez Gomez"), extrae las iniciales de cada palabra (ej. "JPG"). Asume que las palabras están separadas por un solo espacio.

Salida Esperada: Las iniciales en mayúsculas.

Mundo Real: Creación de avatares, abreviaturas en interfaces de usuario.

Capitalización de Nombres Propios:

Conceptos: toLowerCase(), toUpperCase(), slice().

Descripción: Dada una cadena de texto (ej. "maria fernandez"), transforma el texto para que cada palabra comience con mayúscula y el resto de los caracteres sean minúsculas (ej. "Maria Fernandez").

Salida Esperada: El texto con la primera letra de cada palabra capitalizada.

Mundo Real: Formateo de nombres en bases de datos, generación de títulos en informes.

Censura de Palabras Ofensivas:

Conceptos: replace(), includes().

Descripción: Dada una frase y una lista de palabras "prohibidas", reemplaza cada aparición de las palabras prohibidas por asteriscos (***). La longitud de los asteriscos debe ser la misma que la de la palabra original.

Salida Esperada: La frase con las palabras censuradas.

Mundo Real: Moderación de comentarios en redes sociales, foros.

Nivel 2: Manipulación y Búsqueda Avanzada
Objetivo: Utilizar expresiones regulares (básicas), funciones de reemplazo más potentes y combinaciones de métodos.

Ejercicios:

Normalización de URL de Red Social:

Conceptos: startsWith(), endsWith(), trim(), replace() con RegEx (básicas, ej. /^https?:\/\//).

Descripción: Pide al usuario una URL de perfil de red social. Normaliza la URL para que siempre comience con https:// y no termine con una barra (/). Elimina cualquier espacio extra al principio o al final.

Salida Esperada: Una URL limpia y estandarizada.

Mundo Real: Estandarización de datos de usuario, limpieza de entradas en bases de datos.

Generador de Slugs para URLs:

Conceptos: toLowerCase(), replace() con RegEx (para espacios y caracteres especiales), trim().

Descripción: Dada una frase (ej. "Mi Artículo Interesante Sobre JavaScript"), convierte la frase en un "slug" apto para URLs (ej. "mi-articulo-interesante-sobre-javascript"). Esto implica convertir a minúsculas, reemplazar espacios por guiones y eliminar caracteres no alfanuméricos.

Salida Esperada: Un slug URL válido.

Mundo Real: Creación de URLs amigables para SEO en blogs, sistemas de gestión de contenido (CMS).

Análisis de Contraseña Fuerte (Parcial):

Conceptos: match() (con RegEx para verificar dígitos, mayúsculas, minúsculas), length.

Descripción: Crea una función que evalúe la "fuerza" de una contraseña. Al menos debe verificar si la contraseña:

Tiene al menos 8 caracteres.

Contiene al menos una letra mayúscula.

Contiene al menos una letra minúscula.

Contiene al menos un dígito.

Salida Esperada: Una evaluación de la fuerza de la contraseña (ej. "Contraseña débil", "Contraseña moderada", "Contraseña fuerte").

Mundo Real: Sistemas de registro y seguridad de usuarios.

Extracción de Hashtags de un Tweet:

Conceptos: split(), startsWith(), filter().

Descripción: Dada una cadena de texto que simula un tweet, extrae todos los hashtags (palabras que comienzan con #).

Salida Esperada: Un array de hashtags.

Mundo Real: Análisis de tendencias en redes sociales, sistemas de búsqueda basados en etiquetas.

Nivel 3: Problemas Complejos y Optimización
Objetivo: Aplicar lógica más compleja, comprender el rendimiento y utilizar funciones menos comunes o combinarlas de forma sofisticada.

Ejercicios:

Compresor/Descompresor de Texto Simple (Run-Length Encoding):

Conceptos: Bucles, charAt(), substring(), parseInt(), repeat().

Descripción:

Compresor: Dada una cadena (ej. "AAABBCDDD"), comprímela a "A3B2C1D3".

Descompresor: Dada una cadena comprimida (ej. "A3B2C1D3"), descompímela a "AAABBCDDD".

Salida Esperada: La cadena comprimida o descomprimida.

Mundo Real: Algoritmos de compresión de datos básicos, transmisión de datos.

Formato de Número de Tarjeta de Crédito:

Conceptos: replace() con RegEx, match().

Descripción: Dada una cadena de 16 dígitos (representando un número de tarjeta de crédito), formatéala para que se muestre en bloques de cuatro dígitos separados por espacios (ej. "1234 5678 9012 3456"). Permite que el input ya tenga espacios o guiones.

Salida Esperada: El número de tarjeta formateado.

Mundo Real: Interfaz de usuario para pagos, visualización de datos sensibles.

Analizador Léxico Básico para Expresiones Matemáticas:

Conceptos: matchAll() con RegEx, split(), map().

Descripción: Dada una expresión matemática como string (ej. "10 + (2 * 5) - 3 / 1"), descompónla en una lista de "tokens" (números, operadores, paréntesis).

Salida Esperada: Un array de tokens (ej. ["10", "+", "(", "2", "*", "5", ")", "-", "3", "/", "1"]).

Mundo Real: Compiladores, calculadoras, lenguajes de scripting.

Generador de Nombres de Usuario Únicos Basado en Correo y Números:

Conceptos: split(), slice(), indexOf(), Math.random(), toString(36).

Descripción: Dada una dirección de correo electrónico (ej. "nombre.apellido@dominio.com"), genera un nombre de usuario sugerido. Podría ser la primera parte del correo sin el dominio, añadiendo un sufijo numérico aleatorio si es necesario para simular unicidad.

Salida Esperada: Un nombre de usuario sugerido (ej. "nombre.apellido" o "nombre.apellido123").

Mundo Real: Sugerencia de nombres de usuario en formularios de registro, creación de identificadores únicos.

Consejos para los Ejercicios:

Empieza pequeño: No intentes resolver todo de una vez. Descompón cada problema en pasos más pequeños.

Comprende las funciones: Antes de escribir código, busca en la documentación de MDN (Mozilla Developer Network) las funciones de string que crees que te serán útiles.

Prueba a menudo: A medida que escribes código, pruébalo con diferentes entradas para asegurarte de que maneja los casos esperados y los casos límite.

¡No tengas miedo de investigar! Es completamente normal buscar soluciones o ideas en línea. Lo importante es que entiendas el código que escribes.

Hazlos tuyos: Una vez que resuelvas un ejercicio, intenta modificarlo o añadirle una nueva funcionalidad para desafiarte aún más.

¡Espero que estos ejercicios te sirvan para dominar las funciones de string en JavaScript y ver su aplicación práctica! ¡Mucho éxito en tu aprendizaje! Si tienes alguna pregunta sobre un ejercicio específico o necesitas una pista, ¡no dudes en preguntar!