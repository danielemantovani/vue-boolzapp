const { createApp } = Vue;

createApp({
    data() {
        return {
            activeChat: 0,
            search: '',
            newMessage: {
                date: '',
                message: '',
                status: 'sent'
            },
            messageRecived: false,
            aphorism: [
                "Sapere è potere",
                "Fai ogni giorno una cosa che ti spaventa",
                "Sai che c'è? Che avere il coraggio di tentare ed essere consapevole del rischio di fallire è una delle cose più difficili che puoi fare",
                "Non importa quanto vai piano, l'importante è non fermarsi",
                "Non aspettare. Non sarà mai il momento giusto",
                "Il futuro dipende da ciò che fai oggi",
                "Il modo migliore per fare una cosa è farla"
            ],

            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
        }
    },

    methods: {
        // funzione per cambiare chat 
        changeContact: function (clickIndex) {
            console.log("Contatto", clickIndex);
            this.activeChat = clickIndex
        },

        // funzione per generare risposte random utilizzando l'array aphorism, prima trovando la lunghezza e l'indice dell'array poi abbinando la frase corrispondente a quell'indice
        randomAphorism: function (){
            const indexAphorism = Math.floor(Math.random() * this.aphorism.length);
            return this.aphorism [indexAphorism];
        },

        // funzione per inviare messaggio e impostare la risposta automatica 
        sendMessage: function () {
            if (this.newMessage.message !== "") {
                const copyMessages = { ...this.newMessage }
                this.contacts[this.activeChat].messages.push(copyMessages);
                this.newMessage.message = "";
                setTimeout(() => {
                    console.log("Ook");
                    const RecivedMessage = {
                        date: "",
                        message: this.randomAphorism (),
                        status: "received",
                    };
                    this.contacts[this.activeChat].messages.push(RecivedMessage);
                }, 1000);
            }
        },

        // fuznione cerca per trovare i contatti tramite l'input sopra la lista chat con il quale vogliamo comunicare
        filterUser () {
            this.contacts.forEach(contact => {
                if (contact.name.toLowerCase().includes(this.search.toLowerCase())) {
                    contact.visible = true;
                } else {
                    contact.visible = false;
                }
            });
        },

        //funzione per eliminare i messaggi
        deleteMessage (index) {
            console.log("Elimina", this.activeChat, index);
            this.contacts[this.activeChat].messages.splice(index, 1); 
        },
    }
}).mount("#app")





