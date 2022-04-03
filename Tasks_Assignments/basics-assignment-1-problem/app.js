const app = Vue.createApp({
    data(){
        return {
            name:'Hadeel Yassin',
            age : 24,
            imgUrl : 'pic1.jpg'
        }

    },
    methods: {
        generateRand(){
            const randNum = Math.random()
            return randNum
        }

    }

}).mount('#assignment')