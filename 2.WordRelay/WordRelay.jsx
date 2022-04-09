const React = require('react');
const { Component } = React;


class WordRelay extends Component {
    state = {
        word: '조해인',
        value: '',
        result: '',
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
            this.setState({
                word: this.state.value,
                value: '',
                result: '딩동댕',
            });
        } else {
            this.setState({
                value: '',
                result: '땡'
            })
        }
        this.input.focus();
    };

    onRefInput = (c) => {
        this.input = c;
    };

    onChangeInput = (e) => {
        this.setState({
            value: e.target.value
        });
    };

    input;

    render() {
        return (
            <>
                <div>{this.state.word}</div>
                <form onSubmit={this.onSubmitForm}>
                    <input type="text" ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput} />
                    <button>입력!</button>
                </form>
                <div>{this.state.result}</div>
            </>
        );
    }
}

module.exports = WordRelay;