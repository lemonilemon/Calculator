export default {
    data() {
        return {
            count : 0
        }
    },
    methods : {
        output() {
            alert(this.count);
        }, 
        add() {
            ++this.count;
        }
    },
    template: `<button @click = "add();output();">count is {{ count }}</button>`
}