import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ImgFigure from './imgFigure'
import ControllerUnit from './controllerUnit'

let imageDatas = require('../assets/data/imageDatas.json')
require('../assets/style/main.scss')

let imageDatasArr = []

/**
 * 获取区间内的一个随机值
 * @param {Number} low 下限
 * @param {Number} high 上限
 */
let getRangeRandom = (low, high) => {
    return Math.ceil(Math.random() * (high - low) + low)
}

/**
 * 获取 0~30° 之间的一个任意正负值
 */
let get30DegRandom = () =>  {
    return ((Math.random() > 0.5? '' : '-') + Math.ceil(Math.random() * 30))
}

class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'Content',
            imgsArrangeArr: [
                {
                    pos: {
                        left: 0,
                        top: 0
                    },
                    rotate: 0,   //旋转角度
                    isInverse: false,
                    isCenter: false
                },
            ]
        }
    }
    Constant = {
        centerPos: {
            left: 0,
            right: 0
        },
        hPosRange: {    //水平方向的取值范围
            leftSecX: [0, 0],
            rightSecX: [0, 0],
            y: [0, 0]
        },
        vPosRange: {
            x: [0, 0],
            topY: [0, 0]
        }
    }
    componentWillMount() {   //生命周期将要挂载
        // this.setState({
        //     imageDatasArr: imageDatas
        // })
    }
    componentDidMount() {   //组件加载以后，为每张图片计算其位置的范围
        
        //首先拿到舞台的大小
        let stageDOM = ReactDOM.findDOMNode(this.refs.stage),
            stageW = stageDOM.scrollWidth,
            stageH = stageDOM.scrollHeight,
            halfStageW = Math.ceil(stageW / 2),
            halfStageH = Math.ceil(stageH / 2)

        //拿到一个imgeFigure的大小
        let imgFimgFigureDOM = ReactDOM.findDOMNode(this.refs.imgFigure0),
            imgW = imgFimgFigureDOM.scrollWidth,
            imgH = imgFimgFigureDOM.scrollHeight,
            halfImgW = Math.ceil(imgW / 2),
            halfImgH = Math.ceil(imgH / 2)

        // console.log([imgW, imgH])
        // console.log([halfImgW, halfImgH, halfStageW])

        //计算中心图片的位置点
        this.Constant.centerPos = {
            left: halfStageW - halfImgW,
            top: halfStageH - halfImgH
        }

        // console.log(this.Constant.centerPos)

        //计算左侧、右侧区域图片排布位置的取值范围
        this.Constant.hPosRange.leftSecX[0] = -halfImgW
        this.Constant.hPosRange.leftSecX[1] = halfStageW - halfImgW * 3

        this.Constant.hPosRange.rightSecX[0] = halfStageW + halfImgW
        this.Constant.hPosRange.rightSecX[1] = stageW - halfImgW
        this.Constant.hPosRange.y[0] = -halfImgH
        this.Constant.hPosRange.y[1] = stageH - halfImgH

        //计算上侧区域图片排布位置的取值范围
        this.Constant.vPosRange.topY[0] = -halfImgH
        this.Constant.vPosRange.topY[1] = halfStageH - halfImgH * 3
        this.Constant.vPosRange.x[0] = halfStageW - imgW
        this.Constant.vPosRange.x[1] = halfStageW

        this.rearrange(0)
    }
    /**
     * 翻转图片
     * @param index 输入当前被执行inverse操作的图片对应的图片信息数组的index值
     * @return {Function} 这是一个闭包函数，其内return一个真正待被执行的函数
     */
    inverse(index) {
        return function () {
            let imgsArrangeArr = this.state.imgsArrangeArr

            imgsArrangeArr[index].isInverse = !imgsArrangeArr[index].isInverse

            this.setState({
                imgsArrangeArr: imgsArrangeArr
            })
            // console.log(index)
            // alert(this.state.title)
        }.bind(this)
    }

    /**
     * 利用rearrange函数，居中对应index的图片
     * @param {Number} centerIndex 需要被居中的图片对应的图片信息数组的index值
     */
    center(index) {
        return function () {
            this.rearrange(index)
        }.bind(this)
    }

    /**
     * 利用自执行函数获取图片信息
     */
    imageDatas = (() => {
        for(let item of imageDatas) {
            let singleImageData = item
            singleImageData.imageURL = require('../assets/images/' + singleImageData.fileName)
            // console.log(singleImageData.imageURL)
            imageDatasArr.push(singleImageData)
        }
    })(imageDatas)
    /**
     * 重新布局所有图片
     * @param {Number} centerIndex 指定居中排布哪个图片
     */
    rearrange(centerIndex) {
        let imgsArrangeArr = this.state.imgsArrangeArr,
            Constant = this.Constant,
            centerPos = Constant.centerPos,
            hPosRange = Constant.hPosRange,
            vPosRange = Constant.vPosRange,
            hPosRangeLeftSecX = hPosRange.leftSecX,
            hPosRangeRightSecX = hPosRange.rightSecX,
            hPosRangeY = hPosRange.y,
            vPosRangeTopY = vPosRange.topY,
            vPosRangeX = vPosRange.x,

            imgsArrangeTopArr = [],
            topImgNum = Math.floor(Math.random() * 2),   //取一个或者不取
            topImgSpliceIndex = 0,

            imgsArrangeCenterArr = imgsArrangeArr.splice(centerIndex, 1)
            // console.log(hPosRangeRightSecX)

            //首先居中 centerIndex 的图片，居中图片不需要旋转
            imgsArrangeCenterArr[0] = {
                pos: centerPos,
                rotate: 0,
                isCenter: true
            }

            //取出要布局上侧的图片的状态信息
            topImgSpliceIndex = Math.ceil(Math.random() * (imgsArrangeArr.length - topImgNum))
            imgsArrangeTopArr = imgsArrangeArr.splice(topImgSpliceIndex, topImgNum)
            // console.log(topImgNum)

            //布局位于上侧的图片
            imgsArrangeTopArr.forEach((value, index) => {
                imgsArrangeTopArr[index] = {
                    pos: {
                        top: getRangeRandom(vPosRangeTopY[0], vPosRangeTopY[1]),
                        left: getRangeRandom(vPosRangeX[0], vPosRangeX[1])
                    },
                    rotate: get30DegRandom(),
                    isCenter: false
                }
            })

            //布局左右两侧的图片
            // console.log(imgsArrangeArr.length)
            for(let i = 0, j = imgsArrangeArr.length, k = Math.floor(j / 2); i < j; i++) {
                let hPosRangeLORX = null

                if(i < k) {
                    hPosRangeLORX = hPosRangeLeftSecX
                } else {
                    hPosRangeLORX = hPosRangeRightSecX
                }

                imgsArrangeArr[i] = {
                    pos: {
                        top: getRangeRandom(hPosRangeY[0], hPosRangeY[1]),
                        left: getRangeRandom(hPosRangeLORX[0], hPosRangeLORX[1])
                    },
                    rotate: get30DegRandom(),
                    isCenter: false
                }

                // console.log(i)
            }

            // debugger

            if(imgsArrangeTopArr && imgsArrangeTopArr[0]) {
                imgsArrangeArr.splice(topImgSpliceIndex, 0, imgsArrangeTopArr[0])
            }

            imgsArrangeArr.splice(centerIndex, 0, imgsArrangeCenterArr[0])

            this.setState({
                imgsArrangeArr: imgsArrangeArr
            })
    }
    render() {
        let controllerUnits = [],
            imgFigures = []
        // console.log(this.state.imgsArrangeArr)
        // console.log('1')
        imageDatas.forEach(function (value, index) {

            if(!this.state.imgsArrangeArr[index]) {
                this.state.imgsArrangeArr[index] = {
                    pos: {
                        left: 0,
                        top: 0
                    },
                    rotate: 0,
                    isInverse: false,
                    isCenter: false
                }
            }

            imgFigures.push(
                <ImgFigure 
                    data={value} 
                    key={index} 
                    ref={"imgFigure" + index} 
                    arrange={this.state.imgsArrangeArr[index]} 
                    inverse={this.inverse(index)}
                    center={this.center(index)}
                />
            )

            controllerUnits.push(
                <ControllerUnit
                    key={index} 
                    arrange={this.state.imgsArrangeArr[index]}
                    inverse={this.inverse(index)}
                    center={this.center(index)}
                />
            )
        }.bind(this))

        return (
            <div className="content">
                <section className="stage" ref="stage">
                    <section className="img-sec">
                        {imgFigures}
                    </section>
                    <nav className="controller-nav">
                        {controllerUnits}
                    </nav>
                </section>
            </div>
        )
    }
}

export default Content;