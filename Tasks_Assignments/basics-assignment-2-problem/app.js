const app = Vue.createApp({
    data() {
        return {
            outputOne: '',
            outputTwo: '',
            confirmedOutputTwo: '',
        };
    },
    methods: {
        clickButton() {
            alert('Button was clicked')
        },
        setOutputOne(event) {
            this.outputOne = event.target.value;
        },
        setOutputTwo(event) {
            this.outputTwo = event.target.value;
        },
        displayOutputTwo() {
            this.confirmedOutputTwo = this.outputTwo;
        },
    }

}).mount('#assignment')