import Vue from 'vue'

new Vue({
    el: '#app',
    data() {
        return {
            prefix: 'Hello',
            number: 1
        }
    },
    render() {
        return <div>{this.prefix} Vue - {this._number}!</div>
    },
    computed: {
        _number() {
            return this.number + 1
        }
    }
})