// eslint-disable
import React, { Component } from 'react'
import './index.less'

const MyContainer = (WrappedComponent) =>
    class extends Component {
        render() {
            return <WrappedComponent {...this.props} />
        }
    }

// 装饰器的前世今生
@MyContainer
class todo extends Component {
    render() {
        return (
            <div className="animated swing todo">
                <div>计划在后面继续不断添加新功能，逐步完善本项目，把工作学习中新学的知识技能综合运用进来，以提升自己！</div>
            </div>
        )
    }
}

export default todo