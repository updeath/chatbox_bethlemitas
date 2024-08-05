const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot');

const QRPortalWeb = require('@bot-whatsapp/portal');
const BaileysProvider = require('@bot-whatsapp/provider/baileys');
const MockAdapter = require('@bot-whatsapp/database/mock');

const registration_process = addKeyword(['0']).addAnswer(
    [
        '*Proceso de inscripción:*',
        '*Uno.* Adquirir el formulario de inscripción, consignando $80.000 en la cuenta de ahorros # 126670071672 del Banco Davivienda.',
        '*Dos.* Enviar el soporte de pago del formulario de inscripción al WhatsApp 3176641476 con la información: nombres, apellidos, # de documento de identidad de la persona que generó el pago. Una vez el Colegio reciba el soporte y verifique la información, usted recibirá el formulario y los requisitos de Inscripción, luego, la Secretaria general se pondrá en contacto con usted. De ese modo, inicia el proceso de admisión.',
        '*Nota:* Es importante tener en cuenta que adquirir el formulario de inscripción no asegura el cupo del aspirante, éste depende del resultado de las pruebas académicas; una vez aprobadas, la Secretaria general llamará al aspirante para las entrevistas con Psico- orientación, Coordinación de convivencia y Rectoría.\n',
        '*Certificados de estidio:*',
        'Para solicitar un certificado de estudio, usted debe consignar $12.000 en la cuenta de ahorros # 126670071672 del Banco Davivienda y enviar al WhatsApp 3176641476 el soporte de pago con la información: nombre, apellidos y # de documento de identidad de la persona que generó el pago, el nombre completo y el grado del estudiante. Usted recibirá por este medio el certificado en un periodo de 5 días hábiles.\n\n',
        'Escribe *inicio* para regresar al menú principal',
    ],
    null,
    null,
    
);

const certified_steps = addKeyword(['1']).addAnswer(
    [
        '*Usuarios y contraseñas de Educacity:*',
        'Para recuperar o reestablecer la contraseña de Educacity debes acercarte a Secretaría general o a la Coordinación académica.',
        '*Bloqueo de Educacity:*',
        'Para desbloquear la plataforma de Educacity, debes acercarte al área financiera de la institución (Economato).',
        '*Correos electrónicos:*',
        'Para recuperar o reestablecer la contraseña del correo electrónico institucional puedes escribir al e-mail: claudia.marin@bethlemitaspereira.edu.co\n\n',
        'Escribe *inicio* para regresar al menú principal',
    ],
    null,
    null,
    
);

const admision = addKeyword(['2']).addAnswer(
    [
        'Para más información sobre las clases extracurriculares y cursos de preparación para Primera comunión y Confirmación: oferta, docentes, horarios, costos e inscripciones; puedes comunicarte con nuestra Bibliotecaria, Sor Bibiana Taba Gómez, al Teléfono Fijo: 3387829 extensión 114 o al e-mail: biblioteca@bethlemitaspereira.edu.co\n\n',
        'Escribe *inicio* para regresar al menú principal',
    ],
    null,
    null,
);

const commissary_costs = addKeyword(['3']).addAnswer(
    [

        'Si deseas comunicarte con nuestra *Rectora*, Hna. Rosaura Vargas Mendoza, solicita una cita a través de la Secretaria general, Claudia Patricia Marín Quintero, al WhatsApp o celular 3176641476, al Teléfono Fijo: 3387829 extensión 105 o al e-mail: secretaria@bethlemitaspereira.edu.co\n',
        'Si deseas comunicarte con nuestra *Coordinadora de la Pastoral Educativa*, Hna Gladys Marina Becerra Solano, puedes hacerlo al WhatsApp o celular: 317 6682836, al Teléfono Fijo: 3387829 extensión 109 o al e-mail: c.pastoral@bethlemitaspereira.edu.co\n\n',
        'Escribe *inicio* para regresar al menú principal',
    ],
    null,
    null,
);

const vacant = addKeyword(['4']).addAnswer(
    [

        'Si deseas comunicarte con el *Coordinador*, Juan Mauricio Gutiérrez Escobar, puedes hacerlo a través del WhatsApp o celular: 3152424827, al Teléfono Fijo: 3387829 extensión 113 o al Correo electrónico: c.convivencia@bethlemitaspereira.edu.co\n',
        'Si deseas comunicarte con *Psico-orientación*, Psic. Luisa Fernanda Giraldo Castañeda y Psic. María Antonia Botero Arboleda puedes hacerlo al WhatsApp o celular: 3174992190, al Teléfono Fijo: 3387829 extensión 111 o al Correo electrónico: psicologia@bethlemitaspereira.edu.co\n',
        'Si deseas comunicarte con *Enfermería*, Aux. de enfermería Lina Mayerly Franco Castiblanco, puedes hacerlo al WhatsApp o celular: 3167846297, al Teléfono Fijo: 3387829 extensión 108 o al Correo electrónico: enfermeria@bethlemitaspereira.edu.co\n\n',
        'Escribe *inicio* para regresar al menú principal',
    ],
    null,
    null,
);

