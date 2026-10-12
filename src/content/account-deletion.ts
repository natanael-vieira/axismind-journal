import type { Locale } from '@/i18n/messages';

type AccountDeletionCopy = {
  eyebrow: string;
  title: string;
  intro: string;
  stepsTitle: string;
  steps: string[];
  deletedTitle: string;
  deleted: string[];
  retainedTitle: string;
  retained: string[];
  retention: string;
  partialTitle: string;
  partial: string;
  noAccessTitle: string;
  noAccess: string;
  emailAction: string;
  footerLink: string;
  privacyLink: string;
};

export const accountDeletionCopy: Record<Locale, AccountDeletionCopy> = {
  'pt-BR': {
    eyebrow: 'Seus dados, sua decisão',
    title: 'Excluir perfil e dados do axismind',
    intro: 'O perfil e o diário são guardados no seu aparelho. A exclusão é feita no próprio aplicativo, sem depender de uma API ou de uma conta em nossos servidores.',
    stepsTitle: 'Como excluir no aplicativo',
    steps: [
      'Abra o axismind no aparelho e desbloqueie seu perfil.',
      'Acesse Você → Centro de privacidade → Apagar todos os dados.',
      'Se quiser guardar seus registros, crie antes uma cópia de segurança e guarde a senha. Um PDF não restaura o cofre.',
      'Na tela Apagar dados, digite APAGAR e toque em Apagar todos os dados.',
    ],
    deletedTitle: 'O que é excluído',
    deleted: [
      'O perfil local, suas preferências, a sessão e o acesso ao cofre criptografado.',
      'Relatos, registros, reflexões, lembretes e demais dados pessoais guardados pelo axismind nesse aparelho.',
      'Áudios temporários privados e notificações do cofre que o aplicativo conhece.',
    ],
    retainedTitle: 'O que pode permanecer',
    retained: [
      'Cópias de segurança, PDFs ou arquivos que você exportou ou compartilhou fora do aplicativo. Exclua-os também nos locais onde foram salvos.',
      'O modelo de transcrição instalado, que não contém o conteúdo do seu diário.',
      'Dados mantidos por Google, Apple ou outros serviços escolhidos por você seguem as políticas desses serviços.',
    ],
    retention: 'Após concluir a exclusão, o axismind não mantém uma cópia do cofre em seus servidores nem um prazo adicional de retenção para esses registros locais. Uma cópia segura válida ainda pode restaurar os dados que você guardou fora do app.',
    partialTitle: 'Excluir apenas alguns dados',
    partial: 'Você pode remover registros individuais no aplicativo sem apagar o perfil inteiro. Se precisar de orientação sobre um dado específico, use o contato abaixo.',
    noAccessTitle: 'Se você não tem acesso ao aplicativo',
    noAccess: 'Envie uma solicitação de exclusão ou orientação por e-mail. Verificaremos o pedido quanto a dados sob nosso controle. Como o cofre permanece no aparelho e não temos acesso a ele, não conseguimos apagar remotamente o cofre do seu aparelho; podemos explicar as opções disponíveis.',
    emailAction: 'Solicitar exclusão ou orientação por e-mail',
    footerLink: 'Exclusão de conta e dados',
    privacyLink: 'Como excluir o perfil e os dados',
  },
  en: {
    eyebrow: 'Your data, your choice',
    title: 'Delete your axismind profile and data',
    intro: 'Your profile and journal are stored on your device. Deletion takes place in the app, without an API or an account on our servers.',
    stepsTitle: 'How to delete in the app',
    steps: [
      'Open axismind on your device and unlock your profile.',
      'Go to You → Privacy center → Delete all data.',
      'If you want to keep your entries, first create a secure backup and keep its password. A PDF cannot restore the vault.',
      'On the Delete data screen, type DELETE and tap Delete all data.',
    ],
    deletedTitle: 'What is deleted',
    deleted: [
      'The local profile, preferences, session, and access to the encrypted vault.',
      'Journal entries, records, reflections, reminders, and other personal data stored by axismind on that device.',
      'Known private temporary audio files and vault notifications.',
    ],
    retainedTitle: 'What may remain',
    retained: [
      'Backups, PDFs, or files you exported or shared outside the app. Delete them where you saved them, too.',
      'The installed transcription model, which does not contain your journal content.',
      'Data held by Google, Apple, or other services you chose is governed by their own policies.',
    ],
    retention: 'Once deletion is complete, axismind keeps no copy of the vault on its servers and has no additional retention period for these local records. A valid secure backup you kept outside the app can still restore them.',
    partialTitle: 'Delete only some data',
    partial: 'You can remove individual records in the app without deleting the entire profile. For guidance about a specific item, use the contact below.',
    noAccessTitle: 'If you cannot access the app',
    noAccess: 'Send a deletion or help request by email. We will review any data under our control. The vault stays on your device and we cannot access or remotely erase it; we can explain the available options.',
    emailAction: 'Request deletion or help by email',
    footerLink: 'Account and data deletion',
    privacyLink: 'How to delete your profile and data',
  },
  es: {
    eyebrow: 'Tus datos, tu decisión',
    title: 'Eliminar tu perfil y datos de axismind',
    intro: 'Tu perfil y diario se guardan en tu dispositivo. La eliminación se realiza en la aplicación, sin una API ni una cuenta en nuestros servidores.',
    stepsTitle: 'Cómo eliminar en la aplicación',
    steps: [
      'Abre axismind en tu dispositivo y desbloquea tu perfil.',
      'Ve a Tú → Centro de privacidad → Eliminar todos los datos.',
      'Si quieres conservar tus registros, crea antes una copia de seguridad y guarda su contraseña. Un PDF no restaura la bóveda.',
      'En la pantalla Borrar datos, escribe ELIMINAR y confirma Eliminar todos los datos.',
    ],
    deletedTitle: 'Qué se elimina',
    deleted: [
      'El perfil local, las preferencias, la sesión y el acceso a la bóveda cifrada.',
      'Entradas, registros, reflexiones, recordatorios y otros datos personales guardados por axismind en ese dispositivo.',
      'Audios temporales privados y notificaciones conocidas de la bóveda.',
    ],
    retainedTitle: 'Qué puede permanecer',
    retained: [
      'Copias de seguridad, PDF o archivos que exportaste o compartiste fuera de la aplicación. Elimínalos también donde los guardaste.',
      'El modelo de transcripción instalado, que no contiene el contenido de tu diario.',
      'Los datos conservados por Google, Apple u otros servicios elegidos por ti siguen sus propias políticas.',
    ],
    retention: 'Al terminar la eliminación, axismind no conserva una copia de la bóveda en sus servidores ni aplica un plazo adicional de retención a esos registros locales. Una copia de seguridad válida guardada fuera de la aplicación todavía puede restaurarlos.',
    partialTitle: 'Eliminar solo algunos datos',
    partial: 'Puedes eliminar registros individuales en la aplicación sin borrar todo el perfil. Para recibir orientación sobre un dato concreto, usa el contacto siguiente.',
    noAccessTitle: 'Si no puedes acceder a la aplicación',
    noAccess: 'Envía una solicitud de eliminación o ayuda por correo. Revisaremos los datos que estén bajo nuestro control. La bóveda permanece en tu dispositivo y no podemos acceder a ella ni borrarla a distancia; podemos explicar las opciones disponibles.',
    emailAction: 'Solicitar eliminación o ayuda por correo',
    footerLink: 'Eliminación de cuenta y datos',
    privacyLink: 'Cómo eliminar el perfil y los datos',
  },
  it: {
    eyebrow: 'I tuoi dati, la tua scelta',
    title: 'Elimina il profilo e i dati di axismind',
    intro: 'Il profilo e il diario sono conservati sul tuo dispositivo. L’eliminazione avviene nell’app, senza API o account sui nostri server.',
    stepsTitle: 'Come eliminare nell’app',
    steps: [
      'Apri axismind sul dispositivo e sblocca il profilo.',
      'Vai su Tu → Centro privacy → Elimina tutti i dati.',
      'Se vuoi conservare i tuoi contenuti, crea prima un backup sicuro e conserva la password. Un PDF non può ripristinare l’archivio.',
      'Nella schermata Elimina dati, scrivi ELIMINA e conferma Elimina tutti i dati.',
    ],
    deletedTitle: 'Cosa viene eliminato',
    deleted: [
      'Il profilo locale, le preferenze, la sessione e l’accesso all’archivio cifrato.',
      'Diario, registrazioni, riflessioni, promemoria e altri dati personali salvati da axismind sul dispositivo.',
      'Audio temporanei privati e notifiche note dell’archivio.',
    ],
    retainedTitle: 'Cosa può rimanere',
    retained: [
      'Backup, PDF o file esportati o condivisi fuori dall’app. Eliminali anche dove li hai salvati.',
      'Il modello di trascrizione installato, che non contiene il contenuto del diario.',
      'I dati conservati da Google, Apple o altri servizi scelti da te seguono le rispettive politiche.',
    ],
    retention: 'Al termine dell’eliminazione, axismind non conserva copie dell’archivio sui propri server né applica ulteriori periodi di conservazione a questi dati locali. Un backup sicuro valido conservato fuori dall’app può ancora ripristinarli.',
    partialTitle: 'Eliminare solo alcuni dati',
    partial: 'Puoi rimuovere singoli contenuti nell’app senza eliminare l’intero profilo. Per assistenza su un dato specifico, usa il contatto qui sotto.',
    noAccessTitle: 'Se non puoi accedere all’app',
    noAccess: 'Invia una richiesta di eliminazione o assistenza via email. Esamineremo i dati sotto il nostro controllo. L’archivio resta sul tuo dispositivo: non possiamo accedervi né cancellarlo da remoto; possiamo spiegare le opzioni disponibili.',
    emailAction: 'Richiedi eliminazione o assistenza via email',
    footerLink: 'Eliminazione di account e dati',
    privacyLink: 'Come eliminare profilo e dati',
  },
  fr: {
    eyebrow: 'Vos données, votre choix',
    title: 'Supprimer votre profil et vos données axismind',
    intro: 'Votre profil et votre journal sont conservés sur votre appareil. La suppression se fait dans l’application, sans API ni compte sur nos serveurs.',
    stepsTitle: 'Comment supprimer dans l’application',
    steps: [
      'Ouvrez axismind sur votre appareil et déverrouillez votre profil.',
      'Accédez à Vous → Centre de confidentialité → Supprimer toutes les données.',
      'Si vous souhaitez conserver vos notes, créez d’abord une sauvegarde sécurisée et gardez son mot de passe. Un PDF ne restaure pas le coffre.',
      'Sur l’écran Supprimer les données, saisissez SUPPRIMER et confirmez Supprimer toutes les données.',
    ],
    deletedTitle: 'Ce qui est supprimé',
    deleted: [
      'Le profil local, les préférences, la session et l’accès au coffre chiffré.',
      'Les notes, enregistrements, réflexions, rappels et autres données personnelles conservées par axismind sur cet appareil.',
      'Les fichiers audio temporaires privés et les notifications connues du coffre.',
    ],
    retainedTitle: 'Ce qui peut rester',
    retained: [
      'Les sauvegardes, PDF ou fichiers exportés ou partagés hors de l’application. Supprimez-les aussi là où vous les avez enregistrés.',
      'Le modèle de transcription installé, qui ne contient pas le contenu de votre journal.',
      'Les données détenues par Google, Apple ou d’autres services choisis par vous suivent leurs propres politiques.',
    ],
    retention: 'Une fois la suppression terminée, axismind ne conserve aucune copie du coffre sur ses serveurs et n’applique aucune durée de conservation supplémentaire à ces données locales. Une sauvegarde sécurisée valide conservée hors de l’application peut toujours les restaurer.',
    partialTitle: 'Supprimer seulement certaines données',
    partial: 'Vous pouvez supprimer des éléments individuels dans l’application sans effacer tout le profil. Pour obtenir de l’aide sur un élément précis, utilisez le contact ci-dessous.',
    noAccessTitle: 'Si vous ne pouvez pas accéder à l’application',
    noAccess: 'Envoyez une demande de suppression ou d’aide par e-mail. Nous examinerons les données sous notre contrôle. Le coffre reste sur votre appareil : nous ne pouvons ni y accéder ni l’effacer à distance; nous pouvons expliquer les possibilités.',
    emailAction: 'Demander une suppression ou de l’aide par e-mail',
    footerLink: 'Suppression du compte et des données',
    privacyLink: 'Comment supprimer profil et données',
  },
};
