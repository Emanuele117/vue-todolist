//Rifare l'esercizio della to do list come fatto assieme in classe:

// - stampare in pagina un item per ogni elemento contenuto in un array

// - ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista

// - predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista

const app = new Vue({
    el: '#app',
    data: {
        newTask: '',
        tasks: [
            'far cambiare le gomme alla macchina',
            'Andare in palestra',
            'fare la spesa',
            'dar da mangiare al gatto'
        ],
        error: false
    },
    methods: {
        removeTask(i) {
            this.tasks.splice(i, 1)
        },
        addTask() {
            if (this.newTask != '' && this.newTask.length > 5) {
                this.tasks.push(this.newTask)
                this.error = false
            } else {
                this.error = true
            }
            this.newTask = ''
        }
    }
})



/* *
STRUMENTI USATI

- array

- v-for

- eventlistner (v-on/@click)

- splice(i)

- input

- v-model

- @click

- push

*/