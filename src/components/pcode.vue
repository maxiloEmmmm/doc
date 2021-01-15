<script>
export default {
    name: 'pcode',
    render() {
        return <ysz-card >
            <span title={this.split ? '全部代码' : ''} slot='header' vOn:click={this.onClick} style="cursor:pointer">{this.src}</span>
            <pre data-start={this._start} class={this.number ? 'line-numbers' : '' } ref='index' data-split-c={this.split} data-line={this._h} data-src-c={this._target}></pre>
        </ysz-card>
    },
    props: {
        line: {type: String, default: ''},
        src: {type: String, default: ''},
        dir: {type: String, default: ''},
        number: {type: Boolean, default: true},
        split: {type: String, default: ''}
    },
    computed: {
        _start() {
            if(this.split && this.split.indexOf('-') !== -1) {
                let s = this.split.split('-')
                let start = parseInt(s[0])
                return isNaN(start) ? 1 : start
            }else {
                let v = parseInt(this.split)
                if(!isNaN(v) && v > 0) {
                    return v
                }else {
                    return 1
                }
            }
        },
        _h() {
            if(this.line && this.line.indexOf('-') !== -1) {
                let s = this.line.split('-')
                let start = parseInt(s[0])
                let end = parseInt(s[1])

                if(isNaN(start) || isNaN(end)) {
                    return ''
                }

                return `${start-this._start}-${end - this._start}`
            }else {
                let v = parseInt(this.line)
                if(!isNaN(v) && v > 0) {
                    return `${v}`
                }else {
                    return ''
                }
            }
        },
        _target() {
            return `./${this.dir}/${this.src}`
        }
    },
    mounted() {
        let prism = require('vendor/prism')
        Prism.highlightAll()
    },
    methods: {
        onClick() {
            window.open(this._target)
        }
    }
}
</script>