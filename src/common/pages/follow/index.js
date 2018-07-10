import React from 'react'
import * as _ from 'diana'
import './index.less'

export default class follow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            col:'#666'
        }
    }

    getRandomColor = () => {
        this.setState({
            col: _.rdColor(),
        })
    }

    // 组件渲染后，500毫秒改变一次组件颜色
    componentDidMount() {
        this.interval = setInterval(this.getRandomColor, 500)
    }

    // 组件将要死亡时清除计时器
    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        const { col } = this.state
        return (
            <div className="animated flip ani-box">
                <div><a href="https://github.com/pedrobabo/antd-admin" className="welcome animated flip text" style={{ color: col }}>项目地址</a></div>
                <img src={require('../../images/face.jpg')} width="100" alt="logo" className="lastPic" />
                <div className="animated swing discribe">本项目还会不断改进，添加功能</div>
                <div className="animated swing discribe">让各位大佬见笑了~~</div>
            </div>
        )
    }
}