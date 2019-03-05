/* eslint-disable */

import React, { Component } from 'react'

// ----------添加图片组件，搭建图片结构

/**
 * 函数式组件声明
 * @param {object} props 
 */
/** 
let ImgFigure = (props) => {
    return (
        <figure className="img-figure">
            <img src={props.data.imageURL} alt={props.data.fileName}/>
            <figcaption>
                <h2 className="img-title">{props.data.title}</h2>
            </figcaption>
        </figure>
    )
}
*/

class ImgFigure extends Component{
    /*
     * figure的点击处理函数
     * 如果是居中的图片，翻转
     * 否则将图片设为居中
     */
    handleClick (e) {

      if (this.props.arrange.isCenter) {
        // 调用父组件的函数
        this.props.inverse();
      } else {
        this.props.center();
      }

      e.stopPropagation()
      e.preventDefault()
    }
  
    render(){
  
      let styleObj = {}
      /*
       * 使用图片的位置信息
       */
      // 如果props属性中指定了这张图片的位置，则使用
      if (this.props.arrange.pos){
        styleObj = this.props.arrange.pos
      }
  
      /*
       * 图片的旋转
       */
      // 如果图片的旋转角度有值并且不为0，添加旋转角度。
      // 兼容各种浏览器，浏览器前缀react写法参考：http://www.andismith.com/blog/2012/02/modernizr-prefixed/
      // let 
      if (this.props.arrange.rotate) {
        if(!styleObj.transform) {
          ['MozTransform', 'msTransform', 'WebkitTransform', 'OTransform', 'transform'].map((item) => {
            styleObj[item] = 'rotate(' + this.props.arrange.rotate + 'deg)'
          })
        }
      }

      // 方法二
    //   if(this.props.arrange.rotate) {
    //     (['MozTransform', 'msTransform', 'WebkitTransform', 'OTransform', 'transform']).forEach (function (value, index) {
    //       styleObj[value] = `rotate(${this.props.arrange.rotate}deg)`;
    //     }.bind(this))
    //     console.log(styleObj)
    //   }
  
      /*
       * 居中图片z-index高于旁边的图片，低于controller-nav的。取11的一次方
       */
      if (this.props.arrange.isCenter) {
        if(!styleObj.zIndex) {
          styleObj.zIndex = 11
        }
      }
  
      // 用类名控制图片的翻转
      let ImgFigureClassName = 'img-figure'
      ImgFigureClassName += this.props.arrange.isInverse ? ' is-inverse' : ''  // 两个类名之间要有空格分隔，is-inverse前面注意有个空格
  
      return(
        <figure className={ImgFigureClassName} style={styleObj} onClick={this.handleClick
        .bind(this)}>
          <img src={this.props.data.imageURL}
               alt={this.props.data.title}
          />
          <figcaption>
            <h2 className="img-title">{this.props.data.title}</h2>
            <div className="img-back" onClick={this.handleClick.bind(this)}>
              <p>
                {this.props.data.desc}
              </p>
            </div>
          </figcaption>
        </figure>
      );
    }
  }
  
export default ImgFigure