// we can watch computed property not just data
// whenever shownResult changes(not when it's evaluated), shownResult watch will be executed

const app = Vue.createApp({
    data() {
        return {
            counter: 0,
        }
    },
    watch: {
        shownResult() {
            const that = this;
            setTimeout(function () {
                that.counter = 0;
            }, 5000);
        },
    },
    computed: {
        shownResult() {
            if (this.counter < 37) {
                return 'Not there yet';
            }
            else if (this.counter > 37) {
                return 'Too much!';
            }
            return this.counter;
        }
    },
    methods: {
        add(num) {
            this.counter += num;
        }
    },
}).mount('#assignment')