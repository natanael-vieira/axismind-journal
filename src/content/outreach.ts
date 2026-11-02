import type { Locale } from '@/i18n/messages';

type OutreachPage = { eyebrow: string; title: string; intro: string; sections: readonly (readonly [string, string])[] };
type OutreachCopy = { navAbout: string; navProfessionals: string; install: string; feedback: string; privacy: string; story: string; about: OutreachPage; professionals: OutreachPage };

export const outreach: Record<Locale, OutreachCopy> = {
  "pt-BR": {
    "navAbout": "Sobre",
    "navProfessionals": "Para profissionais",
    "install": "Testar no Android",
    "feedback": "Enviar feedback",
    "privacy": "Conhecer a privacidade",
    "story": "Conhecer a história",
    "about": {
      "eyebrow": "Um projeto independente",
      "title": "A história por trás do axismind.",
      "intro": "Sou Natanael Sales Vieira, desenvolvedor independente de Palhoça, Santa Catarina. O axismind começou com uma conversa entre mim e minha esposa: uma necessidade dela encontrou algo que eu também vivia. Ela teve a ideia. Eu a transformei em aplicativo.",
      "sections": [
        [
          "Antes do código, uma vida compartilhada",
          "Sou casado desde 2013. Minha esposa convive com transtorno de personalidade borderline e transtorno bipolar. Na nossa experiência, ela vive os sentimentos com muita intensidade, e eu muitas vezes tenho dificuldade para reconhecer e nomear o que sinto. Ao longo desses anos, percebi como pode ser importante encontrar palavras para explicar o que vivemos, lembrar de um contexto e organizar o que queremos conversar. O axismind nasceu dentro dessa vida compartilhada, pensando primeiro em uma necessidade concreta dela."
        ],
        [
          "“Por que você não cria um aplicativo para isso?”",
          "Minha esposa utilizava um aplicativo para registrar o dia, mas não encontrava ali tudo de que precisava: algumas funções que procurava eram pagas. Sua psicóloga sugeriu organizar os registros em uma planilha, mas esse formato não funcionava bem para ela. Foi então que ela me perguntou: “Por que você não cria um aplicativo para isso?”. Como desenvolvedor, encontrei nessa pergunta um motivo muito pessoal para começar."
        ],
        [
          "Uma dificuldade que também faz parte de mim",
          "Tenho TEA e alexitimia. Reconhecer o que sinto e encontrar palavras para expressar sentimentos sempre foi difícil para mim. Por isso, a ideia dela também encontrou uma necessidade minha. Eu queria construir um espaço em que fosse possível começar pelo que consigo perceber: o que aconteceu, como está meu corpo ou uma palavra que faça sentido naquele momento, sem precisar ter uma explicação pronta."
        ],
        [
          "Da preparação para uma conversa ao cotidiano",
          "A origem estava ligada a guardar referências para a terapia, mas a proposta cresceu para além desse momento. O axismind reúne relatos por texto ou voz, momentos rápidos, pensamentos e observações do corpo. A pessoa pode anotar uma sensação e escolher uma palavra para descrevê-la, retomar uma experiência ou selecionar o que deseja compartilhar. Não é o aplicativo que determina o sentimento: cada registro continua pertencendo a quem o escreveu."
        ],
        [
          "Gratuito, privado e independente",
          "O axismind é gratuito e sem anúncios. Os registros ficam no cofre criptografado do aparelho, sem sincronização do diário com um servidor do projeto. Compartilhar um PDF ou guardar uma cópia segura são escolhas da pessoa. O apoio voluntário ao projeto não libera funções exclusivas."
        ],
        [
          "O que quero construir daqui para frente",
          "Meu desejo é que mais pessoas conheçam o app e possam decidir se ele faz sentido em sua rotina. Ouvir usuários e profissionais faz parte desse caminho. O axismind não diagnostica nem substitui acompanhamento: é uma ferramenta de registro pessoal que continuo desenvolvendo com responsabilidade."
        ]
      ]
    },
    "professionals": {
      "eyebrow": "Um convite para conhecer e avaliar",
      "title": "Um diário pessoal que a pessoa escolhe levar à conversa.",
      "intro": "O axismind é gratuito, sem anúncios e disponível para Android, para maiores de 18 anos. Profissionais e clínicas podem conhecer o aplicativo e avaliar livremente se ele faz sentido como ferramenta opcional de registro pessoal.",
      "sections": [
        [
          "O que é — e quais são seus limites",
          "Um diário para registrar experiências por texto ou voz, rever anotações e preparar conversas. Não é prontuário, instrumento de avaliação clínica ou tratamento. Não há painel profissional, acompanhamento remoto ou acesso automático aos registros. Uma versão para iOS é uma intenção futura, sem data anunciada."
        ],
        [
          "Compartilhamento sob escolha da pessoa",
          "A pessoa seleciona período e conteúdo, confere uma prévia e decide se deseja exportar em PDF. O profissional recebe apenas o que ela escolher compartilhar. O PDF não tem senha nesta versão: o arquivo deve ser guardado e enviado com cuidado. Exportar não agenda envio e não comprova que houve uma sessão."
        ],
        [
          "Privacidade com limites claros",
          "Os registros permanecem no cofre criptografado do aparelho, sem sincronização do diário com um servidor do axismind. Cópias seguras e arquivos exportados ficam no destino escolhido pela pessoa. Funções opcionais podem acessar provedores externos, como login social e download do modelo de voz. O app não oferece monitoramento de urgências; recursos de apoio externo dependem de ação da pessoa."
        ],
        [
          "Como conhecer e enviar sua opinião",
          "Instale o app e experimente com dados fictícios: crie um relato, faça um registro breve e confira a seleção e a prévia do PDF. Observe se a linguagem é clara e se é fácil entender o que foi salvo e compartilhado. Envie sugestões ou dificuldades pelo contato abaixo, sem relatos, PDFs ou dados identificáveis de pacientes. Não há compromisso de indicação, remuneração por encaminhamentos ou pedido de endosso clínico."
        ]
      ]
    }
  },
  "en": {
    "navAbout": "About",
    "navProfessionals": "For professionals",
    "install": "Try on Android",
    "feedback": "Send feedback",
    "privacy": "Explore privacy",
    "story": "Read the story",
    "about": {
      "eyebrow": "An independent project",
      "title": "The story behind axismind.",
      "intro": "I am Natanael Sales Vieira, an independent developer from Palhoça, Santa Catarina, Brazil. axismind began with a conversation between my wife and me: a need of hers met something I experienced too. She had the idea. I turned it into an app.",
      "sections": [
        [
          "Before the code, a shared life",
          "I have been married since 2013. My wife lives with borderline personality disorder and bipolar disorder. In our experience, she feels emotions very intensely, and I often struggle to recognize and name what I feel. Over those years, I have seen how important it can be to find words for our experiences, remember context and organize what we want to discuss. axismind grew out of that shared life, starting with a practical need she had."
        ],
        [
          "“Why don’t you create an app for this?”",
          "My wife used an app to record her days, but it did not offer everything she needed in a way that worked for her: some features she wanted were paid. Her psychologist suggested keeping records in a spreadsheet, but that format did not suit her. Then she asked me: “Why don’t you create an app for this?”. As a developer, I found a very personal reason to begin in that question."
        ],
        [
          "A difficulty that is part of my life too",
          "I am autistic and have alexithymia. Recognizing what I feel and finding words to express feelings has always been difficult for me. Her idea also met a need of my own. I wanted to build a space where I could start with what I can notice: what happened, how my body feels or a word that fits that moment, without needing a ready explanation."
        ],
        [
          "From preparing a conversation to everyday life",
          "It started with keeping references for therapy, but the idea grew beyond that moment. axismind brings together text or voice entries, quick moments, thoughts and body observations. People can note a sensation and choose a word to describe it, revisit an experience or select what to share. The app does not determine the feeling: each entry still belongs to the person who wrote it."
        ],
        [
          "Free, private and independent",
          "axismind is free and has no ads. Entries stay in the device’s encrypted vault, without journal synchronization to a project server. Sharing a PDF or keeping a secure copy is the person’s choice. Voluntary support does not unlock exclusive features."
        ],
        [
          "What I want to build next",
          "I want more people to discover the app and decide whether it fits their routine. Listening to users and professionals is part of that work. axismind does not diagnose or replace professional care: it is a personal journaling tool I continue developing responsibly."
        ]
      ]
    },
    "professionals": {
      "eyebrow": "An invitation to explore and evaluate",
      "title": "A personal journal people can choose to bring to a conversation.",
      "intro": "axismind is free, has no ads and is available on Android for adults aged 18 and over. Professionals and clinics can explore it and independently assess whether it fits as an optional personal journaling tool.",
      "sections": [
        [
          "What it is — and its limits",
          "A journal for recording experiences through text or voice, revisiting notes and preparing conversations. It is not a clinical record, assessment instrument or treatment. There is no professional dashboard, remote monitoring or automatic access to entries. An iOS version is a future intention with no announced date."
        ],
        [
          "Sharing by personal choice",
          "The person selects the period and content, checks a preview and decides whether to export a PDF. Professionals receive only what the person chooses to share. PDFs are not password-protected in this version: store and send them carefully. Exporting does not schedule delivery or prove a session occurred."
        ],
        [
          "Privacy with clear limits",
          "Entries stay in the device’s encrypted vault, without journal synchronization to an axismind server. Secure copies and exports remain at the chosen destination. Optional features may contact external providers, such as social sign-in or voice model downloads. The app does not monitor emergencies; external support features depend on the person’s action."
        ],
        [
          "How to explore and share feedback",
          "Install the app and try fictional data: create an entry, record a quick moment and review PDF selection and preview. Check whether the language is clear and saved or shared content is easy to understand. Send suggestions or difficulties through the contact below, without patient entries, PDFs or identifiable information. There is no obligation to recommend it, referral payment or request for clinical endorsement."
        ]
      ]
    }
  },
  "es": {
    "navAbout": "Sobre el proyecto",
    "navProfessionals": "Para profesionales",
    "install": "Probar en Android",
    "feedback": "Enviar comentarios",
    "privacy": "Conocer la privacidad",
    "story": "Conocer la historia",
    "about": {
      "eyebrow": "Un proyecto independiente",
      "title": "La historia detrás de axismind.",
      "intro": "Soy Natanael Sales Vieira, desarrollador independiente de Palhoça, Santa Catarina, Brasil. axismind empezó con una conversación con mi esposa: una necesidad suya coincidió con algo que yo también vivía. Ella tuvo la idea. Yo la convertí en aplicación.",
      "sections": [
        [
          "Antes del código, una vida compartida",
          "Estoy casado desde 2013. Mi esposa convive con trastorno límite de la personalidad y trastorno bipolar. En nuestra experiencia, ella vive los sentimientos con mucha intensidad, y yo muchas veces tengo dificultad para reconocer y nombrar lo que siento. Con los años he visto lo importante que puede ser encontrar palabras para explicar lo vivido, recordar un contexto y organizar lo que queremos conversar. axismind nació dentro de esa vida compartida, pensando primero en una necesidad concreta de ella."
        ],
        [
          "«¿Por qué no creas una aplicación para esto?»",
          "Mi esposa utilizaba una aplicación para registrar el día, pero no encontraba todo lo que necesitaba: algunas funciones que buscaba eran de pago. Su psicóloga sugirió organizar los registros en una hoja de cálculo, pero ese formato no le resultaba cómodo. Entonces me preguntó: «¿Por qué no creas una aplicación para esto?». Como desarrollador, encontré en esa pregunta un motivo muy personal para empezar."
        ],
        [
          "Una dificultad que también forma parte de mí",
          "Tengo TEA y alexitimia. Reconocer lo que siento y encontrar palabras para expresarlo siempre ha sido difícil para mí. Su idea coincidió también con una necesidad propia. Quería crear un espacio para empezar por lo que puedo percibir: lo que pasó, cómo está mi cuerpo o una palabra que tenga sentido en ese momento, sin necesitar una explicación preparada."
        ],
        [
          "De preparar una conversación a la vida cotidiana",
          "El origen estaba en guardar referencias para la terapia, pero la propuesta creció más allá de ese momento. axismind reúne relatos por texto o voz, momentos rápidos, pensamientos y observaciones del cuerpo. Cada persona puede anotar una sensación y elegir una palabra para describirla, retomar una experiencia o seleccionar qué compartir. La aplicación no determina el sentimiento: cada registro pertenece a quien lo escribió."
        ],
        [
          "Gratuito, privado e independiente",
          "axismind es gratuito y no tiene anuncios. Los registros permanecen en el almacén cifrado del dispositivo, sin sincronización del diario con un servidor del proyecto. Compartir un PDF o guardar una copia segura es una elección personal. El apoyo voluntario no desbloquea funciones exclusivas."
        ],
        [
          "Lo que quiero seguir construyendo",
          "Quiero que más personas conozcan la aplicación y decidan si encaja en su rutina. Escuchar a usuarios y profesionales forma parte del camino. axismind no diagnostica ni sustituye la atención profesional: es una herramienta de registro personal que sigo desarrollando con responsabilidad."
        ]
      ]
    },
    "professionals": {
      "eyebrow": "Una invitación a conocer y evaluar",
      "title": "Un diario personal que cada persona decide llevar a la conversación.",
      "intro": "axismind es gratuito, sin anuncios y está disponible para Android, para mayores de 18 años. Profesionales y clínicas pueden evaluarlo libremente como herramienta opcional de registro personal.",
      "sections": [
        [
          "Qué es y cuáles son sus límites",
          "Un diario para registrar experiencias por texto o voz, revisar notas y preparar conversaciones. No es una historia clínica, una evaluación clínica ni un tratamiento. No hay panel profesional, seguimiento remoto ni acceso automático a los registros. Una versión para iOS es una intención futura sin fecha anunciada."
        ],
        [
          "Compartir por decisión personal",
          "La persona selecciona el período y el contenido, revisa una vista previa y decide si exportar un PDF. El profesional recibe solo lo que ella elige compartir. El PDF no tiene contraseña en esta versión: hay que guardarlo y enviarlo con cuidado. Exportar no programa un envío ni demuestra que hubo una sesión."
        ],
        [
          "Privacidad con límites claros",
          "Los registros permanecen cifrados en el dispositivo, sin sincronización con un servidor de axismind. Las copias seguras y las exportaciones quedan en el destino elegido. Las funciones opcionales pueden contactar con proveedores externos, como el inicio de sesión social o la descarga del modelo de voz. La aplicación no supervisa emergencias; el apoyo externo depende de una acción de la persona."
        ],
        [
          "Cómo probar y enviar comentarios",
          "Pruebe con datos ficticios: cree un relato, registre un momento y revise la selección y la vista previa del PDF. Observe si el lenguaje y lo guardado o compartido se entienden. Envíe sugerencias mediante el contacto indicado, sin relatos, PDF ni datos identificables de pacientes. No hay compromiso de recomendar, pago por derivaciones ni solicitud de aval clínico."
        ]
      ]
    }
  },
  "it": {
    "navAbout": "Il progetto",
    "navProfessionals": "Per professionisti",
    "install": "Prova su Android",
    "feedback": "Invia un riscontro",
    "privacy": "Scopri la riservatezza",
    "story": "Leggi la storia",
    "about": {
      "eyebrow": "Un progetto indipendente",
      "title": "La storia dietro axismind.",
      "intro": "Sono Natanael Sales Vieira, sviluppatore indipendente di Palhoça, Santa Catarina, Brasile. axismind è iniziato con una conversazione tra me e mia moglie: una sua necessità ha incontrato qualcosa che vivevo anch’io. Lei ha avuto l’idea. Io l’ho trasformata in un’app.",
      "sections": [
        [
          "Prima del codice, una vita condivisa",
          "Sono sposato dal 2013. Mia moglie convive con il disturbo borderline di personalità e il disturbo bipolare. Nella nostra esperienza, lei vive i sentimenti con grande intensità e io spesso fatico a riconoscere e nominare ciò che provo. Negli anni ho visto quanto possa essere importante trovare parole per raccontare ciò che viviamo, ricordare un contesto e organizzare quello di cui vogliamo parlare. axismind è nato in questa vita condivisa, pensando prima a una sua necessità concreta."
        ],
        [
          "«Perché non crei un’app per questo?»",
          "Mia moglie usava un’app per annotare le giornate, ma non trovava tutto ciò che le serviva: alcune funzioni desiderate erano a pagamento. La sua psicologa propose di organizzare le annotazioni in un foglio di calcolo, ma quel formato non le era congeniale. Allora mi chiese: «Perché non crei un’app per questo?». Come sviluppatore, ho trovato in quella domanda un motivo molto personale per cominciare."
        ],
        [
          "Una difficoltà che appartiene anche a me",
          "Sono autistico e ho alessitimia. Riconoscere ciò che provo e trovare parole per esprimere sentimenti è sempre stato difficile per me. La sua idea incontrava anche una mia necessità. Volevo uno spazio in cui partire da ciò che riesco a percepire: quello che è successo, come sta il mio corpo o una parola adatta al momento, senza dover avere già una spiegazione."
        ],
        [
          "Dalla preparazione di un dialogo alla quotidianità",
          "L’origine era conservare riferimenti per la terapia, ma la proposta è cresciuta oltre quel momento. axismind riunisce annotazioni scritte o vocali, momenti rapidi, pensieri e osservazioni corporee. Si può annotare una sensazione e scegliere una parola per descriverla, riprendere un’esperienza o scegliere cosa condividere. L’app non determina il sentimento: ogni annotazione appartiene a chi l’ha scritta."
        ],
        [
          "Gratuito, privato e indipendente",
          "axismind è gratuito e senza pubblicità. Le annotazioni rimangono nell’archivio cifrato del dispositivo, senza sincronizzazione del diario con un server del progetto. Condividere un PDF o conservare una copia sicura è una scelta personale. Il sostegno volontario non sblocca funzioni esclusive."
        ],
        [
          "Quello che voglio continuare a costruire",
          "Desidero che più persone scoprano l’app e decidano se è adatta alla loro quotidianità. Ascoltare utenti e professionisti fa parte del percorso. axismind non diagnostica e non sostituisce l’assistenza professionale: è uno strumento di diario personale che continuo a sviluppare con responsabilità."
        ]
      ]
    },
    "professionals": {
      "eyebrow": "Un invito a conoscere e valutare",
      "title": "Un diario personale da portare in una conversazione, per scelta.",
      "intro": "axismind è gratuito, senza pubblicità e disponibile su Android per adulti dai 18 anni. Professionisti e strutture possono valutarlo liberamente come strumento facoltativo di annotazione personale.",
      "sections": [
        [
          "Che cos’è e quali sono i limiti",
          "Un diario per esperienze scritte o vocali, rilettura e preparazione di conversazioni. Non è una cartella clinica, uno strumento di valutazione clinica o un trattamento. Non esistono un pannello professionale, monitoraggio remoto o accesso automatico alle annotazioni. Una versione iOS è un’intenzione futura senza data annunciata."
        ],
        [
          "Condivisione per scelta personale",
          "La persona sceglie periodo e contenuti, controlla un’anteprima e decide se esportare un PDF. Il professionista riceve solo ciò che viene condiviso. In questa versione il PDF non ha password: va conservato e inviato con cura. Esportare non programma invii né dimostra che si sia svolto un incontro."
        ],
        [
          "Riservatezza con limiti chiari",
          "Le annotazioni restano cifrate sul dispositivo, senza sincronizzazione con un server axismind. Copie sicure ed esportazioni rimangono nella destinazione scelta. Funzioni facoltative possono contattare fornitori esterni, come accesso social e download del modello vocale. L’app non monitora emergenze; il supporto esterno dipende dall’azione della persona."
        ],
        [
          "Come provare e inviare un riscontro",
          "Usate dati fittizi: create un’annotazione, registrate un momento rapido e controllate selezione e anteprima del PDF. Valutate chiarezza del linguaggio e comprensione di ciò che viene salvato o condiviso. Inviate suggerimenti al contatto indicato, senza annotazioni, PDF o dati identificabili dei pazienti. Nessun obbligo di raccomandazione, compenso per invii o richiesta di approvazione clinica."
        ]
      ]
    }
  },
  "fr": {
    "navAbout": "À propos",
    "navProfessionals": "Pour les professionnels",
    "install": "Essayer sur Android",
    "feedback": "Envoyer un avis",
    "privacy": "Découvrir la confidentialité",
    "story": "Lire l’histoire",
    "about": {
      "eyebrow": "Un projet indépendant",
      "title": "L’histoire derrière axismind.",
      "intro": "Je suis Natanael Sales Vieira, développeur indépendant à Palhoça, Santa Catarina, au Brésil. axismind est né d’une conversation avec mon épouse : un besoin à elle a rencontré une expérience que je vivais aussi. Elle a eu l’idée. Je l’ai transformée en application.",
      "sections": [
        [
          "Avant le code, une vie partagée",
          "Je suis marié depuis 2013. Mon épouse vit avec un trouble de la personnalité borderline et un trouble bipolaire. Dans notre expérience, elle vit ses émotions avec beaucoup d’intensité et j’ai souvent du mal à reconnaître et à nommer ce que je ressens. Au fil des années, j’ai vu combien il peut être important de trouver les mots pour raconter ce que l’on vit, se souvenir d’un contexte et organiser ce dont on veut parler. axismind est né de cette vie partagée, d’abord pour répondre à un besoin concret qu’elle avait."
        ],
        [
          "« Pourquoi ne crées-tu pas une application pour cela ? »",
          "Mon épouse utilisait une application pour noter ses journées, mais n’y trouvait pas tout ce dont elle avait besoin : certaines fonctions recherchées étaient payantes. Sa psychologue lui a proposé de tenir un tableau, mais ce format ne lui convenait pas. Elle m’a alors demandé : « Pourquoi ne crées-tu pas une application pour cela ? ». Développeur, j’ai trouvé dans cette question une raison très personnelle de commencer."
        ],
        [
          "Une difficulté qui fait aussi partie de ma vie",
          "Je suis autiste et j’ai une alexithymie. Reconnaître ce que je ressens et trouver les mots pour exprimer des sentiments a toujours été difficile pour moi. Son idée rencontrait aussi un besoin personnel. Je voulais un espace où partir de ce que je peux percevoir : ce qui s’est passé, les sensations de mon corps ou un mot adapté au moment, sans devoir disposer d’une explication toute faite."
        ],
        [
          "De la préparation d’un échange au quotidien",
          "Au départ, il s’agissait de garder des repères pour la thérapie, mais le projet a grandi au-delà de ce moment. axismind réunit notes écrites ou vocales, moments rapides, pensées et observations corporelles. Chacun peut noter une sensation et choisir un mot pour la décrire, revenir sur une expérience ou choisir ce qu’il partage. L’application ne détermine pas le sentiment : chaque note appartient à la personne qui l’a écrite."
        ],
        [
          "Gratuit, privé et indépendant",
          "axismind est gratuit et sans publicité. Les notes restent dans le coffre chiffré de l’appareil, sans synchronisation du journal avec un serveur du projet. Partager un PDF ou conserver une copie sécurisée relève du choix personnel. Le soutien volontaire ne débloque aucune fonction exclusive."
        ],
        [
          "Ce que je souhaite continuer à construire",
          "Je souhaite que davantage de personnes découvrent l’application et décident si elle convient à leur quotidien. Écouter utilisateurs et professionnels fait partie du chemin. axismind ne pose pas de diagnostic et ne remplace pas un accompagnement professionnel : c’est un outil de journal personnel que je continue à développer avec responsabilité."
        ]
      ]
    },
    "professionals": {
      "eyebrow": "Une invitation à découvrir et évaluer",
      "title": "Un journal personnel à apporter à une conversation, par choix.",
      "intro": "axismind est gratuit, sans publicité et disponible sur Android pour les adultes de 18 ans et plus. Professionnels et structures peuvent l’évaluer librement comme outil facultatif de notes personnelles.",
      "sections": [
        [
          "Ce que c’est et ses limites",
          "Un journal pour noter des expériences par écrit ou par la voix, relire et préparer des conversations. Ce n’est ni un dossier clinique, ni un outil d’évaluation clinique, ni un traitement. Aucun tableau professionnel, suivi à distance ou accès automatique aux notes. Une version iOS est envisagée, sans date annoncée."
        ],
        [
          "Un partage choisi par la personne",
          "La personne choisit la période et le contenu, vérifie un aperçu et décide d’exporter un PDF. Le professionnel reçoit uniquement ce qu’elle partage. Le PDF n’a pas de mot de passe dans cette version : conservez-le et envoyez-le avec soin. Exporter ne programme pas d’envoi et ne prouve pas qu’une séance a eu lieu."
        ],
        [
          "Confidentialité et limites explicites",
          "Les notes restent chiffrées sur l’appareil, sans synchronisation avec un serveur axismind. Copies sécurisées et exports restent dans la destination choisie. Des fonctions facultatives peuvent contacter des prestataires externes, comme la connexion sociale ou le téléchargement du modèle vocal. L’application ne surveille pas les urgences ; le soutien externe dépend d’une action de la personne."
        ],
        [
          "Comment essayer et donner son avis",
          "Utilisez des données fictives : créez une note, enregistrez un moment et examinez la sélection et l’aperçu du PDF. Vérifiez la clarté du langage et des contenus enregistrés ou partagés. Envoyez vos suggestions au contact indiqué, sans notes, PDF ou données permettant d’identifier des patients. Aucune obligation de recommandation, rémunération pour orientation ou demande de caution clinique."
        ]
      ]
    }
  }
};