const information_academic = addKeyword(['5']).addAnswer([
    'Si requieres información sobre el estado financiero de los estudiantes, pagos de matrícula, pensión y otros; puedes comunicarte al WhatsApp o celular: 3184395020, al Teléfono Fijo: 3387829 extensión 104 – 115 o al e-mail: tesoreria@bethlemitaspereira.edu.co\n\n',
    'Escribe *inicio* para regresar al menú principal',
], null, null);


const transport = addKeyword(['6']).addAnswer([
    'Si deseas comunicarte con nuestro coordinador de Talento humano, Johan Sebastián López Heredia, al WhatsApp o celular: 3182391793, al Teléfono Fijo: 3387829 extensión 107, o al e-mail: c.ghumana@bethlemitaspereira.edu.co\n\n',
    'Escribe *inicio* para regresar al menú principal',
], null, null);


const users_password = addKeyword(['7']).addAnswer(
    [

        'Si deseas comunicarte con el *Restaurante escolar*, Propietarios Alexander Parra Osorio y Lina María Suárez, puedes hacerlo a través del WhatsApp o celular: 3219930474 o al e-mail cafeteria.bethlemitas@bethlemitaspereira.edu.co\n',
        'Si deseas comunicarte con la Empresa de transporte escolar *Royal Express*, Coordinador Jhon Faber Hernández, puedes hacerlo a través del WhatsApp o celular: 3127765068\n\n',
        'Escribe *inicio* para regresar al menú principal',
    ],
    null,
    null,
);

const emails_institute = addKeyword(['8']).addAnswer([
    '*Si deseas comunicarte con la Coordinadora académica, María Antonia López Castro, puedes hacerlo al WhatsApp 317 2737892 o al e-mail c.academica@bethlemitaspereira.edu.co\n\n',
    'Escribe *inicio* para regresar al menú principal',
], null, null);

const info_comunion = addKeyword(['9']).addAnswer(
    [

        'Para radicar una PQRSF (Peticiones, Quejas, Reclamos, Solicitudes y Felicitaciones), puedes hacerlo a través del enlace https://docs.google.com/forms/d/e/1FAIpQLSdaLMGAy8EuS_RTySEX9KlgcTA2vXoQkepFahkUZeMipbTjQw/viewform.\n',
        'Si deseas ampliar información sobre nuestro Sistema de Gestión de Calidad puedes comunicarte con la Coordinación de calidad al e-mail: c.calidad@bethlemitaspereira.edu.co o con la Auxiliar de calidad al e-mail: auxiliar.calidad@bethlemitaspereira.edu.co\n\n',
        'Escribe *inicio* para regresar al menú principal',
   
    ],
    null,
    null,
);

const exit_bot = addKeyword(['salir', 'muchas gracias', 'gracias']).addAnswer([
    'Te agradecemos por utilizar nuestros servicios. Si en el futuro tienes más preguntas o necesitas asistencia, no dudes en contactarnos. ¡Que tengas un día excepcional!\n',
    'Si necesitas información, escribe *inicio*'
], null, null);
     
const flowPrincipal = addKeyword(['hola', 'Hola', 'ole', 'alo', 'inicio', 'como esta', 'hola como esta', 'Buenos dias' , 'Buen dia' , 'buenos dias']).addAnswer([
    'Bienvenido(a) al Colegio Bethlemitas Pereira\n',
    'A continuación, te proporcionaremos información sobre nuestros servicios:',
]).addAnswer(
    [
        '*Digita el número asociado a la información que necesitas:*',
        '0. Información proceso de inscripcción/Certificados de estudio.',
        '1. Información de usuarios y contraseñas de Educacity y correos institucionales.',
        '2. Información de clases extracurriculares y cursos de preparación para sacramentos.',
        '3. Para comunicarte con rectoría y pastoral educativa.',
        '4. Para comunicarte con bienestar estudiantil y convivencia escolar.',
        '5. Para cominicarte con el área financiera (Economato).',
        '6. Para comunicarte con talento humano.',
        '7. Para comunicarte con el restaurante escolar y la empresa de transporte escolar.',
        '8. Para comunicarte con coordinación académica.',
        '9. PQRSF',
        'Escribe *salir* para cerrar el menu\n\n',
        '*📝Nota*: En caso de no obtener las respuestas deseada, puede volver a escribir "inicio" y luego especificar la acción que prefiera conocer.'
    ],
    null,
    null,
    [registration_process, certified_steps, admision, commissary_costs, vacant, information_academic, transport,
        users_password, emails_institute, info_comunion, exit_bot]
)

const main = async () => {
    const adapterDB = new MockAdapter();
    const adapterFlow = createFlow([flowPrincipal]);
    const adapterProvider = createProvider(BaileysProvider);

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    });

    QRPortalWeb();
};

main();